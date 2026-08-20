'use client'
import { skills } from '@/lib/data';
import { Layers, Server, Terminal } from 'react-feather';
import { motion } from 'motion/react';
import {
  initial,
  transition,
  viewport,
  whileInView,
} from '@/lib/animation-settings';

const IconMap = {
  frontend: Layers,
  backend: Server,
  environment: Terminal,
};

const Skills = () => {
  return (
    <div className="py-6 flex flex-col sm:flex-row gap-4">
      {skills.map(({ category, skills }, index) => {
        const Icon = IconMap[category];
        return (
          <motion.article
            transition={{ ...transition, delay: index * 0.1 }}
            whileInView={whileInView}
            initial={initial}
            viewport={viewport}
            key={category}
            className="hover:border-(--color-primary) transition-colors duration-750 p-6 flex-1 flex flex-col gap-4 border-(--color-border) border-2 rounded-xl"
          >
            <div className="flex gap-2 items-center">
              <div className="p-2 bg-(--color-primary-subtle) rounded-lg border-(--color-primary) border">
                <Icon size={20} className="stroke-(--color-primary)" />
              </div>
              <h3 className="capitalize font-semibold">{category}</h3>
            </div>
            <ul className="flex flex-col gap-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="bg-(--color-border)/30 p-2 flex items-center gap-5 rounded-lg"
                >
                  <span className="w-2 h-2 bg-(--color-primary) rounded-full" />{' '}
                  {skill}
                </li>
              ))}
            </ul>
          </motion.article>
        );
      })}
    </div>
  );
};

export default Skills;
