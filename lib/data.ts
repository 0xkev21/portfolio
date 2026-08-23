export type Academic = {
  title: string;
  description: string;
  isPresent?: boolean;
  type: "certificate" | "diploma" | "bachelor" | "medical";
  extras?: AcademicExtra[];
}

type AcademicExtra = {
  type: string;
  description: string;
};

export interface ContinuousLearningCert {
  id: string;
  title: string;
  issuer: string;
  focus: string;
  application: string;
  skills: string[];
  link?: string;
  imagePath: string
}

export const AcademicData:Array<Academic> = [
  {
    title: "Final Year - BSc in Computer Science",
    description: "Wrapping up the final year, focused on databases, artificial intelligence and applied web engineering.",
    isPresent: true,
    type: "bachelor",
  },
  {
    title: "NCC Education — Level 5 Diploma in Computing",
    description: "Advanced software development, database design and professional project delivery.",
    type: "diploma",
  },
  {
    title: "ITPEC FE — Fundamentals of Engineering",
    description: "Regional IT engineering fundamentals exam covering algorithms, networks, security and system design.",
    type: "certificate",
  },
  {
    title: "NCC Education — Level 4 Diploma in Computing",
    description: "Foundations of programming, computer systems and web development.",
    type: "diploma",
    extras: [
      {
        type: "award",
        description: "High Achiever Award — 3rd place globally",
      }
    ]
  },
  {
    title: "2nd Year MBBS (Medical School)",
    description: "Successfully completed preclinical foundational medical sciences before pivoting to pursue Information Technology full-time.",
    type: "medical",
  }
];

export const continuousLearning: ContinuousLearningCert[] = [
  {
    id: "joy-of-react",
    title: "The Joy of React",
    issuer: "Josh Comeau",
    imagePath: "/certs/josh-joy-of-react.png",
    focus: "Mastered deep React fundamentals, component lifecycles, and advanced hooks.",
    application: "Utilized strict state management to prevent unnecessary re-renders, resulting in highly interactive and performant frontend architectures in Next.js.",
     skills: [
      "Building accessible, highly interactive components from the ground up",
      "Managing complex application state using custom React Hooks",
      "Optimizing performance and preventing unnecessary re-renders",
      "Deep understanding of React's reconciliation and component lifecycle"
    ],
    link: "https://courses.joshwcomeau.com/certificate/6a28629665091ac3acb59e85"
  },
  {
    id: "odin-project",
    title: "Foundations",
    imagePath: "/certs/odin-project-foundations.png",
    issuer: "The Odin Project",
    focus: "Building robust applications from scratch without relying on heavy frameworks.",
    application: "Solidified my ability to engineer web tools without hand-holding, focusing strictly on raw web technologies and best practices.",
    skills: [
      "Architecting projects from scratch without relying on frameworks",
      "Manipulating the DOM directly using raw, Vanilla JavaScript",
      "Implementing professional Git workflows for version control",
      "Understanding core browser behaviors and web fundamentals"
    ],
  },
  {
    id: "master-dev-node",
    title: "Node.js Introduction",
    imagePath: "/certs/master.dev-node-intro.png",
    issuer: "master.dev",
    focus: "Deep dive into Node.js runtime mechanics, asynchronous non-blocking I/O, file system data persistence, and built-in HTTP server architecture.",
    application: "Architected a custom command-line (CLI) note-taking application from scratch, leveraging native File System APIs for persistent JSON storage, unit testing with Jest mocks, and serving formatted web views via raw HTTP servers.",
    skills: [
      "Understanding the event loop, non-blocking I/O, and asynchronous execution models",
      "Building executable custom CLI tools with argument parsing via yargs and process environments",
      "Implementing file-based database persistence and CRUD operations with the native `fs` module",
      "Writing isolated unit tests and function spies using the Jest testing framework",
      "Spinning up native HTTP servers with `http.createServer` to dynamically render HTML to clients"
    ],
    link: "https://static.frontendmasters.com/ud/c/b5b5bee3ad/ehyaBEyiou/node-js-v3-masterdev.pdf"
  },
  {
    id: "boot-dev-linux",
    title: "Learn Linux",
    imagePath: "/certs/boot.dev-linux.png",
    issuer: "Boot.dev",
    focus: "Mastering Unix-like command-line interfaces, filesystem architecture, process management, and local environment configuration.",
    application: "Overhauled my local development workflow by managing software dependencies directly through package managers, strictly controlling file permissions.",
    skills: [
      "Navigating filesystems and performing CRUD operations entirely via the terminal",
      "Configuring the PATH environment variable and executing shell scripts safely",
      "Piping standard input/output (stdin/stdout) to chain modular CLI tools like grep and find",
      "Administering system security through user management, root/sudo access, and strict file permissions",
      "Provisioning development environments using package managers like APT and Webi"
    ],
    link: "https://www.boot.dev/certificates/09cbe831-85e0-4439-b7e0-7cadfb66d3dc"
  },
  {
    id: "fcc-js-algos",
    title: "JavaScript v7",
    imagePath: "/certs/fcc-javascript-v7.png",
    issuer: "freeCodeCamp",
    focus: "Programmatic problem solving, complex logic, and data structure manipulation.",
    application: "Built a strict foundation in writing clean, efficient JavaScript, allowing me to write highly optimized business logic for my frontend components.",
    skills: [
      "Solving complex programmatic logic using optimized algorithms",
      "Manipulating advanced data structures for data processing",
      "Applying Object-Oriented Programming (OOP) paradigms",
      "Writing clean, efficient, and highly maintainable business logic"
    ],
    link: "https://www.freecodecamp.org/certification/0xkev/javascript-algorithms-and-data-structures"
  },
  {
    id: "fcc-responsive-web",
    title: "Responsive Web Design v8",
    imagePath: "/certs/fcc-web-design.png",
    issuer: "freeCodeCamp",
    focus: "Modern CSS architecture, CSS Grid, Flexbox, and fluid typography.",
    application: "Ensured that all my full-stack projects adapt flawlessly across device sizes without relying solely on component libraries.",
    skills: [
      "Architecting modern, mobile-first CSS layouts",
      "Mastering CSS Grid and Flexbox for complex UI structures",
      "Implementing fluid typography and dynamic viewport scaling",
      "Building accessible designs without pre-built component libraries"
    ],
    link: "https://freecodecamp.org/certification/0xkev/responsive-web-design"
  },
  {
    id: "datacamp-github",
    title: "GitHub Foundations",
    imagePath: "/certs/datacamp-github-foundations.png",
    issuer: "DataCamp",
    focus: "Comprehensive version control, collaborative workflows, agile project management, and enterprise administration using Git and GitHub.",
    application: "Streamlined project collaboration by implementing secure development workflows, organizing tasks with GitHub Projects, and standardizing development environments via Codespaces.",
    skills: [
      "Managing advanced version control and repository structures",
      "Automating testing and deployment pipelines using CI/CD concepts",
      "Resolving merge conflicts and maintaining clean commit histories",
      "Collaborating safely using branching and pull request workflows"
    ],
    link: "https://www.datacamp.com/completed/statement-of-accomplishment/track/1e55addbe267fe6ed9e2840eced1d44d90c56834"
  }
];

export const skills = [
  {
    category: 'frontend',
    skills: [
      'JavaSript',
      'Tailwind',
      'Typescript',
      'Motion'
    ]
  },
  {
    category: 'backend',
    skills: [
      'Next.js',
      'REST APIs',
      'SQL',
      'Firebase',
    ]
  },
  {
    category: 'environment',
    skills: [
      'Figma',
      'Linux',
      'Git & GitHub',
    ]
  }
]