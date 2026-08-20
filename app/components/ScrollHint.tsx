'use client';
import { motion } from 'motion/react';
import { ArrowUp } from 'react-feather';
import { JetBrains_Mono } from 'next/font/google';
import { ReactNode } from 'react';

const JetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
});

type Direction = 'top' | 'right' | 'bottom' | 'left';

type AnimationConfig = {
  rotate?: string;
  animate: {
    x?: number;
    y?: number;
  };
};

const AnimateMap: Record<Direction, AnimationConfig> = {
  top: { animate: { y: 4 } },
  right: { rotate: 'rotate-90', animate: { x: 4 } },
  bottom: { rotate: 'rotate-180', animate: { y: -4 } },
  left: { rotate: '-rotate-90', animate: { x: -4 } },
};

const ScrollHint = ({
  to,
  children,
  className,
}: {
  to: 'top' | 'right' | 'bottom' | 'left';
  children: ReactNode;
  className: string;
}) => {
  return (
    <div className={className}>
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
