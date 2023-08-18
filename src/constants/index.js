import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    harvard,
    crawford,
    schoolofit,
    wits,
    mernauth,
    chatech,
    matchinggame,
    reacttodo,
    catchtheball,
    threejs,
    connectfourpy,
    calculator,
    pongpy,
    modernwebsite,
    tictactoe,
    gitpage,
    merndash,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Fullstack Developer",
      icon: backend,
    },
    {
      title: "Python Learner",
      icon: creator,
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Crawford College Graduate",
      company_name: "Passed with Bachelor Pass",
      icon: crawford,
      iconBg: "#383E56",
      date: "December 2016",
      points: [
        "Subjects: English Home Language, Mathematics, Life Orientation, Design, History, Life Sciences, Physical Sciences and Advanced Mathematics",
        "Certificates: Honors Blazer (Full colours in three disciplines: Academics, Basketball & Service) + Sports Women of the year.",
      ],
    },
    {
      title: "Bachelor of Health Sciences Health Systems Sciences (Full-Time - BHSc)",
      company_name: "University of Witwatersrand, Johannesburg",
      icon: wits,
      iconBg: "#FFFFFF",
      date: "December 2021",
      points: [
        "Relevant Coursework: Public Health II & III, Health Systems Sciences II & III, Applied Anatomy and Physiology II, Molecular Medicine, Fundamentals of Health & Disease",
        "Certificates: Dean's Merit List Bachelor of Health Sciences Year 2 & 3 (2020 & 2021), First Aid Course",
      ],
    },
    {
      title: "CS50: Introduction to Computer Science",
      company_name: "Harvard University Online Course",
      icon: harvard,
      iconBg: "#ffffff",
      date: "Feb 2023 - June 2023",
      points: [
        "Relevant Coursework: Abstraction, Algorithms, Data Structures, Encapsulation, Resource Management, Security, Software Engineering and Web development",
        "Languages: C, Python, SQL and Javascript, CSS and HTML",
        "Engaged in an online course, I embarked on a comprehensive exploration of foundational computer knowledge that served as the underlying ground for my understanding of technology.",
        "By seamlessly integrating theory with hands-on application, the course allowed me to actively apply my newly acquired knowledge, solidifying my understanding and honing my practical skills.",
      ],
    },
    {
      title: "Full Stack Developer Course BootCamp",
      company_name: "School of IT",
      icon: schoolofit,
      iconBg: "#E6DEDD",
      date: "March 2023 - July 2023",
      points: [
        "Relevant Coursework: Front and Back End development. Python programming & MERN stack. (MongoDB, Express, React and Nodejs)",
        "Languages: Python, Javascript, CSS and HTML.",
        "Successfully completed an immersive bootcamp experience where I acquired fundamental skills and immediately put them into action by crafting real-world projects.",
        "This unique learning journey not only equipped me with a comprehensive understanding of the core principles but also empowered me to bring my ideas to life through tangible projects that showcase my newfound expertise.",
      ],
    },
  ];
  
  const testimonials = [
    {
      gamename:
        "Connect Four",
      name: "Python Language",
      source_code_link: "https://github.com/chaeuny/personal_projects/blob/4ebf92d2b1a466f19526f311f0e8f38810d422b1/connect_four.py",
      image: connectfourpy,
    },
    {
      gamename:
        "Calculator",
      name: "JS, HTML, CSS",
      source_code_link: "https://github.com/chaeuny/Learning-Projects/tree/70e31a13cea5747c8dcd40d2ba9fa9ccd04fdd43/Calculator",
      image: calculator,
    },
    {
      gamename:
        "Pong",
      name: "Python",
      source_code_link: "https://github.com/chaeuny/personal_projects/blob/4ebf92d2b1a466f19526f311f0e8f38810d422b1/pong.py",
      image: pongpy,
    },
    {
      gamename:
        "Modern Website Page",
      name: "HTML, JS, CSS",
      source_code_link: "https://github.com/chaeuny/Learning-Projects/tree/70e31a13cea5747c8dcd40d2ba9fa9ccd04fdd43/Modern%20Websitem",
      image: modernwebsite,
    },
    {
      gamename:
        "TicTacToe",
      name: "CSS, JS, HTML",
      source_code_link: "https://github.com/chaeuny/Learning-Projects/tree/70e31a13cea5747c8dcd40d2ba9fa9ccd04fdd43/Noughts%20%26%20Crosses",
      image: tictactoe,
    },
    {
      gamename:
        "So much more...",
      name: "Me!", 
      source_code_link: "https://github.com/chaeuny",
      image: gitpage,
    },
  ];
  
  const projects = [
    {
      name: "Catch the Ball Game",
      description:
        "A blend of html, js and css, a dynamic game where players are challenged to click on a swiftly movng ball within a designated timeframe. players can tune the level of difficulty.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "js",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: catchtheball,
      source_code_link: "https://github.com/chaeuny/Learning-Projects/tree/70e31a13cea5747c8dcd40d2ba9fa9ccd04fdd43/Catch%20the%20Ball",
    },
    {
      name: "Matching Cards Game",
      description:
        "An engaging and visually captivating matching game using frameworks of html, js and css. Identify and match pairs of identical cards using memory.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "js",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: matchinggame,
      source_code_link: "https://github.com/chaeuny/Learning-Projects/tree/70e31a13cea5747c8dcd40d2ba9fa9ccd04fdd43/Matching%20Game",
    },
    {
      name: "MERN AUTH Page",
      description:
        "A MERN stack app with a React Single-Page Application frontend. Focusing mainly on the authentication process which includes a full-featured API, state management with Redux Toolkit and MongoDB Database Setup.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "reduxtoolkit",
          color: "pink-text-gradient",
        },
      ],
      image: mernauth,
      source_code_link: "https://github.com/chaeuny/MERN-Auth.git",
    },
    {
      name: "React TODO Webpage",
      description:
        "A dynamic and versatile webpage using React featuring a user-friendly todo list application. This platform allows users to efficiently manage their tasks by seamlessly adding, deleting and crossing out items on their to-do list. The webpage also offers customizable experineces, allowing users to efforlessly switch between dark and light modes, as well as tailor the color theme to match their personal preferneces.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "crudfunctionality",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: reacttodo,
      source_code_link: "https://github.com/chaeuny/React-Projects/tree/5d9ad6fe00d807b462f309c60e792ed9d83a02cf/react-todo",
    },
    {
      name: "ChaTech Shop",
      description:
        "Web ReactJS application that facilitates seamless online shopping expereinces. With the use of React toolkits and insights on ReactJS, MySQL, NodeJS and API integration, the platform allows users to effortlessly browse and select items, add or remove from thier carts and process to checkout.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
      image: chatech,
      source_code_link: "https://github.com/chaeuny/React-Ecom-Website.git",
    },
    {
      name: "Full-stack MERN dashboard",
      description:
        "A fully functional full-stack MERN dashboard applicaiton with complete CRUD funcitonalities, authentication, pagination, sorting and filtering.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "typescript",
          color: "pink-text-gradient",
        },
      ],
      image: merndash,
      source_code_link: "https://github.com/chaeuny/MERN-App.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
