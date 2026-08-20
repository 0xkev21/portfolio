'use client';
import Image from 'next/image';
import { motion } from 'motion/react';

type ActiveStoryProps = {
  title: string;
  issuer: string;
  imagePath: string;
  isComing?: boolean;
  handleClick: () => void;
};

type ComingSoonProps = {
  isComing: true;
};

type StoryButtonProps = ComingSoonProps | ActiveStoryProps;

const StoryButton = (props: StoryButtonProps) => {
  if (props.isComing) {
    return (
      <div className="flex-1 w-24 md:w-28 flex-col items-center gap-2 cursor-pointer">
        <div className="text-3xl text-(--color-border) flex items-center justify-center border-2 border-(--color-border) rounded-full w-24 aspect-square">
          +
        </div>
        <div className="md:text-sm text-center text-xs">
          <p className="font-bold">always learning</p>
          <p className="font-light">...</p>
        </div>
      </div>
    );
  }

  const { title, issuer, imagePath, handleClick } = props;
  return (
    <button
      onClick={handleClick}
      className="flex-1 md:w-28 w-24 flex-col items-center gap-2 cursor-pointer"
    >
      <div className="relative border-2 border-(--color-primary) rounded-full overflow-clip w-24 aspect-square">
        <motion.div layoutId={imagePath}>
          <Image
            alt="test"
            src={imagePath}
            fill
            className="object-cover w-full h-full p-0.5 rounded-full"
          />
        </motion.div>
      </div>
      <div className="md:text-sm text-xs">
        <p className="font-bold">{title}</p>
        <p className="font-light">{issuer}</p>
      </div>
    </button>
  );
};

export default StoryButton;
