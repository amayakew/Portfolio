import emoji from "react-easy-emoji";
// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
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

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/amayakew",
  linkedin: "https://www.linkedin.com/in/anastasiya-maistsiapanava-75778b363",
  gmail: "amaya.kew@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

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

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
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

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
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
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

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
  display: true // Set false to hide this section, defaults to true
};


// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Don't hesitate to contact me via email, LinkedIn, or the contact form below:",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  openSource,
  bigProjects,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
