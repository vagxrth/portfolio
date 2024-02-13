import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    react,
    swift,
    tailwind,
    express,
    nodejs,
    mongodb,
    cpp,
    solidity,
    rust,
    meta,
    tesla,
    shopify,
    crowdfunding,
    nike,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "CS Undergrad",
      icon: creator,
    },
    {
      title: "iOS Developer",
      icon: mobile,
    },
    {
      title: "Blockchain Developer",
      icon: backend,
    },
    {
      title: "Web Developer",
      icon: web,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "ExpressJS",
      icon: express,
    },
    {
      name: "ReactJS",
      icon: react,
    },
    {
      name: "NodeJS",
      icon: nodejs,
    },
    {
      name: "Swift",
      icon: swift,
    },
    {
      name: "Solidity",
      icon: solidity,
    },
    {
      name: "Rust",
      icon: rust,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "TailwindCSS",
      icon: tailwind,
    },
  ];
  
  const experiences = [
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Crowd Funding Web3 Application",
      description:
        "A seamless and secure platform where you can now participate in crowdfunding campaigns securely on the blockchain and even create campaigns to support causes you're passionate about.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "solidity",
          color: "pink-text-gradient",
        },
        {
          name: "thirdweb",
          color: "blue-text-gradient",
        },
      ],
      image: crowdfunding,
      source_code_link: "https://github.com/vagxrth/crowdfunding-client",
    },
    {
      name: "Nike Landing Page",
      description:
        "A clone of the landing page of the Nike's Official Website that boasts a comprehensive array of features designed to deliver a seamless and immersive user experience.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "react",
          color: "pink-text-gradient",
        },
      ],
      image: nike,
      source_code_link: "https://github.com/vagxrth/nike-landing-page",
    },
  ];
  
  export { services, technologies, experiences, projects };