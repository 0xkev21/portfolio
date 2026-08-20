'use client';
import { continuousLearning, ContinuousLearningCert } from '@/lib/data';
import StoryButton from './StoryButton';
import ScrollHint from './ScrollHint';
import React from 'react';
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
    React.useState<ContinuousLearningCert | null>(null);

  const closeModal = () => {
    setSelectedCert(null);
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex overflow-x-auto py-6 gap-4 scrollbar-none">
          {continuousLearning.map((cert: ContinuousLearningCert, index) => {
            const { id, title, imagePath, issuer } = cert;
            return (
              <motion.div
                key={id}
                transition={{ ...transition, delay: index * 0.1 }}
                whileInView={whileInView}
                initial={initial}
                viewport={viewport}
              >
                <StoryButton
                  title={title}
                  issuer={issuer}
                  imagePath={imagePath}
                  handleClick={() => {
                    setSelectedCert(cert);
                  }}
                />
              </motion.div>
            );
          })}
          <motion.div
            transition={{
              ...transition,
              delay: continuousLearning.length * 0.1,
            }}
            whileInView={whileInView} 
            initial={initial}
            viewport={viewport}
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
