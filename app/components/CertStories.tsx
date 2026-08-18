'use client';
import { continuousLearning, ContinuousLearningCert } from '@/lib/data';
import StoryButton from './StoryButton';
import ScrollHint from './ScrollHint';
import React from 'react';
import CertModal from './CertModal';

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
          {continuousLearning.map((cert: ContinuousLearningCert) => {
            const { id, title, imagePath, issuer } = cert;
            return (
              <StoryButton
                key={id}
                title={title}
                issuer={issuer}
                imagePath={imagePath}
                handleClick={() => {
                  setSelectedCert(cert);
                }}
              />
            );
          })}
          <StoryButton isComing={true} />
        </div>
        <ScrollHint className="self-end lg:hidden" to="left" />
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
