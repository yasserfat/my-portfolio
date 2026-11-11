import type { GroupId, ProjectId } from "./data";

export type Language = "en" | "de" | "fr";

type Entry = {
  role: string;
  org: string;
  place: string;
  date: string;
  text: string;
  bullets: string[];
};

type Degree = {
  degree: string;
  school: string;
  place: string;
  date: string;
  focus: string;
};

export type Dict = {
  nav: Record<"Home" | "About" | "Projects" | "Skills" | "Education" | "Experience" | "Contact", string>;
  header: { toDark: string; toLight: string; language: string };
  hero: {
    statement: string;
    study: string;
    open: string;
    location: string;
    email: string;
    cv: string;
    portraitAlt: string;
  };
  projects: {
    heading: string;
    metricLabel: string;
    status: string;
    groups: Record<GroupId, string>;
    items: Record<ProjectId, { title: string; description: string }>;
    code: string;
    site: string;
  };
  experience: { heading: string; items: Entry[] };
  education: { heading: string; items: Degree[] };
  skills: {
    heading: string;
    groups: Record<"ai" | "web" | "automation" | "embedded", string>;
    languagesTitle: string;
    languages: { lang: string; level: string; note: string }[];
  };
  about: {
    heading: string;
    paragraphs: string[];
    hiking: string;
    teaching: string;
    hikingAlt: string;
    teachingAlt: string;
  };
  contact: {
    heading: string;
    text: string;
    emailLabel: string;
    messageLabel: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    submit: string;
    success: string;
  };
  footer: { built: string };
};

const en: Dict = {
  nav: {
    Home: "Home",
    Projects: "Projects",
    Experience: "Experience",
    Education: "Education",
    Skills: "Skills",
    About: "About",
    Contact: "Contact",
  },
  header: { toDark: "Switch to dark theme", toLight: "Switch to light theme", language: "Language" },
  hero: {
    statement: "I build computer vision models and the web apps that put them to work.",
    study:
      "Master's student in Applied Image and Signal Processing at FH Salzburg and the University of Salzburg.",
    open: "Looking for an internship in computer vision, data science or web development.",
    location: "Salzburg, Austria",
    email: "Email me",
    cv: "Download CV",
    portraitAlt: "Portrait of Yasser Fetouhi",
  },
  projects: {
    heading: "Projects",
    metricLabel: "mAP@50",
    status: "IEEE-format paper under review",
    groups: {
      vision: "Computer vision and AI",
      web: "Web and automation",
      embedded: "Embedded and IoT",
    },
    items: {
      saferoad: {
        title: "SafeRoad: driver safety detection",
        description:
          "A real-time YOLOv8 model that detects a missing seatbelt and phone use while driving. I merged and cleaned several public datasets, then benchmarked model variants on precision, recall and mAP.",
      },
      docPipeline: {
        title: "AI document pipeline",
        description:
          "Turns scanned exam PDFs into structured LaTeX. A vision LLM reads the content and OpenCV crops the figures.",
      },
      agon: {
        title: "Agon nutrition platform",
        description: "Generates and adapts personal meal plans with AI, with an AI chat and trend dashboards.",
      },
      teraHertz: {
        title: "tera-hertz.fr",
        description: "Built from scratch in Webflow, with a CMS blog and order handling automated in Make.",
      },
      devflows: {
        title: "DevFlows agency website",
        description: "New pages for the agency site, built with the SEO specialist and the design team.",
      },
      tennisEveil: { title: "Tennis Eveil", description: "Club website built in Webflow at DevFlows." },
      thoShipping: { title: "THO Shipping", description: "Shipping company website built in Webflow at DevFlows." },
      solarEms: {
        title: "Solar EMS",
        description: "Streams solar micro-grid data from an ESP32 every 2 seconds to a live dashboard.",
      },
      mazeRobot: {
        title: "Maze-solving robot",
        description: "Autonomous robot with PID line following. Placed 4th of 48 teams at Polymaze.",
      },
      debtIot: {
        title: "IoT debt payment system",
        description: "Connects hardware triggers to a debt tracking and payment workflow.",
      },
    },
    code: "Code",
    site: "Website",
  },
  experience: {
    heading: "Experience",
    items: [
      {
        role: "Front-end & automation developer",
        org: "DevFlows, AI and automation agency",
        place: "Paris, remote",
        date: "Feb 2024 – Sep 2026",
        text: "",
        bullets: [
          "Built AI automations with n8n, Make and Python/JavaScript scripts, including LLM integrations, that replaced manual client workflows.",
          "Developed web apps in React, Next.js and TypeScript and sites in Webflow and WeWeb, with Xano and Supabase (PostgreSQL) backends and REST API integrations.",
          "Built new pages of the agency website with the SEO specialist and the design team, and automated content creation.",
        ],
      },
      {
        role: "Freelance web developer",
        org: "Clients in France and Algeria",
        place: "Remote",
        date: "Dec 2022 – present",
        text: "Built tera-hertz.fr from scratch in Webflow, with a CMS blog and order handling automated in Make. WordPress work on cecileinparis.fr and papalunettes.com.",
        bullets: [],
      },
      {
        role: "Workshop manager and teacher",
        org: "Inelectronics Student Club",
        place: "Boumerdes, Algeria",
        date: "Dec 2022 – Jun 2025",
        text: "Taught IoT programming, robotics and web development to more than 200 students and mentored them through real projects.",
        bullets: [],
      },
      {
        role: "Co-founder and CTO",
        org: "LightUp, INJAZ El Djazair programme",
        place: "Boumerdes, Algeria",
        date: "Nov 2022 – Jun 2023",
        text: "Led the technical side of a venture building portable solar power solutions, and worked on its business plan and financial projections.",
        bullets: [],
      },
      {
        role: "Engineering intern",
        org: "Sonatrach and IRIS",
        place: "Algiers and Sétif, Algeria",
        date: "Jun – Aug 2022",
        text: "Two summer internships: power generation and hydrocarbon transport at Sonatrach, and TV assembly and electronics at IRIS.",
        bullets: [],
      },
    ],
  },
  education: {
    heading: "Education",
    items: [
      {
        degree: "Joint Master's in Applied Image and Signal Processing",
        school: "FH Salzburg and University of Salzburg",
        place: "Salzburg, Austria",
        date: "Sep 2026 – present",
        focus: "Computer vision, machine learning, image and signal processing, data analysis.",
      },
      {
        degree: "Master's in Computer Engineering",
        school: "IGEE (ex-INELEC)",
        place: "Boumerdes, Algeria",
        date: "Sep 2024 – Jun 2026",
        focus: "",
      },
      {
        degree: "Bachelor's in Electrical and Electronics Engineering",
        school: "IGEE (ex-INELEC)",
        place: "Boumerdes, Algeria",
        date: "Sep 2021 – Jun 2024",
        focus: "",
      },
    ],
  },
  skills: {
    heading: "Skills",
    groups: {
      ai: "AI and data",
      web: "Web",
      automation: "Data and automation",
      embedded: "Embedded",
    },
    languagesTitle: "Languages",
    languages: [
      { lang: "Arabic", level: "Native", note: "" },
      { lang: "English", level: "C1", note: "IELTS" },
      { lang: "French", level: "B2", note: "" },
      { lang: "German", level: "A2", note: "taking a course" },
    ],
  },
  about: {
    heading: "About",
    paragraphs: [
      "My favourite problems sit where images meet software: getting a model to see something reliably, then shipping it inside a tool people actually use.",
      "Before moving to Salzburg I spent two and a half years building web apps and AI automations, at the DevFlows agency and for freelance clients in France and Algeria. I studied electrical and computer engineering at IGEE in Algeria.",
      "Away from the screen I hike, and for more than two years I ran workshops at my university's electronics club, teaching IoT, robotics and web development.",
    ],
    hiking: "Hiking",
    teaching: "Teaching at the Inelectronics Student Club",
    hikingAlt: "Hiking in the mountains",
    teachingAlt: "Workshop at the Inelectronics Student Club",
  },
  contact: {
    heading: "Contact",
    text: "Email is the fastest way to reach me. You can also send a message with this form.",
    emailLabel: "Your email",
    messageLabel: "Message",
    emailPlaceholder: "name@example.com",
    messagePlaceholder: "What would you like to talk about?",
    submit: "Send message",
    success: "Message sent.",
  },
  footer: { built: "Built with Next.js, TypeScript and Tailwind CSS." },
};

const de: Dict = {
  nav: {
    Home: "Start",
    Projects: "Projekte",
    Experience: "Erfahrung",
    Education: "Ausbildung",
    Skills: "Kenntnisse",
    About: "Über mich",
    Contact: "Kontakt",
  },
  header: { toDark: "Dunkles Design", toLight: "Helles Design", language: "Sprache" },
  hero: {
    statement: "Ich entwickle Computer-Vision-Modelle und die Web-Apps, die sie nutzbar machen.",
    study:
      "Masterstudent in Applied Image and Signal Processing an der FH Salzburg und der Universität Salzburg.",
    open: "Ich suche ein Praktikum in Computer Vision, Data Science oder Webentwicklung.",
    location: "Salzburg, Österreich",
    email: "E-Mail schreiben",
    cv: "Lebenslauf herunterladen",
    portraitAlt: "Porträt von Yasser Fetouhi",
  },
  projects: {
    heading: "Projekte",
    metricLabel: "mAP@50",
    status: "Paper im IEEE-Format in Begutachtung",
    groups: {
      vision: "Computer Vision und KI",
      web: "Web und Automatisierung",
      embedded: "Embedded und IoT",
    },
    items: {
      saferoad: {
        title: "SafeRoad: Erkennung für Fahrsicherheit",
        description:
          "Ein Echtzeit-Modell auf Basis von YOLOv8, das fehlende Gurte und Handynutzung am Steuer erkennt. Ich habe mehrere öffentliche Datensätze zusammengeführt und bereinigt und Modellvarianten nach Precision, Recall und mAP verglichen.",
      },
      docPipeline: {
        title: "KI-Dokumenten-Pipeline",
        description:
          "Wandelt gescannte Prüfungs-PDFs in strukturiertes LaTeX um. Ein Vision-LLM liest den Inhalt, OpenCV schneidet die Abbildungen aus.",
      },
      agon: {
        title: "Agon Ernährungsplattform",
        description: "Erstellt und passt persönliche Ernährungspläne mit KI an, mit KI-Chat und Verlaufs-Dashboards.",
      },
      teraHertz: {
        title: "tera-hertz.fr",
        description: "Von Grund auf in Webflow gebaut, mit CMS-Blog und in Make automatisierter Bestellabwicklung.",
      },
      devflows: {
        title: "Website der Agentur DevFlows",
        description: "Neue Seiten für die Agentur-Website, gemeinsam mit SEO-Spezialist und Designteam umgesetzt.",
      },
      tennisEveil: { title: "Tennis Eveil", description: "Vereinswebsite, bei DevFlows in Webflow gebaut." },
      thoShipping: { title: "THO Shipping", description: "Website einer Reederei, bei DevFlows in Webflow gebaut." },
      solarEms: {
        title: "Solar EMS",
        description: "Überträgt Daten eines Solar-Microgrids alle 2 Sekunden von einem ESP32 an ein Live-Dashboard.",
      },
      mazeRobot: {
        title: "Labyrinth-Roboter",
        description: "Autonomer Roboter mit PID-Linienverfolgung. Platz 4 von 48 Teams bei Polymaze.",
      },
      debtIot: {
        title: "IoT-System für Schuldenzahlung",
        description: "Verbindet Hardware-Auslöser mit einem Workflow zur Verfolgung und Zahlung von Schulden.",
      },
    },
    code: "Code",
    site: "Website",
  },
  experience: {
    heading: "Erfahrung",
    items: [
      {
        role: "Front-End- und Automatisierungsentwickler",
        org: "DevFlows, Agentur für KI und Automatisierung",
        place: "Paris, remote",
        date: "Feb. 2024 – Sep. 2026",
        text: "",
        bullets: [
          "KI-Automatisierungen mit n8n, Make und Python-/JavaScript-Skripten inklusive LLM-Integrationen gebaut, die manuelle Abläufe bei Kunden ersetzt haben.",
          "Web-Apps mit React, Next.js und TypeScript sowie Websites in Webflow und WeWeb entwickelt, mit Xano- und Supabase-Backends (PostgreSQL) und REST-API-Integrationen.",
          "Neue Seiten der Agentur-Website mit SEO-Spezialist und Designteam umgesetzt und die Content-Erstellung automatisiert.",
        ],
      },
      {
        role: "Freiberuflicher Webentwickler",
        org: "Kunden in Frankreich und Algerien",
        place: "Remote",
        date: "Dez. 2022 – heute",
        text: "tera-hertz.fr von Grund auf in Webflow gebaut, mit CMS-Blog und in Make automatisierter Bestellabwicklung. WordPress-Arbeiten für cecileinparis.fr und papalunettes.com.",
        bullets: [],
      },
      {
        role: "Workshopleiter und Dozent",
        org: "Inelectronics Student Club",
        place: "Boumerdes, Algerien",
        date: "Dez. 2022 – Juni 2025",
        text: "Über 200 Studierende in IoT-Programmierung, Robotik und Webentwicklung unterrichtet und bei echten Projekten betreut.",
        bullets: [],
      },
      {
        role: "Mitgründer und CTO",
        org: "LightUp, Programm INJAZ El Djazair",
        place: "Boumerdes, Algerien",
        date: "Nov. 2022 – Juni 2023",
        text: "Technische Leitung eines Start-ups für tragbare Solarstromlösungen, Mitarbeit an Businessplan und Finanzplanung.",
        bullets: [],
      },
      {
        role: "Praktikant Ingenieurwesen",
        org: "Sonatrach und IRIS",
        place: "Algier und Sétif, Algerien",
        date: "Juni – Aug. 2022",
        text: "Zwei Sommerpraktika: Stromerzeugung und Kohlenwasserstofftransport bei Sonatrach, TV-Montage und Elektronik bei IRIS.",
        bullets: [],
      },
    ],
  },
  education: {
    heading: "Ausbildung",
    items: [
      {
        degree: "Joint Master in Applied Image and Signal Processing",
        school: "FH Salzburg und Universität Salzburg",
        place: "Salzburg, Österreich",
        date: "Sep. 2026 – heute",
        focus: "Computer Vision, Machine Learning, Bild- und Signalverarbeitung, Datenanalyse.",
      },
      {
        degree: "Master in Computertechnik",
        school: "IGEE (ex-INELEC)",
        place: "Boumerdes, Algerien",
        date: "Sep. 2024 – Juni 2026",
        focus: "",
      },
      {
        degree: "Bachelor in Elektrotechnik und Elektronik",
        school: "IGEE (ex-INELEC)",
        place: "Boumerdes, Algerien",
        date: "Sep. 2021 – Juni 2024",
        focus: "",
      },
    ],
  },
  skills: {
    heading: "Kenntnisse",
    groups: {
      ai: "KI und Daten",
      web: "Web",
      automation: "Daten und Automatisierung",
      embedded: "Embedded",
    },
    languagesTitle: "Sprachen",
    languages: [
      { lang: "Arabisch", level: "Muttersprache", note: "" },
      { lang: "Englisch", level: "C1", note: "IELTS" },
      { lang: "Französisch", level: "B2", note: "" },
      { lang: "Deutsch", level: "A2", note: "Kurs läuft" },
    ],
  },
  about: {
    heading: "Über mich",
    paragraphs: [
      "Am liebsten arbeite ich dort, wo Bilder auf Software treffen: ein Modell dazu bringen, etwas zuverlässig zu erkennen, und es dann in ein Werkzeug einbauen, das Menschen wirklich nutzen.",
      "Bevor ich nach Salzburg kam, habe ich zweieinhalb Jahre lang Web-Apps und KI-Automatisierungen gebaut, bei der Agentur DevFlows und für freiberufliche Kunden in Frankreich und Algerien. Studiert habe ich Elektro- und Computertechnik an der IGEE in Algerien.",
      "Abseits des Bildschirms gehe ich wandern, und über zwei Jahre lang habe ich im Elektronikclub meiner Universität Workshops zu IoT, Robotik und Webentwicklung geleitet.",
    ],
    hiking: "Wandern",
    teaching: "Workshops im Inelectronics Student Club",
    hikingAlt: "Wandern in den Bergen",
    teachingAlt: "Workshop im Inelectronics Student Club",
  },
  contact: {
    heading: "Kontakt",
    text: "Am schnellsten erreichen Sie mich per E-Mail. Sie können mir auch über dieses Formular schreiben.",
    emailLabel: "Ihre E-Mail",
    messageLabel: "Nachricht",
    emailPlaceholder: "name@beispiel.at",
    messagePlaceholder: "Worüber möchten Sie sprechen?",
    submit: "Nachricht senden",
    success: "Nachricht gesendet.",
  },
  footer: { built: "Gebaut mit Next.js, TypeScript und Tailwind CSS." },
};

const fr: Dict = {
  nav: {
    Home: "Accueil",
    Projects: "Projets",
    Experience: "Expérience",
    Education: "Formation",
    Skills: "Compétences",
    About: "À propos",
    Contact: "Contact",
  },
  header: { toDark: "Thème sombre", toLight: "Thème clair", language: "Langue" },
  hero: {
    statement: "Je conçois des modèles de vision par ordinateur et les applications web qui les rendent utiles.",
    study:
      "Étudiant en Master Applied Image and Signal Processing à la FH Salzburg et à l'Université de Salzbourg.",
    open: "Je cherche un stage en vision par ordinateur, data science ou développement web.",
    location: "Salzbourg, Autriche",
    email: "M'écrire",
    cv: "Télécharger le CV",
    portraitAlt: "Portrait de Yasser Fetouhi",
  },
  projects: {
    heading: "Projets",
    metricLabel: "mAP@50",
    status: "Article au format IEEE en cours d'évaluation",
    groups: {
      vision: "Vision par ordinateur et IA",
      web: "Web et automatisation",
      embedded: "Embarqué et IoT",
    },
    items: {
      saferoad: {
        title: "SafeRoad : détection pour la sécurité routière",
        description:
          "Un modèle YOLOv8 en temps réel qui détecte l'absence de ceinture et l'usage du téléphone au volant. J'ai fusionné et nettoyé plusieurs jeux de données publics, puis comparé des variantes du modèle en précision, rappel et mAP.",
      },
      docPipeline: {
        title: "Pipeline de documents IA",
        description:
          "Transforme des PDF d'examens scannés en LaTeX structuré. Un LLM de vision lit le contenu et OpenCV découpe les figures.",
      },
      agon: {
        title: "Plateforme de nutrition Agon",
        description: "Génère et adapte des plans de repas personnalisés avec l'IA, avec un chat IA et des tableaux de suivi.",
      },
      teraHertz: {
        title: "tera-hertz.fr",
        description: "Créé de zéro sur Webflow, avec un blog CMS et une gestion des commandes automatisée avec Make.",
      },
      devflows: {
        title: "Site de l'agence DevFlows",
        description: "Nouvelles pages du site de l'agence, réalisées avec le spécialiste SEO et l'équipe design.",
      },
      tennisEveil: { title: "Tennis Eveil", description: "Site d'un club, réalisé sur Webflow chez DevFlows." },
      thoShipping: { title: "THO Shipping", description: "Site d'une société de transport maritime, réalisé sur Webflow chez DevFlows." },
      solarEms: {
        title: "Solar EMS",
        description: "Envoie les données d'un micro-réseau solaire depuis un ESP32 toutes les 2 secondes vers un tableau de bord en direct.",
      },
      mazeRobot: {
        title: "Robot résolveur de labyrinthe",
        description: "Robot autonome avec suivi de ligne par PID. 4e sur 48 équipes à Polymaze.",
      },
      debtIot: {
        title: "Système IoT de paiement de dettes",
        description: "Relie des déclencheurs matériels à un processus de suivi et de paiement des dettes.",
      },
    },
    code: "Code",
    site: "Site",
  },
  experience: {
    heading: "Expérience",
    items: [
      {
        role: "Développeur front-end et automatisation",
        org: "DevFlows, agence IA et automatisation",
        place: "Paris, à distance",
        date: "févr. 2024 – sept. 2026",
        text: "",
        bullets: [
          "Création d'automatisations IA avec n8n, Make et des scripts Python/JavaScript, intégrations LLM comprises, qui ont remplacé des processus manuels chez les clients.",
          "Développement d'applications web en React, Next.js et TypeScript et de sites sur Webflow et WeWeb, avec des backends Xano et Supabase (PostgreSQL) et des intégrations d'API REST.",
          "Création de nouvelles pages du site de l'agence avec le spécialiste SEO et l'équipe design, et automatisation de la création de contenu.",
        ],
      },
      {
        role: "Développeur web freelance",
        org: "Clients en France et en Algérie",
        place: "À distance",
        date: "déc. 2022 – aujourd'hui",
        text: "Création de tera-hertz.fr de zéro sur Webflow, avec un blog CMS et une gestion des commandes automatisée avec Make. Travaux WordPress pour cecileinparis.fr et papalunettes.com.",
        bullets: [],
      },
      {
        role: "Responsable d'ateliers et formateur",
        org: "Inelectronics Student Club",
        place: "Boumerdès, Algérie",
        date: "déc. 2022 – juin 2025",
        text: "Enseignement de la programmation IoT, de la robotique et du développement web à plus de 200 étudiants, et accompagnement sur des projets concrets.",
        bullets: [],
      },
      {
        role: "Cofondateur et CTO",
        org: "LightUp, programme INJAZ El Djazair",
        place: "Boumerdès, Algérie",
        date: "nov. 2022 – juin 2023",
        text: "Direction technique d'un projet de solutions d'énergie solaire portables, et participation au business plan et aux prévisions financières.",
        bullets: [],
      },
      {
        role: "Stagiaire ingénieur",
        org: "Sonatrach et IRIS",
        place: "Alger et Sétif, Algérie",
        date: "juin – août 2022",
        text: "Deux stages d'été : production d'électricité et transport d'hydrocarbures chez Sonatrach, assemblage de téléviseurs et électronique chez IRIS.",
        bullets: [],
      },
    ],
  },
  education: {
    heading: "Formation",
    items: [
      {
        degree: "Master conjoint Applied Image and Signal Processing",
        school: "FH Salzburg et Université de Salzbourg",
        place: "Salzbourg, Autriche",
        date: "sept. 2026 – aujourd'hui",
        focus: "Vision par ordinateur, apprentissage automatique, traitement d'images et du signal, analyse de données.",
      },
      {
        degree: "Master en génie informatique",
        school: "IGEE (ex-INELEC)",
        place: "Boumerdès, Algérie",
        date: "sept. 2024 – juin 2026",
        focus: "",
      },
      {
        degree: "Licence en génie électrique et électronique",
        school: "IGEE (ex-INELEC)",
        place: "Boumerdès, Algérie",
        date: "sept. 2021 – juin 2024",
        focus: "",
      },
    ],
  },
  skills: {
    heading: "Compétences",
    groups: {
      ai: "IA et données",
      web: "Web",
      automation: "Données et automatisation",
      embedded: "Embarqué",
    },
    languagesTitle: "Langues",
    languages: [
      { lang: "Arabe", level: "Langue maternelle", note: "" },
      { lang: "Anglais", level: "C1", note: "IELTS" },
      { lang: "Français", level: "B2", note: "" },
      { lang: "Allemand", level: "A2", note: "cours en cours" },
    ],
  },
  about: {
    heading: "À propos",
    paragraphs: [
      "Les problèmes que je préfère se situent là où l'image rencontre le logiciel : apprendre à un modèle à voir quelque chose de façon fiable, puis l'intégrer dans un outil que les gens utilisent vraiment.",
      "Avant Salzbourg, j'ai passé deux ans et demi à créer des applications web et des automatisations IA, chez l'agence DevFlows et pour des clients freelance en France et en Algérie. J'ai étudié le génie électrique et informatique à l'IGEE, en Algérie.",
      "Loin de l'écran, je fais de la randonnée, et pendant plus de deux ans j'ai animé des ateliers d'IoT, de robotique et de développement web au club d'électronique de mon université.",
    ],
    hiking: "Randonnée",
    teaching: "Ateliers à l'Inelectronics Student Club",
    hikingAlt: "Randonnée en montagne",
    teachingAlt: "Atelier à l'Inelectronics Student Club",
  },
  contact: {
    heading: "Contact",
    text: "Le plus rapide est de m'écrire par e-mail. Vous pouvez aussi m'envoyer un message avec ce formulaire.",
    emailLabel: "Votre e-mail",
    messageLabel: "Message",
    emailPlaceholder: "nom@exemple.fr",
    messagePlaceholder: "De quoi aimeriez-vous parler ?",
    submit: "Envoyer le message",
    success: "Message envoyé.",
  },
  footer: { built: "Réalisé avec Next.js, TypeScript et Tailwind CSS." },
};

export const translations: Record<Language, Dict> = { en, de, fr };
