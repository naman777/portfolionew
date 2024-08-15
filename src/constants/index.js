import project1 from "../assets/projects/image.png";
import project2 from "../assets/projects/image2.png";
import project3 from "../assets/projects/image3.png";
import project5 from "../assets/projects/image5.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 1 year of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My background in competitive programming has sharpened my problem-solving skills and ability to tackle complex algorithmic challenges. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 1 year of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];
export const PROJECTS = [
  {
    title: "Vibely",
    image: project5,
    description:
      "A fully functional Video Conferencing platform that supports real-time video and audio communication functionality.",
    technologies: [ "React", "Node.js", "TypeScript", "WebRTC", "Socket.io"],
    link: "https://vibely.namankundra.in",
  },
  {
    title: "CodePlex",
    image: project1,
    description:
      "A fully functional remote code execution platform that supports multiple programming languages and provides real-time code execution and output display.",
    technologies: [ "React", "Node.js", "PostgreSQL", "TypeScript", "MongoDB"],
    link: "https://codeplex.namankundra.in",
  },
  {
    title: "Toggle Docs",
    image: project2,
    description:
      "An real-time document collaboration platform that allows multiple users to edit a document simultaneously and see changes in real-time.",
    technologies: ["React.js", "Node.js", "WebSockets", "TypeScript"],
    link: "https://toggledocs.namankundra.in",
  },
  {
    title: "PenSpace",
    image: project3,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["React.js", "Hono.js", "Node.js", "PostgreSQL", "Cloudflare Workers"],
    link: "https://penspace.namankundra.in",
  },
];


export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
