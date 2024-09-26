// Contains constant data for using in website
// ! Don't remove anything from here if not sure

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
    figma,
    docker,
    linkedin,
    twitter,
    github,
    threejs,
    project1,
    bme,
    kpmg,
    stevens,
    trigent,
    project2,
    project3
  } from "../assets";
  
  // Navbar Links
  export const NAV_LINKS = [
    {
      id: "about",
      title: "About",
      link: null,
    },
    {
      id: "work",
      title: "Work",
      link: null,
    },
    {
      id: "contact",
      title: "Contact",
      link: null,
    },
    {
      id: "source-code",
      title: "Source Code",
      link: "http://www.github.com/atharvaa9/",
    },
  ] as const;
  
  // Services
  export const SERVICES = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Security Enthusiast",
      icon: creator,
    },
  ] as const;
  
  // Technologies
  export const TECHNOLOGIES = [
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
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ] as const;
  
  // Experiences
  export const EXPERIENCES = [
    {
      title: "Web Developer / Full Stack Developer",
      company_name: "Bright Mind Enrichment, USA",
      icon: bme,//change here
      iconBg: "#383E56",
      date: "Jul 2024 - Current",
      points: [
        "Led the design and development of the Bright Mind Wellness Portal's front-end using React.js and Bootstrap, enhancing user engagement through an intuitive and responsive interface.",
        "Architected and implemented robust backend solutions in Node.js with Express.js, ensuring seamless data handling and improved server response times for thousands of monthly users.",
        "Engineered a secure authentication system using JWT, which safeguarded user data and privacy across the platform, reinforcing trust and compliance with data protection regulations.",
        "Managed database operations by integrating MongoDB, which involved schema design and query optimization, resulting in efficient data storage and retrieval processes that supported real-time data updates.",
        "Coordinated the deployment and scaling of the application using Docker and AWS EC2, achieving consistent performance and reliability across multiple production environments."
      ],
    },
    {
      title: "Graduate Assistant (Web Developer)",
      company_name: "Stevens Institute of Technology, USA",
      icon: stevens,
      iconBg: "#E6DEDD",
      date: "May 2023 – May 2024",
      points: [
        "Led a team of developers in employing agile methodologies to design and implement an interactive educational platform, enhancing collaboration and learning experiences for users across devices.",
        "Produced real-time communication features using WebSocket and Node.js, enabling instant messaging and video conferencing capabilities that supported seamless online interactions among thousands of users.",
        "Architected and designed a robust content management system with React and MongoDB, which facilitated efficient content creation, management, and distribution, significantly improving content accessibility and user engagement.",
        "Orchestrated the integration of third-party APIs and tools, ensuring optimal system performance and expanding functionality to meet diverse educational needs and preferences."
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "KPMG, India",
      icon: kpmg,
      iconBg: "#383E56",
      date: "Jan 2021 – Jul 2022",
      points: [
        "Designed an interactive financial analytics dashboard using React.js and Redux, enhancing data visualization and empowering clients with real-time decision-making tools across financial metrics, reducing manual report creation by 30 hours per week.",
        "Developed highly reusable UI components with TypeScript and Tailwind CSS, improving code maintainability and consistency, which accelerated feature delivery by ensuring faster development cycles.",
        "Architected and implemented a robust backend API using Node.js and Express.js to manage complex financial data, facilitating the ingestion of large datasets and ensuring secure data transmission between multiple financial systems.",
        "Optimized database performance by leveraging PostgreSQL for storing transactional data and Redis for caching, which reduced query response times for real-time data processing, enhancing user experience with near-instant updates.",
        "Collaborated with cross-functional teams, including data scientists and financial analysts, to integrate machine learning models via Python, providing predictive financial insights that supported strategic client decisions."
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Trigent Software, India",
      icon: trigent,
      iconBg: "#E6DEDD",
      date: "Jun 2020 – Dec 2020",
      points: [
        "Architected a microservices-based back-end system using Spring Boot and Node.js, reducing server response times by over 150 milliseconds.",
        "Engineered a dynamic and responsive front-end with React.js and Material-UI, enhancing the mobile and desktop user experience, leading to an increase in session time.",
        "Spearheaded third-party payment integration with Stripe, implementing secure payment workflows, which processed over 1,000 daily transactions without downtime.",
        "Configured cloud infrastructure using AWS EC2, S3, and RDS, improving system scalability and availability, enabling the platform to handle thousands of concurrent users.",
      ],
    },
  ] as const;
  
  // Testimonials
  export const TESTIMONIALS = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "",
      designation: "CFO",
      company: "",
      image: null,
    }
    
  ] as const;
  
  // Projects
  export const PROJECTS = [
    {
      name: "Transactly: Secure & Fast Payments",
      description:
        "Developed a full-stack digital wallet application using Next JS, Express JS, and PostgreSQL, enabling seamless money transfers and transactions for over 1,000+ simulated users.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "next",
          color: "green-text-gradient",
        },
        {
            name: "tailwindcss",
            color: "pink-text-gradient",
        },
      ],
      image: project1,
      source_code_link: "https://github.com/atharvaa9/transactly",
      // live_site_link: "",
    },{
    name: "CineLog: A Movie Logging System",
      description:
       "CineLog is an intuitive web application designed for movie enthusiasts to log, track, and review their movie-watching experiences. Built with a focus on user engagement and seamless interaction, this platform enhances the way users explore and manage their movie collections.",
      tags: [
        {
          name: "nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "Express",
          color: "green-text-gradient",
        },
        {
            name: "MongoDB",
            color: "pink-text-gradient",
        },
      ],
      image: project2,
      source_code_link: "https://github.com/atharvaa9/cineLog",
      // live_site_link: "",
    },{
      name: "Attack Analysis using Honeypot",
        description:
         "Led a comprehensive cybersecurity initiative involving the execution of over 15 honeypot-based attacks, coupled with the analysis of Endpoint Detection and Response (EDR) technologies. This hands-on experience enabled the detection and thorough examination of malicious activities, showcasing my expertise in proactive threat identification.",
        tags: [
          {
            name: "MalwareAnalysis",
            color: "blue-text-gradient",
          },
          {
            name: "Snort",
            color: "green-text-gradient",
          },
          {
              name: "Honeypot",
              color: "pink-text-gradient",
          },
        ],
        image: project3,
        source_code_link: "https://www.youtube.com/watch?v=w3fz6XFE8iU"
      }
  ] as const;
  
  export const SOCIALS = [

    {
      name: "Linkedin",
      icon: linkedin,
      link: "https://www.linkedin.com/in/atharvaparte",
    },
    {
      name: "Twitter",
      icon: twitter,
      link: "https://twitter.com/atharvaparte007",
    },
    {
      name: "GitHub",
      icon: github,
      link: "https://github.com/atharvaa9",
    },
  ] as const;
  