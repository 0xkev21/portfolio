import MaxWidthWrapper from './MaxWidthWrapper';
import { motion } from 'motion/react';
import SubtleAlert from './SubtleAlert';

const Hero = () => {
  return (
    <MaxWidthWrapper>
      <section id="about" className="flex flex-row py-[clamp(7rem,12vw,12rem)] min-h-10/12 gap-6">
        <div className="flex flex-col items-start gap-4 max-w-xl">
          <SubtleAlert>available for opportunities</SubtleAlert>
          <h1 className="text-[clamp(1.5rem,5vw,4rem)] font-bold">
            Hi, I'm Kev. <br />
            <span className="text-(--color-primary)">Web Developer.</span>
          </h1>
          <p>
            Currently in the final year of BSc in Computer Science. I build
            sleek, scalable full-stack web systems — I pivoted from passing
            2nd-year MBBS (Medical School) to Information Technology full-time.
          </p>
        </div>
        <div className="w-96 h-96 bg-orange-500 rounded-2xl -rotate-1">
          <div className="w-full m-2 h-full bg-blue-400 rotate-2 rounded-2xl"></div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
};

export default Hero;
