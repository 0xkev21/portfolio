import matter from "gray-matter";
import fs from "node:fs/promises";
import path from "node:path";

export const getProjectList = async () => {
  const projects = [];
  
  const fileNames = await readDir('/projects');
  for(const fileName of fileNames) {
    const rawContent = await readFile(`/projects/${fileName}`);

    const {data: frontmatter} = matter(rawContent);

    projects.push({
      slug: fileName.replace('.mdx', ''),
      frontmatter
    })
  }

  return projects;
}

export const getProject = async (slug: string) => {
  const rawContent = await readFile(`/projects/${slug}.mdx`);
   const { data: frontmatter, content } = matter(rawContent);
   return { frontmatter, content };
}

const readDir = (dirPath: string) => {
  return fs.readdir(path.join(/*turbopackIgnore: true*/process.cwd(), dirPath));
}

const readFile = (filePath: string) => {
  return fs.readFile(path.join(/*turbopackIgnore: true*/process.cwd(), filePath));
}
