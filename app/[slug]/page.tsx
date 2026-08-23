import { MDXRemote } from 'next-mdx-remote-client/rsc';
import { getProject, getProjectList } from '@/lib/file-helpers';
import { notFound } from 'next/navigation';
import MaxWidthWrapper from '../components/MaxWidthWrapper';
import { JetBrains_Mono } from 'next/font/google';
import { ArrowUp, GitHub } from 'react-feather';
import Button from '../components/Button';
import Image from 'next/image';
import { Metadata, ResolvingMetadata } from 'next';

export async function generateStaticParams() {
  const projects = await getProjectList();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { frontmatter } = await getProject(slug);

    const previousImages = (await parent).openGraph?.images || [];

    return {
      title: frontmatter.title,
      description: frontmatter.description,
      openGraph: {
        title: frontmatter.title,
        description: frontmatter.description,
        type: 'article',
        images: [frontmatter.imagePath, ...previousImages],
      },
      twitter: {
        card: 'summary_large_image',
        title: frontmatter.title,
        description: frontmatter.description,
        images: [frontmatter.imagePath],
      },
    };
  } catch (error) {
    return {
      title: 'Project Not Found',
    };
  }
}

const tailwindProses = `text-(--foreground)/90 
  prose-p:text-(--foreground)/90
  prose-li:text-(--foreground)/90
  
  prose-headings:text-(--foreground)
  prose-headings:font-bold 
  prose-headings:tracking-tight
  prose-strong:text-(--foreground)
  
  /* 3. Links */
  prose-a:text-(--color-primary)
  prose-a:decoration-(--color-primary)/30
  hover:prose-a:decoration-(--color-primary)
  prose-a:transition-colors
  
  /* 4. Code Blocks & Quotes */
  prose-code:text-(--color-primary)
  prose-code:bg-(--color-primary)/10
  prose-code:px-1 prose-code:py-0.5 prose-code:rounded-md
  prose-code:before:hidden prose-code:after:hidden
  prose-blockquote:text-(--foreground)/80
  prose-blockquote:border-l-(--color-primary)
  
  /* 5. Dividers & Images */
  prose-hr:border-(--color-border)
  prose-img:rounded-2xl`;

const JetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
});

const ProjectPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  try {
    const { frontmatter, content } = await getProject(slug);
    return (
      <MaxWidthWrapper>
        <article className="max-w-3xl text-pretty m-auto grid gap-6 py-[clamp(4rem,10vw,6rem)]">
          <header className="grid gap-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-2">
              {frontmatter.title}
            </h1>
            <p className="font-light">{frontmatter.description}</p>
            <ul
              className={`${JetBrainsMono.className} text-xs flex flex-wrap gap-2 items-center`}
            >
              {frontmatter.tech.map((tech: string, index: number) => {
                return (
                  <li
                    className="p-2 border-(--color-border) border bg-(--foreground)/3 rounded-lg"
                    key={index}
                  >
                    {tech}
                  </li>
                );
              })}
            </ul>
            <div className="w-full">
              <Image
                src={frontmatter.imagePath}
                alt={frontmatter.title}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>
          </header>
          <div
            className={`${tailwindProses} max-w-none prose text-md text-(--foreground)`}
          >
            <MDXRemote source={content} />
          </div>
          <div className="flex gap-2 items-stretch">
            {frontmatter.github && (
              <Button
                type="secondary"
                href={frontmatter.github}
                isLinkBtn
                className="w-full"
                target="_blank"
              >
                <GitHub size={14} />
                Source
              </Button>
            )}

            {frontmatter.live && (
              <Button
                isLinkBtn
                type="primary"
                href={frontmatter.live}
                className="w-full"
                target="_blank"
              >
                <ArrowUp size={14} className="rotate-45" />
                View Live
              </Button>
            )}
          </div>
        </article>
      </MaxWidthWrapper>
    );
  } catch (error) {
    notFound();
  }
};

export default ProjectPage;
