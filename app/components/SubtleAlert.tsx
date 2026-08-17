'use client';
import { motion } from 'motion/react';
import { JetBrains_Mono } from 'next/font/google';

const JetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
});

const SubtleAlert = ({ children }) => {
  return (
    <div
      className={`${JetBrainsMono.className} inline-flex gap-3 px-4 py-2 items-center border border-(--color-border) rounded-full text-xs`}
    >
      <div className="relative flex w-5 h-5 items-center justify-center">
        <motion.span
          transition={{
            repeat: Infinity,
            duration: 0.8,
            repeatDelay: 0.3,
          }}
          initial={{
            scale: 0,
            opacity: 1,
          }}
          animate={{
            scale: 1.4,
            opacity: 0,
          }}
          className="absolute w-full h-full rounded-full bg-(--color-primary)"
        />

        <span className="relative w-3 h-3 rounded-full bg-(--color-primary)" />
      </div>

      {children}
    </div>
  );
};

export default SubtleAlert;
