import CertStories from '../components/CertStories';
import Hero from '../components/Hero';
import MaxWidthWrapper from '../components/MaxWidthWrapper';
import MileStones from '../components/MileStones';
import Section from '../components/Section';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <MaxWidthWrapper>
        <Section
          sectionNumber="01"
          title="Featured Projects"
          description="A selection of things I've designed, built, and shipped."
          id="projects"
        >
          Projects
        </Section>
        <div className="max-w-220 m-auto">
          <Section
            sectionNumber="02"
            title="Academics"
            description="A non-linear route into engineering, marked by certifications and global rankings."
            id="academics"
          >
            <MileStones />
          </Section>
        </div>
        <Section
          sectionNumber="03"
          title="Learning"
          description="Self-paced deep dives. Tap a story to see exactly what was mastered."
          id="learning"
        >
          <CertStories />
        </Section>
        <Section
          sectionNumber="04"
          title="Skills"
          description="The tools I reach for across the stack and the terminal."
          id="skills"
        >
          Skills
        </Section>
        <Section
          sectionNumber="05"
          title="Request the Resume"
          description="Drop your details and the full resume is delivered automatically — no back and forth."
          id="resume"
        >
          Resume
        </Section>
      </MaxWidthWrapper>
    </main>
  );
};

export default HomePage;
