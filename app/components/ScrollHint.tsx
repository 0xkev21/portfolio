'use client';
import { motion } from 'motion/react';
import { ArrowUp } from 'react-feather';
import { JetBrains_Mono } from 'next/font/google';

const JetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
});

const AnimateMap = {
  top: { animate: { y: 4 } },
  right: { rotate: 'rotate-90', animate: { x: 4 } },
  bottom: { rotate: 'rotate-180', animte: { y: -4 } },
  left: { rotate: '-rotate-90', animate: { x: -4 } },
};

const ScrollHint = ({ to, children, ...delegated }: { to: string }) => {
  return (
    <div {...delegated}>
      <div className={`${JetBrainsMono.className} flex gap-2 items-start`}>
        <motion.div
          transition={{
            type: 'spring',
            repeat: Infinity,
            repeatDelay: 0.2,
            duration: 0.5,
            repeatType: 'mirror',
          }}
          animate={AnimateMap[to]['animate']}
          className="div"
        >
          <ArrowUp size={14} className={AnimateMap[to]['rotate']} />
        </motion.div>
        {children}
      </div>
    </div>
  );
};

export default ScrollHint;
