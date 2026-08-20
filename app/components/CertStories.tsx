'use client';
import { continuousLearning, ContinuousLearningCert } from '@/lib/data';
import StoryButton from './StoryButton';
import ScrollHint from './ScrollHint';
import { useEffect, useState } from 'react';
import CertModal from './CertModal';
import {
  initial,
  transition,
  viewport,
  whileInView,
} from '@/lib/animation-settings';
import { motion } from 'motion/react';

const CertStories = () => {
  const [selectedCert, setSelectedCert] =
    useState<ContinuousLearningCert | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      if (selectedCert) {
        setSelectedCert(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [selectedCert]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleOpenModal = (cert: ContinuousLearningCert) => {
    setSelectedCert(cert);
    window.history.pushState({ modalOpen: true }, '');
  };

  const closeModal = () => {
    setSelectedCert(null);
    if (window.history.state?.modalOpen) {
      window.history.back();
    }
  };

  return (
    <>
      <div className="flex px-2 flex-col gap-4">
        <div className="flex overflow-y-hidden overflow-x-auto py-6 gap-4 scrollbar-none">
          {continuousLearning.map((cert: ContinuousLearningCert, index) => {
            const { id, title, imagePath, issuer } = cert;
            return (
              <motion.div
                key={id}
                transition={{
                  ...transition,
                  delay: isMobile ? 0 : index * 0.1,
                }}
                whileInView={whileInView}
                initial={initial}
                className="flex-1"
                viewport={{ ...viewport, margin: '0px', amount: 0 }}
              >
                <StoryButton
                  title={title}
                  issuer={issuer}
                  imagePath={imagePath}
                  handleClick={() => handleOpenModal(cert)}
                />
              </motion.div>
            );
          })}
          <motion.div
            transition={{
              ...transition,
              delay: isMobile ? 0 : continuousLearning.length * 0.1,
            }}
            whileInView={whileInView}
            initial={initial}
            viewport={{ ...viewport, margin: '0px', amount: 0 }}
            className="flex-1"
          >
            <StoryButton isComing={true} />
          </motion.div>
        </div>
        <ScrollHint className="self-end lg:hidden" to="left">
          swipe
        </ScrollHint>
      </div>
      <CertModal
        cert={selectedCert}
        isOpen={!!selectedCert}
        handleClose={closeModal}
      />
    </>
  );
};

export default CertStories;
