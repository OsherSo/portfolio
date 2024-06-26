import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML & CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Crafting semantic HTML and stylish, responsive CSS for user-friendly web interfaces.",
  },
  {
    id: nanoid(),
    title: "JavaScript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Building dynamic web applications with modern JavaScript (ES6+) for engaging user experiences.",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Developing scalable single-page applications with React and efficient state management.",
  },
  {
    id: nanoid(),
    title: "Node.js",
    icon: <FaNodeJs className="h-16 w-16 text-emerald-500" />,
    text: "Creating high-performance server-side applications and APIs using Node.js and its non-blocking I/O model.",
  },
  {
    id: nanoid(),
    title: "Express.js",
    icon: <FaNodeJs className="h-16 w-16 text-emerald-500" />,
    text: "Building robust web applications and RESTful APIs with Express.js.",
  },
  {
    id: nanoid(),
    title: "MongoDB",
    icon: <FaDatabase className="h-16 w-16 text-emerald-500" />,
    text: "Utilizing MongoDB for flexible and efficient data storage in web applications.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://www.ec2i.biz/hubfs/Job%20Tracking.png",
    url: "https://job-tracker-966u.onrender.com",
    github: "https://github.com/OsherSo/job-tracker",
    title: "Job Tracker",
    text: "Welcome to our job tracking app, where you can organize your job hunt like a pro. Discover and apply for opportunities seamlessly while staying on top of your applications. Gain insights and manage your career path effectively with our intuitive tools and resources.",
  },
];
