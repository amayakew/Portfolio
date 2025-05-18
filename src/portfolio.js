import emoji from "react-easy-emoji";

const illustration = {
  animated: true
};

const greeting = {
  username: "Anastasiya Maistsiapanava",
  title: "Hi, I'm Nastya",
  subTitle: emoji(
    "Full Stack Developer experienced in JavaScript and React.js, with additional skills in TypeScript, Redux, Express.js, and PostgreSQL. Passionate about front-end development and building clean, responsive user interfaces. Recently graduated from an Amazon-Certified Fullstack Bootcamp and am continuously learning through online courses."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1BKJ8i_X89YDAYqKs-8FeMe0Oy__rJeP4hupumqYTf7k/edit?usp=sharing",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/amayakew",
  linkedin: "https://www.linkedin.com/in/anastasiya-maistsiapanava-75778b363",
  gmail: "amaya.kew@gmail.com",
  display: true // Set true to display this section, defaults to false
};

const skillsSection = {
  title: "Skills",
  skills: [
    {
      title: emoji('⚡ Frontend:'),
      contnet: emoji(
        "React.js, Redux, JavaScript, TypeScript, HTML5, CSS3, REST APIs, Responsive Design"
      ),
    },
    {
      title: emoji('⚡ Backend:'),
      contnet: emoji("Node.js, Express.js, PostgreSQL, Python"),
    },
    {
      title: emoji('⚡ Tools & Platforms:'),
      contnet: emoji(
        "Git, GitHub, VS Code, Postman, npm, ViteIntegration of third party services such as Firebase/ AWS / Digital Ocean"
      )
    },
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Developers Institute",
      logo: require("./assets/images/di-logo.jpg"),
      subHeader: "Developers Institute, TLV Coding Bootcamp",
      duration: "2025",
      desc: "Full Stack Web Development, Python and JavaScript program",
      descBullets: [
        "Completed an intensive fullstack coding bootcamp with a strong focus on React.js, JavaScript, TypeScript, and backend  technologies including Express.js, Python and PostgreSQL. Built several fullstack projects."
      ]
    },
    {
      schoolName: "Belarusian State University",
      logo: require("./assets/images/bgu-logo.png"),
      subHeader: "Faculty of International Relations, Minsk",
      duration: "2013 - 2017",
      desc: "BA in International Relations",
      descBullets: ["Completed a comprehensive degree focused on global affairs, communication, and critical thinking."]
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "React JS",
      progressPercentage: "80%"
    },
    {
      Stack: "Typescript",
      progressPercentage: "70%"
    },
    {
      Stack: "Node JS (Express)",
      progressPercentage: "60%"
    },
    {
      Stack: "Postgresql",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false
};


const bigProjects = {
  title: "Projects",
  subtitle: "Some personal projects I have created",
  projects: [
    {
      image: require("./assets/images/dinoLogo.png"),
      projectName: "DinoShare",
      projectDesc: "A desktop Splitwise clone built using Express.js, React, PostgreSQL, Material UI and TypeScript.",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://dinoshare.onrender.com/"
        },
        {
          name: "Github",
          url: "https://github.com/amayakew/DinoShare"
        }
      ]
    },
    {
      image: require("./assets/images/f1Logo.png"),
      projectName: "Formula 1 Race Calendar",
      projectDesc: "A desktop app which displays a countdown to the next F1 race, allows users to subscribe and receive email notifications, and shows the full season's race calendar.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/amayakew/hackathon2"
        }
      ]
    },
  ],
  display: true 
};


const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Don't hesitate to contact me via email, LinkedIn, or the contact form below:",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  bigProjects,
  contactInfo,
};
