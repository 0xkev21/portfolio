import MaxWidthWrapper from './MaxWidthWrapper';
import SubtleAlert from './SubtleAlert';
import Button from './Button';
import Image from 'next/image';
import { Briefcase, FileText } from 'react-feather';
import ScrollHint from './ScrollHint';

const Hero = () => {
  return (
    <MaxWidthWrapper>
      <section
        id="about"
        className="mt-5 flex flex-col md:flex-row py-[clamp(4rem,10vw,8rem)] min-h-10/12 gap-6 items-center"
      >
        <div className="flex flex-col items-start gap-6 max-w-xl">
          <SubtleAlert>available for opportunities</SubtleAlert>
          <h1 className="text-[clamp(2rem,5vw,4rem)] font-bold">
            Hi, I'm Kev. <br />
            <span className="text-(--color-primary) block -mt-2 md:-mt-6">
              Web Developer.
            </span>
          </h1>
          <p className="text-pretty">
            Currently in the final year of BSc in Computer Science. I build
            fast, reliable products end to end — from React and Next.js
            frontends to SQL databases. <br />I pivoted from passing 2nd-year
            MBBS (Medical School) to Information Technology full-time.
          </p>
          <div className="flex gap-4">
            <Button isLinkBtn href="#projects" type="primary">
              <Briefcase size={16} />
              View Projects
            </Button>
            <Button isLinkBtn href="#resume" type="secondary">
              <FileText size={16} />
              Request Resume
            </Button>
          </div>
        </div>
        <div className="w-full aspect-square md:w-96 md:h-96 border-4 border-dotted bg-(--color-primary-subtle) border-blue-400  rounded-2xl rotate-2">
          <div className="w-full m-2 h-full border-4 border-dotted border-orange-500 -rotate-2 rounded-2xl overflow-hidden">
            <Image
              className="object-cover object-bottom"
              alt="profile-picture"
              fill
              src="/profile.webp"
            />
          </div>
        </div>
      </section>
      <ScrollHint className="hidden md:block -mt-16" />
    </MaxWidthWrapper>
  );
};

export default Hero;
