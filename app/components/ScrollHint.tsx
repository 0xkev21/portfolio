'use client';
import { motion } from 'motion/react';
import { ArrowDown } from 'react-feather';
import { JetBrains_Mono } from 'next/font/google';

const JetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
});

const ScrollHint = ({ ...delegated }) => {
  return (
    <div {...delegated}>
      <div
        className={`${JetBrainsMono.className} flex gap-2 items-start`}
      >
        <motion.div
          transition={{
            type: 'spring',
            repeat: Infinity,
            repeatDelay: 0.2,
            duration: 0.5,
            repeatType: 'mirror',
          }}
          animate={{ y: 4 }}
          className="div"
        >
          <ArrowDown size={14} />
        </motion.div>
        scroll
      </div>
    </div>
  );
};

export default ScrollHint;
