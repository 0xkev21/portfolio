'use client';
import { initial, transition, whileInView } from '@/lib/animation-settings';
import { motion } from 'motion/react';
import { JetBrains_Mono } from 'next/font/google';
import Link from 'next/link';
import { ArrowUp } from 'react-feather';

const JetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
});

interface FrontMatter {
  title: string;
  description: string;
  userCount?: string;
  tech: string[];
}

const ProjectCard = ({
  slug,
  frontmatter,
  index,
}: {
  slug: string;
  index: number;
  frontmatter: any;
}) => {
  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      transition={transition}
      viewport={{ once: true }}
      className={`${index % 2 == 0 && 'col-span-2'} ${index % 3 == 0 && 'row-span-2'} last:row-start-2 last:col-start-3`}
    >
      <Link key={slug} href={`/${slug}`}>
        <div className="group hover:border-(--color-primary) text-(--foreground) transition-colors duration-500 relative bg-(--foreground)/2 h-full gap-6 p-4 border-(--color-border) border rounded-xl flex flex-col justify-between">
          <div className="flex flex-col items-start gap-2">
            <h3 className="text-xl font-semibold">{frontmatter.title}</h3>
            <p className="font-regular">{frontmatter.description}</p>
            {frontmatter.userCount && (
              <span
                className={`${JetBrainsMono.className} text-sm px-2 py-1 border-(--color-primary) border rounded-full bg-(--color-primary-subtle)`}
              >
                {frontmatter.userCount}
              </span>
            )}
          </div>
          <ul className={`${JetBrainsMono.className} flex gap-2 items-start`}>
            {frontmatter.tech.map((tech: string, index: number) => (
              <li
                className="text-xs px-2 py-1 border-(--color-border) border bg-(--foreground)/3 rounded-lg"
                key={index}
              >
                {tech}
              </li>
            ))}
          </ul>
          <div className="rotate-45 absolute top-4 right-4 text-(--foreground) transition-colors duration-500 group-hover:text-(--color-primary)">
            <ArrowUp size={20} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
