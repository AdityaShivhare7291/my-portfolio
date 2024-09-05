import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandYoutube , IconCode, IconTerminal} from "@tabler/icons-react";
const Info = {
    name: "Kuldeep",
    stack: ["Software Engineer", "Full Stack Developer"],
    bio: "I'm a passionate software engineer specialized in crafting efficient and scalable solutions, deliver top-notch web applications, and provide freelance services that exceed client expectations. Let's connect and create something amazing together!"
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
    // {
    //     title: "Travel Tracker",
    //     desc: "Travel Tracker is a full-stack web application that allows users to track their travel experiences and share them with others. The front end is built with React, Bootstrap, while the back end uses Node.js, Express, and PostgresSQL. Users can create an account, log in, add new trips, and view their past trips on a map. The app features a clean, modern design with interactive maps and a user-friendly interface. Travel Tracker combines functionality with style, making it easy and enjoyable to record and share travel memories.",
    //     image: "Travel.png",
    //     live: false,
    //     technologies: ["React", "Node.js", "PostgresSQL", "Express", "Bootstrap"],
    //     link: "https://github.com/Code-Mars/Travel-Tracker",
    //     github: "https://github.com/Code-Mars/Travel-Tracker"
    // },
    // {
    //     title: "Instagram Clone",
    //     desc: "Instagram Clone is a full-stack web application that replicates the core features of Instagram, including user authentication, image uploading, and commenting. The front end is built with React, TailwindCSS, and Heroicons, while the back end uses Firebase for user authentication and image storage. Users can create an account, log in, upload images, and comment on posts. The app features real-time updates, so users can see new comments as they are posted. Instagram Clone provides a seamless user experience with a clean, modern design and intuitive functionality.",
    //     image: "Instagram.png",
    //     live: false,
    //     technologies: ["React", "Springboot", "Tailwind", "Heroicons", "Firebase", "MongoDB"],
    //     link: "https://github.com/Code-Mars/Instagram-Clone",
    //     github: "https://github.com/Code-Mars/Instagram-Clone"
    // },
    // {
    //     title: "CodeX Code Editor",
    //     desc: "CodeX is a modern, fully responsive code editor built using React, TailwindCSS, and Ace Editor, offering a seamless coding experience across all devices. It features syntax highlighting for popular programming languages, including HTML, CSS, JavaScript, Python, and Java. Users can create, edit, and save code files, with the option to download them as text files. CodeX combines robust functionality with a sleek, intuitive design, making coding effortless and enjoyable.",
    //     image: "CodeX.png",
    //     live: false,
    //     technologies: ["React", "Tailwind", "Ace Editor"],
    //     link: "https://github.com/Code-Mars/CodeX",
    //     github: "https://github.com/Code-Mars/CodeX"
    // }
]


const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "JavaScript", "React JS", "Next JS", "Redux", "Tailwind CSS", "TypeScript", "Material UI", "Bootstrap"
        ]
    },
    {
        title: "Backend",
        skills: [ "Node JS", "Express JS", "MongoDB", "MySQL"]
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
        role: "Software Developer Intern",
        company: "Vilihi Virtual Services",
        date: "January 2024 - Present",
        desc: "I worked on the development of Mult-Vendor E-commerce website using  MERN, Redux, and Tailwind, creating scalable microservices and interfaces. I optimized performance by integrating frontend and backend, and enhanced security with RESTful APIs. Collaborating in teams, I fostered innovation and efficiency for top-quality solutions.",
        skills: ["MongoDB", "Express", "React JS", "Node JS", "Redux", "Tailwind Css"]
    },
    // {
    //     role: "System Engineer",
    //     company: "Infosys",
    //     date: "Nov 2022 - Sep 2023",
    //     desc: " I leveraged my skills in Java, Selenium, automation testing, and MySQL to design and implement automated testing frameworks, ensuring robust software validation. I optimized database performance and reliability, and collaborated with cross-functional teams to enhance system operations and ensure seamless integration.",
    //     skills: ["Java", "MySQL", "Hibernate", "Selenium", "Jenkins", "JIRA", "Automation Testing"]
    // }
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