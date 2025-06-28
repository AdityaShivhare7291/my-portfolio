import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandYoutube , IconCode, IconTerminal} from "@tabler/icons-react";
const Info = {
    name: "Kuldeep",
    stack: ["Software Engineer", "Full Stack Developer"],
    bio: `Passionate software engineer dedicated to building efficient, scalable, and impactful web applications. I thrive on solving complex problems, taking full ownership of tasks, and delivering high-quality digital experiences. Let’s connect and build something extraordinary together!`
}



const ProjectInfo = [
    {
        title: "BookShoppe E-comm App",
        desc: "BookShoppe is a modern, fully responsive e-commerce platform built using React, Vite, TailwindCSS, Redux, and MaterialUI, offering a seamless shopping experience across different book categories. It features secure user authentication with login, registration, and logout functionalities. Users can add items to a cart or remove them, search for specific products and purchase them. The checkout process includes form validation for address and payment information, ensuring accuracy and security. After purchase, users can view their order history in the Orders section. BookShoppe combines robust functionality, intuitive design, making online Book shopping effortless and enjoyable.",
        image: "BookShoppe.png",
        live: true,
        technologies: ["MERN", "Vite", "Tailwind", "Redux"],
        link: "https://book-shoppe.vercel.app/",
        github: "https://github.com/kuldeep1441/BookShoppe.git"
    },
    {
        title: "ApnaGPT",
        desc: "ApnaGPT is an advanced MERN stack application integrated with OpenAI's API to deliver intelligent features like text summarization, chatbot interactions, JavaScript code generation, and text-to-image conversion. The platform supports secure user authentication, ensuring privacy and data protection. Users can interact with a responsive chatbot, generate sci-fi images, or receive JavaScript code suggestions. The application showcases the powerful combination of AI and web development, providing users with a dynamic and engaging experience..",
        image: "ApnaGPT.png",
        live: false,
        technologies: ["MERN", "OpenAI", "Bootstrap", "Redux"],
        link: "https://github.com/kuldeep1441/ApnaGPT.git",
        github: "https://github.com/kuldeep1441/ApnaGPT.git"
    },
    {
        title: "Portfolio",
        desc: "The Portfolio Website is a personal project developed using Typescript, React, and Tailwind, and is deployed on Vercel. It features a clean, intuitive design with sections dedicated to About, Home, and Projects, allowing easy navigation. The Contact Us section is integrated to enable visitor interaction, with MongoDB handling the efficient storage and management of visitor details. This portfolio highlights technical skills, project experiences, and provides a seamless way for potential employers and collaborators to connect.",
        image: "Portfolio.png",
        live: false,
        technologies: ["React", "Typescript", "Tailwind"],
        link: "https://portfolio-tau-brown-41.vercel.app/",
        github: "https://github.com/kuldeep1441/Portfolio.git"
    },
]


const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React JS", "Next JS", "Tailwind CSS", "Material UI", "Bootstrap"
        ]
    },
    {
        title: "Backend",
        skills: [ "Node JS", "Express JS", "MongoDB", "MySQL", "NestJS"]
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
    { link: "https://github.com/kuldeep1441", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/kuldeep-tanwar-61b748237/", icon: IconBrandLinkedin },
    { link: "https://leetcode.com/u/kuldeep_kd/", icon: IconBrandLeetcode },
    { link: "https://www.geeksforgeeks.org/user/kuldeep1441/", icon: IconCode }, 
    { link: "https://www.interviewbit.com/profile/kuldeep_kd/", icon: IconTerminal }
];


const ExperienceInfo = [
    {
        role: "Software Development Engineer",
        company: "Digiaccel Learning (Altera Institute)",
        date: "Nov 2024 - Present",
        desc: "Full-stack engineer with proven expertise in building scalable web platforms and robust automation frameworks. Demonstrated full ownership of projects like DigiCampus and program-application management systems, optimizing workflows and enhancing user experience.",
        skills: ["Javascript", "Typescript", "Next Js", "Node Js", "Nest Js", "and cross-functional collaboration to ensure high-performance delivery across B2B and B2C products"]
    },
    {
        role: "Software Developer Intern",
        company: "Vilihi Virtual Services",
        date: "January 2024 - June 2024",
        desc: "I worked on the development of Mult-Vendor E-commerce website using  MERN, Redux, and Tailwind, creating scalable microservices and interfaces. I optimized performance by integrating frontend and backend, and enhanced security with RESTful APIs. Collaborating in teams, I fostered innovation and efficiency for top-quality solutions.",
        skills: ["MongoDB", "Express", "React JS", "Node JS", "Redux", "Tailwind Css"]
    },
]
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
export { Info, ProjectInfo,socialLinks, SkillInfo, ExperienceInfo, Slugs };