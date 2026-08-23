'use client';
import SubtleAlert from './SubtleAlert';
import Button from './Button';
import Image from 'next/image';
import { Briefcase, FileText, RefreshCcw } from 'react-feather';
import ScrollHint from './ScrollHint';
import { motion, useAnimation } from 'motion/react';
import {
  initial,
  transition,
  viewport,
  whileInView,
} from '@/lib/animation-settings';
import { JetBrains_Mono } from 'next/font/google';
import Link from 'next/link';

const JetBrainsMono = JetBrains_Mono({ subsets: ['latin'] });

const Hero = () => {
  const dragControls = useAnimation();
  const handleReset = () => {
    dragControls.start({
      x: 0,
      transition: { type: 'spring', stiffness: 300, damping: 20 },
    });
  };
  return (
    <div>
      <section
        id="about"
        className="flex flex-col md:flex-row py-[clamp(4rem,8vw,5rem)] min-h-[90vh] gap-8 md:items-center"
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
          className="w-14/15 md:ml-0 ml-2 aspect-square md:w-96 md:h-96 border-4 border-dotted bg-(--color-primary-subtle) border-(--color-primary)  rounded-2xl rotate-2"
        >
          <div
            className={`${JetBrainsMono.className} -rotate-2 absolute gap-2 inset-0 m-auto p-6 flex flex-col items-center justify-center`}
          >
            <button
              onClick={handleReset}
              className="font-bold cursor-pointer absolute bottom-0 left-4/11 p-6 flex gap-2 items-center text-xs"
            >
              Reset <RefreshCcw size={12} />
            </button>
            <h3 className="font-bold">You found smth !</h3>
            <p className="text-sm">
              I started my journey building static pages with raw HTML, CSS, and
              vanilla JavaScript, you can actually{' '}
              <Link
                href="https://0xkev.tech"
                target="_blank"
                className="text-(--color-primary) font-bold underline underline-offset-2"
              >
                view my very first portfolio here
              </Link>
              .
            </p>
          </div>
          <motion.div
            animate={dragControls}
            drag="x"
            whileDrag={{
              boxShadow: '0px 10px 20px var(--foreground)',
              cursor: 'grabbing',
            }}
            dragTransition={{
              power: 0.1,
              timeConstant: 50,
              bounceStiffness: 100,
              bounceDamping: 100,
            }}
            className="relative cursor-grab w-full m-2 h-full border-4 border-dotted border-(--foreground) -rotate-2 rounded-2xl overflow-hidden"
          >
            <Image
              className="bg-(--foreground) pointer-events-none object-cover object-bottom saturate-85 contrast-100"
              alt="profile-picture"
              fill
              src="/profile.jpeg"
            />
          </motion.div>
        </motion.div>
      </section>
      <ScrollHint to="top" className="hidden md:block -mt-16">
        scroll
      </ScrollHint>
    </div>
  );
};

export default Hero;
