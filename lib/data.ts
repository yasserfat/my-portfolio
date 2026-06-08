import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { GiTeacher } from "react-icons/gi";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Contact", hash: "#contact" },
] as const;

import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import sethandsons from "@/public/Screenshot 2024-03-28 140949.png";
import aesHar from "@/public/Screenshot 2024-03-28 142753.png";
import mublico from "@/public/image.png";
import rm14 from "@/public/WhatsApp Image 2024-03-28 at 2.55.16 PM.jpeg";

export const projectsData = [
  {
    title: "AL-GSS",
    description: "Responsive website for an oil and gas company using React.js and Tailwind CSS.",
    tags: ["React", "Tailwind", "Email js"],
    imageUrl: mublico,
    link: "https://al-gss.com/",
  },
  {
    title: "Seth & Sons Estate",
    description: "Estate website with client-controlled admin dashboard.",
    tags: ["React", "Firebase", "Tailwind", "React-router", "Redux-toolkit"],
    imageUrl: sethandsons,
    link: "https://sethandsons-vert.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description: "Portfolio website showcasing skills, achievements, and experience.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: aesHar,
    link: "https://yasserfet.github.io/abdessamie.com/",
  },
] as const;

export type ExperienceItem = {
  title: string;
  location: string;
  description: string;
  bullets?: string[];
  icon: React.ReactElement;
  date: string;
};

export const experiencesData: ExperienceItem[] = [
  {
    title: "Front-End Developer at DevFlows",
    location: "Remote",
    description:
      "Working at DevFlows — a low-code/AI European agency — my role involves:",
    bullets: [
      "Building full stack applications with Bubble.io",
      "Developing polished user interfaces with close attention to detail using low-code technologies (WeWeb, Webflow) and full-code frameworks (React / Next.js)",
      "Building custom WeWeb components on top of Vue.js",
      "Dealing with legacy projects and legacy code",
      "Working closely with backend developers",
      "Understanding client needs and translating them into technical solutions",
      "Optimizing performance across projects",
      "Collaborating closely with designers",
      "Building automations with scripts or tools like Make and Airtable",
      "Working with SEO specialists to optimize search engine performance",
      "Content writing",
      "Managing client support and feedback",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2024 – present",
  },
  {
    title: "Instructor & Head of Research Unit — Inelectronics Student Club",
    location: "Boumerdes, Algeria",
    description:
      "Managing and instructing a web development workshop for 45+ participants over 12 sessions, focusing on HTML, CSS, and JavaScript. Mentored participants through a month-long project phase, followed by evaluation of winners.",
    icon: React.createElement(GiTeacher),
    date: "November 2022 – present",
  },
  {
    title: "Co-Founder of LightUp",
    location: "Boumerdes, Algeria",
    description:
      "Co-founder and CTO in the INJAZ EL DJAZAIR Entrepreneurship Program. Led a venture providing sustainable portable power solutions. Gained extensive expertise in business planning, modeling, strategic marketing, and financial projections.",
    icon: React.createElement(CgWorkAlt),
    date: "November 2022 – June 2023",
  },
  {
    title: "Freelancer",
    location: "Remote",
    description:
      "Creating captivating user interfaces aligned with business needs, leveraging React and Next.js to deliver modern, performant web experiences.",
    icon: React.createElement(FaReact),
    date: "October 2022 – January 2024",
  },
  {
    title: "Student Internship at Sonatrach",
    location: "Sidi Rezine, Baraki, Algiers, Algeria",
    description:
      "Learned about company structure and activities, turbine principles and electricity generation in Algeria, hydrocarbons transportation (gas and petroleum), and reporting.",
    icon: React.createElement(LuGraduationCap),
    date: "July 2022 – August 2022",
  },
  {
    title: "Student Internship at IRIS TV Production",
    location: "Sétif, Algeria",
    description:
      "Learned about TV screens (OLED, LED, LCD), motherboard components, and assembly processes, culminating in a comprehensive understanding of TV manufacturing.",
    icon: React.createElement(LuGraduationCap),
    date: "June 2022 – July 2022",
  },
];
