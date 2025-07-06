import { IconBrandGithub, IconBrandLeetcode, IconBrandLinkedin, IconCode, IconTerminal } from "@tabler/icons-react";
const Info = {
    name: "Aditya",
    stack: ["Software Engineer", "Full Stack Developer", "Frontend Developer", "Backend Developer"],
    bio: `Passionate software engineer dedicated to building efficient, scalable, and impactful web applications. I thrive on solving complex problems, taking full ownership of tasks, and delivering high-quality digital experiences. Let’s connect and build something extraordinary together!`
}

const ProjectInfo = [
    {
        title: "Interview Prep Chrome Plugin",
        desc: "A Chrome extension that aggregates a curated list of career-related pages and articles from platforms like LinkedIn and GeeksforGeeks. Features Chrome Text-to-Speech (TTS) integration—when users click on any post or article, the plugin reads it aloud, enhancing accessibility and multitasking for job seekers.",
        image: "interview-prep.png",
        live: false,
        technologies: ["Chrome Extension", "JavaScript", "TTS API"],
        link: "",
        github: "" // Add if available
    },
    {
        title: "Anonymous Chat System",
        desc: "A MERN stack-based real-time chat system enabling users to interact anonymously through WebSocket. The platform also includes a marketplace feature where users can rent or sell products. Ensures secure, real-time communication and transactional capabilities within a single app.",
        image: "anonymous-chat.png",
        live: false,
        technologies: ["MERN", "WebSocket", "Node.js", "MongoDB"],
        link: "",
        github: "" // Add if available
    }
];

const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React JS", "Next JS", "Tailwind CSS", "Material UI", "Bootstrap"
        ]
    },
    {
        title: "Backend",
        skills: ["Node JS", "Express JS", "MongoDB", "MySQL", "NestJS"]
    },
    {
        title: "Languages",
        skills: ["C", "C++", "HTML", "Sql", "Python", "JavaScript", "TypeScript"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code", "Postman", "MongoDB Compass", "Vite"]
    }
]
const socialLinks = [
    { link: "https://github.com/AdityaShivhare7291/", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/aditya-shivhare-5b0314226/", icon: IconBrandLinkedin },
    { link: "https://leetcode.com/u/adityashivhare7291/", icon: IconBrandLeetcode },
    { link: "https://www.geeksforgeeks.org/user/adityashivhare7291/", icon: IconCode },
];


const ExperienceInfo = [
    {
        role: "Software Development Engineer Intern",
        company: "Digiaccel (Altera Institute)",
        date: "Jan 2025 – Present",
        desc: "Worked on full-stack development using Next.js and Nest.js. Contributed to building a shared enum npm package for type consistency across backend and frontend, and participated in the development of a learner simulation game using Server-Sent Events (SSE). Optimized build performance using Webpack Analyzer and Lighthouse.",
        skills: ["Next.js", "Nest.js", "TypeScript", "SSE", "Webpack", "Lighthouse", "NPM"]
    },
    {
        role: "Software Development Engineer Intern",
        company: "Redscope",
        date: "Mar 2024 – Aug 2024",
        desc: "Built a Chrome extension for tracking user activity and an Electron desktop app for visualizing website usage data. Added real-time data streaming capabilities in a React-based application for live updates and seamless UI interactions.",
        skills: ["React.js", "Node.js", "JavaScript", "Electron", "Chrome Extension", "WebSockets"]
    },
    {
        role: "Backend Developer Intern",
        company: "FirstRicoz",
        date: "Sep 2023 – Dec 2023",
        desc: "Worked on Ads-Impact project to analyze and measure advertising effectiveness. Built secure API flows for user consent to access ad accounts, managed token storage, and integrated data from LinkedIn and Twitter APIs for campaign analytics.",
        skills: ["MongoDB", "Express.js", "Node.js", "LinkedIn API", "Twitter API", "OAuth", "Security"]
    }
];

const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "dart",
    "java",
    "react",
    "angular",
    "flutter",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];
export { Info, ProjectInfo, socialLinks, SkillInfo, ExperienceInfo, Slugs };