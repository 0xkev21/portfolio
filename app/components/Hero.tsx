'use client';
import MaxWidthWrapper from './MaxWidthWrapper';
import SubtleAlert from './SubtleAlert';
import Button from './Button';
import Image from 'next/image';
import { ArrowUp, Briefcase, FileText } from 'react-feather';
import ScrollHint from './ScrollHint';
import { motion } from 'motion/react';
import { animate, initial, transition, viewport, whileInView } from '@/lib/animation-settings';

const Hero = () => {
  return (
    <div>
      <section
        id="about"
        className="mt-5 flex flex-col md:flex-row py-[clamp(4rem,10vw,6rem)] min-h-screen gap-8 items-center overflow-hidden"
      >
        <motion.div
          initial={initial}
          whileInView={whileInView}
          transition={transition}
          viewport={viewport}
          className="flex flex-col items-start gap-6 max-w-xl"
        >
          <SubtleAlert>available for opportunities</SubtleAlert>
          <h1 className="text-[clamp(2rem,5vw,4rem)] font-bold">
            Hi, I'm Kev. <br />
            <span className="text-(--color-primary) block -mt-2 md:-mt-6">
              Web Developer.
            </span>
          </h1>
          <p className="text-pretty md:text-lg">
            Currently in the final year of BSc in Computer Science. I build
            fast, reliable products end to end — from React and Next.js
            frontends to SQL databases. <br />I pivoted from passing 2nd-year
            MBBS (Medical School) to Information Technology full-time.
          </p>
          <div className="flex gap-4">
            <Button className="flex" isLinkBtn href="#projects" type="primary">
              <Briefcase size={16} />
              View Projects
            </Button>
            <Button className="flex" isLinkBtn href="#resume" type="secondary">
              <FileText size={16} />
              Request Resume
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={initial}
          whileInView={whileInView}
          transition={transition}
          viewport={viewport}
          className="w-full aspect-square md:w-96 md:h-96 border-4 border-dotted bg-(--color-primary-subtle) border-(--color-primary)  rounded-2xl rotate-2"
        >
          <div className="w-full m-2 h-full border-4 border-dotted border-(--foreground) -rotate-2 rounded-2xl overflow-hidden">
            <Image
              className="object-cover object-bottom saturate-85 contrast-100"
              alt="profile-picture"
              fill
              src="/profile.jpeg"
            />
          </div>
        </motion.div>
      </section>
      <ScrollHint to="top" className="hidden md:block -mt-16">
        scroll
      </ScrollHint>
    </div>
  );
};

export default Hero;
