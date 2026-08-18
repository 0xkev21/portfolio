'use client';
import { Award, Bookmark, FileText, Layers, Thermometer } from 'react-feather';
import { motion } from 'motion/react';
import { JetBrains_Mono } from 'next/font/google';
import type { Academic } from '@/lib/data';

const JetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
});

const IconMap: Record<string, React.ElementType> = {
  certificate: Bookmark,
  diploma: FileText,
  bachelor: Layers,
  medical: Thermometer,
  award: Award,
};

const MileStone = ({ academic }: { academic: Academic }) => {
  const { title, description, type, isPresent, extras } = academic;
  const Icon = IconMap[type];
  return (
    <article className="flex flex-row gap-2 md:gap-4 items-start">
      <div className="text-(--color-foreground) flex items-center justify-center">
        <div className="relative rounded-full bg-(--background) border border-(--color-primary) p-2 md:p-3">
          <Icon size={16} className="stroke-(--color-primary)" />
          {isPresent && (
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
      <div className="flex flex-1 flex-col p-4 gap-3 hover:border-(--color-primary) transition-all duration-750 border border-(--color-border) rounded-2xl">
        <div className={`${JetBrainsMono.className} flex flex-row gap-2`}>
          {isPresent ? (
            <>
              <span className="text-xs bg-(--color-border) px-2 py-1 rounded-full uppercase">
                present
              </span>
              <span className="text-xs bg-(--color-primary) px-2 py-1 text-(--background) p-2 rounded-full">
                ongoing
              </span>
            </>
          ) : (
            <span className="text-xs bg-(--color-border) px-2 py-1 rounded-full uppercase">
              {type}
            </span>
          )}
        </div>
        <h3 className={`${JetBrainsMono.className} text-lg font-extrabold`}>
          {title}
        </h3>
        <p className="font-normal">{description}</p>
        {extras?.map(({ type, description }) => {
          const Icon = IconMap[type];
          return (
            <div
              key={description}
              className="text-sm font-semibold border border-(--color-primary) p-2 bg-(--color-primary-subtle) rounded-lg flex gap-2 items-center"
            >
              <Icon size={16} />
              <span>{description}</span>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default MileStone;
