import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { GiTeacher } from "react-icons/gi";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import sethandsons from "@/public/Screenshot 2024-03-28 140949.png";
import aesHar from "@/public/Screenshot 2024-03-28 142753.png";
import mublico from "@/public/Screenshot 2024-03-28 143844.png";
import rm14 from "@/public/WhatsApp Image 2024-03-28 at 2.55.16 PM.jpeg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Student Internship at iris tv production",
    location: "setif, Algiers, Algeria",
    description:
      "At IRIS Company's TV production internship, I learned about TV screens (OLED, LED, LCD), motherboard components, and assembly processes, culminating in a comprehensive grasp of TV manufacturing.",
    icon: React.createElement(LuGraduationCap),
    date: " june 2022 to July 2022",
  },
  {
    title: "Student Internship at sonatrach",
    location: " sidi rezine, baraki, Algiers, Algeria",
    description:
      "During the internship, i learned about the company's structure and activities, delving into turbine principles and electricity generation in Algeria, hydrocarbons transportation (gaz and petroleum), and reporting.",
    icon: React.createElement(LuGraduationCap),
    date: " July 2022 to August 2022",
  },
  {
    title: "Freelancer",
    location: "remote",
    description:
      "Creating a captivating user interface that aligns seamlessly with the unique needs of the business by leveraging various technologies, including React and Next.js.",
    icon: React.createElement(FaReact),
    date: "October 2022 to  January 2024",
  },
  {
    title: "Co-founder of lightup",
    location: "Boumerdes, Algeria",
    description:
      " As LightUp's Co-founder and CTO in the INJAZ EL DJAZAIR Entrepreneurship Program, I led a successful venture providing sustainable portable power solution.This experience equipped me with extensive expertise in business planning, encompassing robust business modeling, strategic marketing formulation, and precise financial projections.",
    icon: React.createElement(CgWorkAlt),
    date: " November 2022 to June 2023",
  },
  {
    title:
      "Instructor X head of the research unit  at  Inelectronics Student Club",
    location: "Boumerdes, Algeria",
    description:
      "Managing and Instructoring a web development workshop for 45+ participants over 12 sessions, focusing on HTML, CSS, and JavaScript. Mentored participants through a month-long project phase, followed by the evaluation of winners.",
    icon: React.createElement(GiTeacher),
    date: "November  2022 - present",
  },

  {
    title: "Front-End Developer  at devflows",
    location: "remote",
    description:
      " specialize in utilizing low-code and no-code technologies such as Bubble, Weweb, and Webflow. Within my team, my role involved transforming Figma designs into fully functional websites.",
    icon: React.createElement(CgWorkAlt),
    date: "Fib 2024 - present ",
  },
] as const;

export const projectsData = [
  {
    title: "meubliko",
    description:
      "Developed a furniture  website with client-controlled admin dashboard and cart managment system.",
    tags: ["React", "Firebase", "Tailwind", "React-router", "Redux-toolkit"],
    imageUrl: mublico,
    link: "https://meubliko.vercel.app/",
  },

  {
    title: "Seth & Sons Estate",
    description:
      "Developed an estate website with client-controlled admin dashboard for seamless management of product uploads, deletions, edits, and sales ads.",
    tags: ["React", "Firebase", "Tailwind", "React-router", "Redux-toolkit"],
    imageUrl: sethandsons,
    link: "https://sethandsons-vert.vercel.app/",
  },
  {
    title: "portfolio website",
    description:
      "The portfolio website created showcases detailed information about an individual, presenting their skills, achievements, and experience in a user-friendly and visually appealing manner.",
    tags: ["HMLT", "CSS", "JavaScript"],
    imageUrl: aesHar,
    link: "https://yasserfet.github.io/abdessamie.com/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "GitHub",
  "Tailwind",
  "Redux-toolkit",
  "React-router",
  "react native",
  "Framer Motion",
] as const;
