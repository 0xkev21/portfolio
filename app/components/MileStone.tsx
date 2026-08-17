'use client';
import { Layers } from 'react-feather';
import { motion } from 'motion/react';
import { JetBrains_Mono } from 'next/font/google';

const JetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
});

const MileStone = ({ isCurrent }: { isCurrent: boolean }) => {
  return (
    <article className="flex flex-row gap-4 items-start">
      <div className="text-(--color-foreground) flex items-center justify-center">
        <div className="relative rounded-full bg-(--background) border border-(--color-primary) p-3">
          <Layers size={16} className="stroke-(--color-primary)" />
          {isCurrent && (
            <motion.span
              transition={{
                repeat: Infinity,
                duration: 0.8,
                repeatDelay: 0.1,
              }}
              initial={{
                scale: 1,
                opacity: 1,
              }}
              animate={{
                scale: 2.5,
                opacity: 0,
              }}
              className="-z-1 absolute top-0 left-0 w-full h-full rounded-full border border-(--color-primary)"
            />
          )}
        </div>
      </div>
      <div className="flex flex-col p-4 gap-3 border border-(--color-border) rounded-2xl">
        <div className={`${JetBrainsMono.className} flex flex-row gap-2`}>
          <span className="text-xs bg-(--color-border) px-2 py-1 rounded-full">
            Current
          </span>
          <span className="text-xs bg-(--color-primary) px-2 py-1 text-(--background) p-2 rounded-full">
            ongoing
          </span>
        </div>
        <h3 className={`${JetBrainsMono.className} text-lg font-extrabold`}>
          Final Year — BSc in Computer Science
        </h3>
        <p className="font-normal">
          Wrapping up the final year, focused on distributed systems, databases
          and applied web engineering.
        </p>
      </div>
    </article>
  );
};

export default MileStone;
