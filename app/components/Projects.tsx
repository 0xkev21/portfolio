import { getFeaturedProjectList } from '@/lib/file-helpers';
import ProjectCard from './ProjectCard';

const Projects = async () => {
  const projects = await getFeaturedProjectList();
  return (
    <div className="md:grid flex flex-col grid-cols:2 lg:grid-cols-3 lg:grid-rows-3 gap-4">
      {projects.map(({ slug, frontmatter }, index) => {
        return (
          <ProjectCard
            key={slug}
            slug={slug}
            frontmatter={frontmatter}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default Projects;
