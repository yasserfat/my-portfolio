export const links = [
  { name: "Home", hash: "#home" },
  { name: "Projects", hash: "#projects" },
  { name: "Experience", hash: "#experience" },
  { name: "Education", hash: "#education" },
  { name: "Skills", hash: "#skills" },
  { name: "About", hash: "#about" },
  { name: "Contact", hash: "#contact" },
] as const;

export const CONTACT_EMAIL = "yasserfetouhi@gmail.com";
export const CV_PATH = "/Yasser_Fetouhi_CV_General.pdf";
export const GITHUB_URL = "https://github.com/yasserfat";
export const LINKEDIN_URL = "https://www.linkedin.com/in/yasser-fetouhi-b555b5235/";

export type ProjectId =
  | "saferoad"
  | "docPipeline"
  | "agon"
  | "teraHertz"
  | "devflows"
  | "tennisEveil"
  | "thoShipping"
  | "solarEms"
  | "mazeRobot"
  | "debtIot";

export type GroupId = "vision" | "web" | "embedded";

export type ProjectMeta = {
  id: ProjectId;
  stack: string[];
  link?: string;
  linkKind?: "code" | "site";
};

export const featuredProject: ProjectMeta = {
  id: "saferoad",
  stack: ["Python", "PyTorch", "YOLOv8", "OpenCV"],
};

export const projectGroups: { id: GroupId; projects: ProjectMeta[] }[] = [
  {
    id: "vision",
    projects: [
      {
        id: "docPipeline",
        stack: ["Python", "FastAPI", "Vision LLM", "OpenCV", "LaTeX"],
        link: "https://github.com/yasserfat/scaned-exams-to-letex-and-qr-code-for-solution",
        linkKind: "code",
      },
    ],
  },
  {
    id: "web",
    projects: [
      {
        id: "agon",
        stack: ["WeWeb", "Xano", "n8n", "LLMs"],
        link: "https://github.com/yasserfat/Agon-AI-Powered-Personalized-Sports-Nutrition-Platform",
        linkKind: "code",
      },
      {
        id: "teraHertz",
        stack: ["Webflow", "Make"],
        link: "https://www.tera-hertz.fr/",
        linkKind: "site",
      },
      {
        id: "devflows",
        stack: ["Webflow", "SEO"],
        link: "https://www.devflows.eu/",
        linkKind: "site",
      },
      {
        id: "tennisEveil",
        stack: ["Webflow"],
        link: "https://tenniseveil.com/",
        linkKind: "site",
      },
      {
        id: "thoShipping",
        stack: ["Webflow"],
        link: "https://www.thoshipping.com/",
        linkKind: "site",
      },
    ],
  },
  {
    id: "embedded",
    projects: [
      {
        id: "solarEms",
        stack: ["ESP32", "C++", "Firebase", "JavaScript"],
        link: "https://github.com/yasserfat/Solar-EMS-IoT-Monitoring-System",
        linkKind: "code",
      },
      {
        id: "mazeRobot",
        stack: ["ESP32", "C++", "PID control", "IR sensors"],
        link: "https://github.com/yasserfat/Maze-solving-robot",
        linkKind: "code",
      },
      {
        id: "debtIot",
        stack: ["ESP32", "C++", "IoT"],
        link: "https://github.com/yasserfat/IOT-system-for-debt-payment",
        linkKind: "code",
      },
    ],
  },
];

export const skillGroups: { id: "ai" | "web" | "automation" | "embedded"; items: string[] }[] = [
  {
    id: "ai",
    items: ["Python", "PyTorch", "YOLOv8", "OpenCV", "scikit-learn", "pandas", "NumPy", "Matplotlib", "MATLAB", "LLM APIs"],
  },
  {
    id: "web",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML/CSS", "FastAPI", "Node.js", "Webflow", "WordPress", "WeWeb"],
  },
  {
    id: "automation",
    items: ["SQL", "PostgreSQL", "Supabase", "Firebase", "REST APIs", "n8n", "Make", "Git"],
  },
  {
    id: "embedded",
    items: ["ESP32", "C/C++", "Arduino", "IoT", "PID control"],
  },
];

export const photos = {
  hiking: ["/hiking1.png", "/hiking2.png", "/hiking4.png"],
  teaching: ["/vol1.jpeg", "/vol2.jpeg", "/vol3.jpeg"],
};
