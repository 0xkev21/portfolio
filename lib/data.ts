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
    imagePath: "/josh-joy-of-react.png",
    focus: "Mastered deep React fundamentals, component lifecycles, and advanced hooks.",
    application: "Utilized strict state management to prevent unnecessary re-renders, resulting in highly interactive and performant frontend architectures in Next.js.",
    skills: ["React", "Custom Hooks", "State Management", "Performance Optimization"],
    link: "https://courses.joshwcomeau.com/certificate/6a28629665091ac3acb59e85"
  },
  {
    id: "odin-project",
    title: "Foundations",
    imagePath: "/odin-project-foundations.png",
    issuer: "The Odin Project",
    focus: "Building robust full-stack applications from scratch without relying on heavy frameworks.",
    application: "Solidified my ability to engineer web tools without hand-holding, focusing strictly on raw web technologies and industry best practices.",
    skills: ["Vanilla JavaScript", "DOM Manipulation", "Git Workflow", "Web Fundamentals"],
    link: ""
  },
  {
    id: "master-dev-node",
    title: "Node.js Introduction",
    imagePath: "/master.dev-node-intro.png",
    issuer: "master.dev",
    focus: "Deep dive into server-side engineering and event-driven architecture.",
    application: "Upgraded my ability to build scalable RESTful APIs, manage complex asynchronous data flows, and secure backend environments.",
    skills: ["Node.js", "Express", "API Design", "Asynchronous JavaScript"],
    link: "https://static.frontendmasters.com/ud/c/b5b5bee3ad/ehyaBEyiou/node-js-v3-masterdev.pdf"
  },
  {
    id: "boot-dev-linux",
    title: "Learn Linux",
    imagePath: "/boot.dev-linux.png",
    issuer: "Boot.dev",
    focus: "System administration, CLI mastery, and shell scripting.",
    application: "Drastically improved my local development workflows and deployment confidence by mastering the environments my servers actually run on.",
    skills: ["Linux", "Bash Scripting", "CLI", "System Administration"],
    link: "https://www.boot.dev/certificates/09cbe831-85e0-4439-b7e0-7cadfb66d3dc"
  },
  {
    id: "fcc-js-algos",
    title: "JavaScript v7",
    imagePath: "/fcc-javascript-v7.png",
    issuer: "freeCodeCamp",
    focus: "Programmatic problem solving, complex logic, and data structure manipulation.",
    application: "Built a strict foundation in writing clean, efficient JavaScript, allowing me to write highly optimized business logic for my frontend components.",
    skills: ["JavaScript", "Algorithms", "Data Structures", "OOP"],
    link: "https://www.freecodecamp.org/certification/0xkev/javascript-algorithms-and-data-structures"
  },
  {
    id: "fcc-responsive-web",
    title: "Responsive Web Design v8",
    imagePath: "/fcc-web-design.png",
    issuer: "freeCodeCamp",
    focus: "Modern CSS architecture, CSS Grid, Flexbox, and fluid typography.",
    application: "Ensured that all my full-stack projects adapt flawlessly across device sizes without relying solely on component libraries.",
    skills: ["CSS3", "Flexbox", "CSS Grid", "Responsive UI"],
    link: ""
  },
  {
    id: "datacamp-github",
    title: "GitHub Foundations",
    imagePath: "/datacamp-github-foundations.png",
    issuer: "DataCamp",
    focus: "Advanced version control, repository management, and CI/CD concepts.",
    application: "Streamlined my project deployments and collaboration workflows, ensuring clean commit histories and safe code merges.",
    skills: ["Git", "GitHub Actions", "Version Control", "CI/CD"],
    link: ""
  }
];