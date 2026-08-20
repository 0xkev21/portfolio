'use client';
import { motion } from 'motion/react';
import MileStone from './MileStone';
import { Academic, AcademicData } from '@/lib/data';
import {
  initial,
  transition,
  viewport,
  whileInView,
} from '@/lib/animation-settings';

const MileStones = () => {
  return (
    <div className="relative flex items-stretch mt-6 flex-col gap-6">
      {AcademicData.map((academic: Academic) => {
        return (
          <motion.div
            key={academic.title}
            transition={transition}
            whileInView={whileInView}
            initial={initial}
            viewport={viewport}
          >
            <MileStone academic={academic} />
          </motion.div>
        );
      })}
      <div className="w-px h-full top-0 left-4 md:left-5 -z-1 absolute bg-linear-to-b from-(--color-primary) to-(--color-border)" />
    </div>
  );
};

export default MileStones;
