import CertStories from '../components/CertStories';
import Hero from '../components/Hero';
import MaxWidthWrapper from '../components/MaxWidthWrapper';
import MileStones from '../components/MileStones';
import Projects from '../components/Projects';
import ResumeForm from '../components/ResumeForm';
import ResumeSection from '../components/ResumeSection';
import Section from '../components/Section';
import Skills from '../components/Skills';

const HomePage = () => {
  return (
    <>
      <MaxWidthWrapper>
        <main className="flex flex-col gap-6">
          <Hero />
          <Section
            sectionNumber="01"
            title="Featured Projects"
            description="A selection of things I've designed, built, and shipped."
            id="projects"
          >
            <Projects />
          </Section>
          <div className="max-w-220 m-auto w-full">
            <Section
              sectionNumber="02"
              title="Academic MileStones"
              description="A non-linear route into engineering, marked by certifications and global rankings."
              id="academics"
            >
              <MileStones />
            </Section>
          </div>
          <Section
            sectionNumber="03"
            title="Continuous Learning"
            description="Self-paced deep dives. Tap a story to see exactly what was mastered."
            id="learning"
          >
            <CertStories />
          </Section>
          <Section
            sectionNumber="04"
            title="Technical Arsenal"
            description="The tools I reach for across the stack and the terminal."
            id="skills"
          >
            <Skills />
          </Section>
          <div className="md:flex gap-8 items-center" id="resume">
            <Section
              sectionNumber="05"
              title="Request the Resume"
              description="Drop your details and the full resume is delivered automatically — no back and forth."
            >
              <ResumeSection />
            </Section>
            <ResumeForm className="flex-1 min-w-80" />
          </div>
        </main>
      </MaxWidthWrapper>
    </>
  );
};

export default HomePage;
