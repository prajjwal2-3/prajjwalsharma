export const FORWARD_LOGO =
  "https://img.icons8.com/ios/50/000000/circled-right-2.png";
export const BACKWARD_LOGO =
  "https://img.icons8.com/ios/50/000000/circled-left-2.png";
export const SHIMMER_IMAGE_URL =
  "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*H3jZONKqRuAAeHnG.jpg";
export const GITUHB_LOGO_URL =
  "https://cdn-icons-png.flaticon.com/512/25/25231.png";
export const ANDROID_LOGO =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Android_logo_2019_%28stacked%29.svg/2346px-Android_logo_2019_%28stacked%29.svg.png";

const BOOTSTRAP_FOR_SKILL_ICON = "w-12 text-4xl mx-auto inline-block ";
export const RESUME_LINK =
  "https://drive.google.com/file/d/11ydWF7EJ2_PMEHAMren9EdkBRu-pORg7/view?usp=sharing";

export const PROFILE_PIC =
  "https://res.cloudinary.com/dzkldv06d/image/upload/v1708884662/xxk0icbcarelejf0nqe6.jpg";
interface Social {
  github: string;
  linkedin: string;
  twitter: string;
  email: string;
}

interface About {
  title: string;
  description: string;
}

interface Company {
  name: string;
  description: string;
  tenure: string;
  websiteLink: string;
}

interface Experience {
  title: string;
  companies: Company[];
}

interface Skill {
  skillName: string;
  skillIcon: {
    alt: string;
    classname: string;
    src: string;
  };
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  codeLink: string;
  websiteLink: string;
  androidAppLink?: string;
  screenshots: string[];
}

interface Data {
  name: string;
  title: string;
  social: Social;
  about: About;
  experience: Experience;
  skills: Skill[];
  projects: Project[];
}

export const data: Data = {
  name: "Prajjwal sharma",
  title: "Full Stack Developer",
  social: {
    github: "https://github.com/prajjwal2-3",
    linkedin: "https://www.linkedin.com/in/prajjwal-sharma-5700811b1/",
    twitter: "https://twitter.com/prajjwa63214072",
    email: "prajjwalbh25@gmail.com",
  },
  about: {
    title: "My Background",
    description:
      "I'm a Second-year B.Tech student who loves building things. My passion for creating projects from scratch drives me to stay current with the latest technologies and to tackle projects of any size or complexity.  ",
  },
  experience: {
    title: "My Experience",
    companies: [
      {
        name: "Aequus",
        description:
          `Still under development, Aequus is a Gaming challenge website that let's you challenge your friend in real time and win exciting rewards. I am working here as a full stack developer, building backend infrastructure using Go and NodeJS, and frontend with NextJS. `,
        tenure: "August 2024 - Present (Full Stack Developer)",
        websiteLink: "https://aequusplay.com",
      },
      {
        name: "Conqr",
        description:
          `At Conqr, I built the entire platform from scratch using Next.js (TypeScript) with the latest features like App Router and Server Actions. I used Zustand for state management and Shadcn for the component library. For the backend, I set up the infrastructure using PostgreSQL and Prisma ORM.

I developed key features, including an AI-powered navigation bot, a Document Conflict Check Analyzer, a Gap Analysis Tool, and a Document Summarizer. Currently, I’m building a live conflict-checking text editor for real-time document analysis.`,
        tenure: "April 2024 - August 2024 (Nextjs Developer Intern)",
        websiteLink: "https://conqrr.vercel.app",
      },
      {
        name: "Social Yield Capital",
        description:
          `I architected and developed a real estate platform focused on social housing and fractional ownership using Next.js and PostgreSQL. I implemented server actions and optimistic updates, which reduced perceived latency by 50% and significantly enhanced the user experience. I also designed a custom chatbot support system that automated 70% of user queries. For authentication, I integrated Auth0, ensuring GDPR compliance and reducing security vulnerabilities by 80%. Additionally, I optimized database queries using Prisma ORM, leading to a 40% reduction in API response times.`,
        tenure: "June 2024 - July 2024 (Full Stack Developer)",
        websiteLink: "https://social-yield-capital.vercel.app",
      },
      {
        name: "Wordent",
        description:
          `At Wordent, I developed a Patent Similarity Analyzer Tool using Next.js (TypeScript), MongoDB, Express, and Node.js. This tool efficiently analyzes and compares patent documents to identify similarities, streamlining the patent search process for users. The combination of these technologies allowed for scalable and high-performance handling of large patent datasets.
          This was an Internal tool that was built for a UK based legal firm, that's why there isn't any hosted link.
          `,
        tenure: "Feb 2024 - April 2024 (Full Stack Developer + GenAI)",
        websiteLink: "",
      },
    ],
  },
  skills: [
    {
      skillName: "NextJS",
      skillIcon: {
        alt: "nextjslogo",
        classname: BOOTSTRAP_FOR_SKILL_ICON,
        src: "https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png",
      },
    },
    {
      skillName: "ReactJS",
      skillIcon: {
        alt: "reactjslogo",
        classname: BOOTSTRAP_FOR_SKILL_ICON,
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
      },
    },
    {
      skillName: "ExpressJS",
      skillIcon: {
        alt: "expressjslogo",
        classname: BOOTSTRAP_FOR_SKILL_ICON,
        src: "https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png",
      },
    },
    {
      skillName: "NodeJS",
      skillIcon: {
        alt: "nodejslogo",
        classname: BOOTSTRAP_FOR_SKILL_ICON,
        src: "https://cdn.cdnlogo.com/logos/n/94/nodejs-icon.svg",
      },
    },
    {
      skillName: "MongoDB",
      skillIcon: {
        alt: "mongodblogo",
        classname: BOOTSTRAP_FOR_SKILL_ICON,
        src: "https://cdn.cdnlogo.com/logos/m/30/mongodb-icon.svg",
      },
    },
    {
      skillName: "PostgreSQL",
      skillIcon: {
        alt: "postgresqllogo",
        classname: BOOTSTRAP_FOR_SKILL_ICON,
        src: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
      },
    },
    {
      skillName: "Prisma ORM",
      skillIcon: {
        alt: "prismalogo",
        classname: BOOTSTRAP_FOR_SKILL_ICON,
        src: "https://seeklogo.com/images/P/prisma-logo-3805665B69-seeklogo.com.png",
      },
    },
    {
      skillName: "Docker",
      skillIcon: {
        alt: "dockerlogo",
        classname: BOOTSTRAP_FOR_SKILL_ICON,
        src: "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png",
      },
    },
    {
      skillName: "Postman",
      skillIcon: {
        alt: "postman",
        classname: BOOTSTRAP_FOR_SKILL_ICON,
        src: "https://www.svgrepo.com/show/354202/postman-icon.svg",
      },
    },
    {
      skillName: "Shadcn-UI",
      skillIcon: {
        alt: "shadcn-ui",
        classname: BOOTSTRAP_FOR_SKILL_ICON,
        src: "https://seeklogo.com/images/S/shadcn-ui-logo-EF735EC0E5-seeklogo.com.png?v=638421451470000000",
      },
    },
    {
      skillName: "Typescript",
      skillIcon: {
        alt: "Typescriptlogo",
        classname: BOOTSTRAP_FOR_SKILL_ICON,
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png",
      },
    },
    {
      skillName: "Javascript",
      skillIcon: {
        alt: "javascriptlogo",
        classname: BOOTSTRAP_FOR_SKILL_ICON,
        src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      },
    },
    {
      skillName: "TailwindCSS",
      skillIcon: {
        alt: "tailwindlogo",
        classname: BOOTSTRAP_FOR_SKILL_ICON,
        src: "https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo-thumbnail.png",
      },
    },
    {
      skillName: "HTML",
      skillIcon: {
        alt: "HTMLlogo",
        classname: BOOTSTRAP_FOR_SKILL_ICON,
        src: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
      },
    },
    {
      skillName: "CSS",
      skillIcon: {
        alt: "CSSlogo",
        classname: BOOTSTRAP_FOR_SKILL_ICON,
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
      },
    },
  ],
  projects: [
    {
      title: "Easevent",
      description:
        "With easevent you can create events and manage them from a single platform. ",
      tags: [
        "NextJS",
        "Tailwind CSS",
        "PostgreSQL",
        "Framer-motion",
        "Typescript",
        "Next-Auth",
      ],
      codeLink: "https://github.com/prajjwal2-3/easevent",
      websiteLink: "https://easevent.vercel.app/",
      screenshots: [
        "https://res.cloudinary.com/dzkldv06d/image/upload/v1728709191/Screenshot_2024-10-12_102638_jkyov4.png",
        "https://res.cloudinary.com/dzkldv06d/image/upload/v1728709191/Screenshot_2024-10-12_102717_eoxbl7.png",
        "https://res.cloudinary.com/dzkldv06d/image/upload/v1728709189/Screenshot_2024-10-12_102806_sutf8o.png",
      ],
    },
    {
      title: "Taskify",
      description:
        "With taskify you can list your task and categorize them in various columns. ",
      tags: [
        "NextJS",
        "Tailwind CSS",
        "MongoDB",
        "Framer-motion",
        "Typescript",
        "NodeJS",
        "Next-Auth",
      ],
      codeLink: "https://github.com/prajjwal2-3/workflow-trello.git",
      websiteLink: "https://trello-board-as.vercel.app/",
      screenshots: [
        "https://res.cloudinary.com/dzkldv06d/image/upload/v1722740648/Screenshot_2024-08-04_083206_cokskc.png",
        "https://res.cloudinary.com/dzkldv06d/image/upload/v1722740663/Screenshot_2024-08-04_083345_mtxvze.png",
        "https://res.cloudinary.com/dzkldv06d/image/upload/v1722740662/Screenshot_2024-08-04_083359_hgiexe.png",
      ],
    },
    {
      title: "RoadmapAI",
      description: "With RoadmapAI you can generate roadmaps for any topics.",
      tags: ["Tailwind CSS", "NextJS", "Claude haiku", "Framer-motion"],
      codeLink: "https://github.com/prajjwal2-3/Roadmap.ai",
      websiteLink: "https://roadmap-ai-eight.vercel.app/",
      screenshots: [
        "https://res.cloudinary.com/dzkldv06d/image/upload/v1720958229/Screenshot_2024-07-14_172613_mhwwuh.png",
        "https://res.cloudinary.com/dzkldv06d/image/upload/v1720958229/Screenshot_2024-07-14_172554_ywvomm.png",
        "https://res.cloudinary.com/dzkldv06d/image/upload/v1720958229/Screenshot_2024-07-14_172627_cne5iv.png",
      ],
    },
    {
      title: "CSI-Innowave",
      description:
        "This is our college's official technical society CSI-Innowave's website",
      tags: ["Tailwind CSS", "Material UI", "Acertinity UI", "React.js"],
      codeLink: "https://github.com/prajjwal2-3/CSI",
      websiteLink: "https://www.csiinnowave.com/",
      screenshots: [
        "https://res.cloudinary.com/dzkldv06d/image/upload/v1709726315/Screenshot_2024-03-06_172736_gdrk8w.png",
        "https://res.cloudinary.com/dzkldv06d/image/upload/v1709726315/Screenshot_2024-03-06_172817_fvcrhu.png",
        "https://res.cloudinary.com/dzkldv06d/image/upload/v1709726314/Screenshot_2024-03-06_172756_lptzrk.png",
      ],
    },
    {
      title: "Pocketlaw",
      description: "Clone of landing page of pocketlaw website.",
      tags: [
        "Tailwind CSS",
        "Material UI",
        "Acertinity UI",
        "React.js",
        "Framer-motion",
      ],
      codeLink: "https://github.com/prajjwal2-3/pocket",
      websiteLink: "https://pocket-seven-zeta.vercel.app/",
      screenshots: [
        "https://res.cloudinary.com/dzkldv06d/image/upload/v1715624513/Screenshot_2024-05-13_235036_ayd7fx.png",
        "https://res.cloudinary.com/dzkldv06d/image/upload/v1715624513/Screenshot_2024-05-13_235103_cnbwwb.png",
        "https://res.cloudinary.com/dzkldv06d/image/upload/v1715624513/Screenshot_2024-05-13_235134_jfxccj.png",
      ],
    },
    {
      title: "Trackkerrr",
      description:
        "A very simple Todo application made with ReactJs, Typescript and Zustand.",
      tags: ["Tailwind CSS", "React.js", "Typescript", "Zustand"],
      codeLink: "https://github.com/prajjwal2-3/Trackkerrr",
      websiteLink: "https://trackkerrr.vercel.app/",
      screenshots: [
        "https://res.cloudinary.com/dzkldv06d/image/upload/v1720958406/Screenshot_2024-07-14_172911_yo8yi3.png",
        "https://res.cloudinary.com/dzkldv06d/image/upload/v1720958406/Screenshot_2024-07-14_172957_goeyrn.png",
      ],
    },
    {
      title: "Not Youtube",
      description: "Not Youtube is a video streaming app",
      tags: [
        "react",
        "tailwindcss",
        "redux-toolkit",
        "typescript",
        "youtube-api",
      ],
      codeLink: "https://github.com/prajjwal2-3/Myyoutube",
      websiteLink: "https://myyoutube-gules.vercel.app/",
      screenshots: [
        "https://res.cloudinary.com/dzkldv06d/image/upload/v1709725926/Screenshot_2024-03-06_171933_wenayc.png",
        "https://res.cloudinary.com/dzkldv06d/image/upload/v1709726517/Screenshot_2024-03-06_173108_ehvc5d.png",
        "https://res.cloudinary.com/dzkldv06d/image/upload/v1709725926/Screenshot_2024-03-06_172100_w524o5.png",
        "https://res.cloudinary.com/dzkldv06d/image/upload/v1709726517/Screenshot_2024-03-06_173139_irblvn.png",
      ],
    },

    {
      title: "MovieGPT",
      description:
        "Moviegpt is a movie recommendation website that uses the power of OPENAI's GPT-3.5 model to recommend movies based on users input.",
      tags: ["react", "tailwindcss", "react-router-dom", "firebase"],
      codeLink: "https://github.com/prajjwal2-3/moviegpt.git",
      websiteLink: "https://moviegpt-5at.vercel.app/",
      // androidAppLink:
      //   "https://drive.google.com/file/d/1jlq_eQv7EnLtAJlUlP_37OnmFaApuuPT/view?usp=drivesdk",
      screenshots: [
        "https://res.cloudinary.com/dzkldv06d/image/upload/v1708886414/mnyv2ugvw5cddqieq92w.png",
        "https://res.cloudinary.com/dzkldv06d/image/upload/v1708886415/jdl7tn3hvc8tktu4njqy.png",
        "https://res.cloudinary.com/dzkldv06d/image/upload/v1708886415/ykaclfgi8has2pfz2dyo.png",
      ],
    },

    {
      title: "Edhaba",
      description: "Edhaba is a food exploration app",
      tags: ["react", "tailwindcss", "redux-toolkit", "javascript"],
      codeLink: "https://github.com/prajjwal2-3/Edhaba-prod.git",
      websiteLink: "https://edhaba-prod.vercel.app/",
      screenshots: [
        "https://res.cloudinary.com/dzkldv06d/image/upload/v1708885707/mrolic49suzjrtu60hau.png",
        "https://res.cloudinary.com/dzkldv06d/image/upload/v1708885707/atdvdfv5p4dv2gfzpwyf.png",
        "https://res.cloudinary.com/dzkldv06d/image/upload/v1708885707/b0yxyvtlitrchdmbso5x.png",
      ],
    },

    {
      title: "Meme Generator",
      description:
        "This is a meme generator that generates a random meme template and takes input text, dynamically adds it to a meme. You can download the meme as well. Have fun with it.",
      tags: ["react", "javascript"],
      codeLink: "https://github.com/prajjwal2-3/Memer.git",
      websiteLink: "https://memer-two.vercel.app/",

      screenshots: [
        "https://res.cloudinary.com/dzkldv06d/image/upload/v1708886939/Screenshot_2024-02-26_001840_vno3ye.png",
      ],
    },
  ],
};
