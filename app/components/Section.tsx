import { JetBrains_Mono } from 'next/font/google';
import MaxWidthWrapper from './MaxWidthWrapper';

const JetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
});

const Section = ({
  children,
  id,
  sectionNumber,
  title,
  description,
  ...delegated
}: {
  children: any;
  id?: string;
  sectionNumber: string;
  title: string;
  description: string;
}) => {
  return (
    <section className="gap-4 flex flex-col py-[clamp(4rem,6vw,7rem)]" id={id}>
      <div {...delegated}>
        <div
          className={`${JetBrainsMono.className} flex gap-2 items-center text-(--color-primary) font-bold`}
        >
          {sectionNumber} <span className="w-8 h-0.5 bg-(--color-primary)" />
        </div>
        <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold">{title}</h2>
        <p>{description}</p>
      </div>
      {children}
    </section>
  );
};

export default Section;
