import Hero from '../components/Hero';
import Section from '../components/Section';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Section
        sectionNumber="01"
        title="Featured Projects"
        description="A selection of things I've designed, built, and shipped."
        id="projects"
      >
        Projects
      </Section>
      <Section
        sectionNumber="02"
        title="academics"
        description="A selection of things I've designed, built, and shipped."
        id="academics"
      >
        Academics
      </Section>
      <Section
        sectionNumber="03"
        title="learning"
        description="A selection of things I've designed, built, and shipped."
        id="learning"
      >
        Learning
      </Section>
      <Section
        sectionNumber="04"
        title="skills"
        description="A selection of things I've designed, built, and shipped."
        id="skills"
      >
        Skills
      </Section>
      <Section
        sectionNumber="05"
        title="resume"
        description="A selection of things I've designed, built, and shipped."
        id="resume"
      >
        Resume
      </Section>
    </main>
  );
};

export default HomePage;
