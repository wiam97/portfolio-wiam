// ─── Toutes les données du portfolio centralisées ici ────────────────────────
// Ce fichier est importé uniquement dans des Server Components.
// Les données ne transitent jamais côté client — elles sont rendues en HTML pur.

import type {
  PersonalInfo,
  Skill,
  Experience,
  Project,
  Education,
} from "./types";

export const personalInfo: PersonalInfo = {
  name: "Wiam Krabatou",
  title: "Tech Lead & Ingénieure Full Stack",
  subtitle:
    "React · React Native · Node.js · AWS · TypeScript\n4 ans d'expérience, spécialisée en architecture microservices, transformation digitale et intégration IA. Basée à Casablanca, disponible pour une mobilité en France.",
  availability: "Disponible pour la France · 2026",
  stats: [
    { value: "4+", label: "Années d'expérience" },
    { value: "8+", label: "Projets livrés" },
    { value: "5",  label: "Devs encadrés" },
  ],
  contact: {
    email: "wiam.krabatou97@gmail.com",
    phone: "+212 625 578 336",
    linkedinUrl: "https://linkedin.com/in/wiam-krabatou-3864b6171",
    linkedinLabel: "wiam-krabatou",
    githubUrl: "https://github.com/wiam97",
    location: "Casablanca, Maroc · Mobilité France",
    languages: "Arabe (natif) · Français (courant) · Anglais (courant)",
  },
};

export const aboutText = [
  "Ingénieure d'État diplômée de l'<strong>ENSIAS</strong>, j'ai rejoint le <strong>Groupe Auto Hall</strong> en 2022 dans le cadre de sa transformation digitale. En deux ans, j'ai évolué vers un rôle de <strong>Tech Lead</strong>, où je pilote l'architecture technique, encadre une équipe de 5 développeurs et supervise les déploiements en production.",
  "Je maîtrise l'ensemble du cycle de développement — du <strong>front-end React/React Native</strong> au <strong>back-end Node.js</strong>, en passant par les pipelines CI/CD, les APIs REST/GraphQL et le cloud (<strong>AWS, Azure</strong>). Je m'intéresse particulièrement à l'intégration de l'IA dans les produits métier (OpenAI API, LangChain, RAG).",
  "Je suis actuellement en recherche active d'un poste en <strong>France</strong> pour fin 2026, avec une forte motivation pour rejoindre une équipe ambitieuse dans un contexte de scale-up ou de grands groupes tech.",
];

export const aboutHighlights = [
  "Architecture microservices",
  "Leadership technique",
  "Intégration IA/LLM",
  "Mobilité France 2026",
];

export const skills: Skill[] = [
  {
    category: "Front-end",
    items: ["React", "React Native", "TypeScript", "Redux Toolkit", "JavaScript"],
  },
  {
    category: "Back-end",
    items: ["Node.js", "Express.js", "FastAPI", "REST", "GraphQL", "WSO2"],
  },
  {
    category: "Bases de données",
    items: ["PostgreSQL", "MongoDB", "SQL Server", "MySQL"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Azure", "Docker", "Jenkins", "Azure DevOps", "CI/CD"],
  },
  {
    category: "IA & Intégrations",
    items: ["OpenAI API", "Claude AI", "LangChain", "RAG", "Prompt Engineering"],
  },
  {
    category: "Gestion de projet",
    items: ["Agile / Scrum", "Jira", "Figma", "Git", "Code Review"],
  },
];

export const experiences: Experience[] = [
  {
    company: "Groupe Auto Hall",
    role: "Tech Lead / Développeuse Full Stack — Web & Mobile",
    period: "Juil. 2024 — Présent",
    description:
      "Référente technique sur les projets web et mobiles du groupe. Architecture microservices, développement React/React Native et Node.js, intégration d'APIs, pipelines CI/CD et pilotage d'une équipe de 5 développeurs.",
    projects: [
      {
        name: "mReporting",
        description:
          "Application mobile BI — tableaux de bord temps réel, KPIs et synthèses automatiques pour managers.",
      },
      {
        name: "MyAutoHall",
        description:
          "Espace client mobile avec chatbot IA 24/7 — réduction de la charge SAV par automatisation.",
      },
      {
        name: "Plateforme microservices",
        description:
          "Conception et déploiement de microservices métiers exposés via APIs REST/GraphQL avec gateway WSO2.",
      },
    ],
    stack: [
      "React", "React Native", "TypeScript", "Node.js",
      "OpenAI API", "WSO2", "MongoDB", "SQL Server", "Docker", "Azure DevOps",
    ],
  },
  {
    company: "Groupe Auto Hall",
    role: "Ingénieure Full Stack — Web & Mobile",
    period: "Jan. 2022 — Juin 2024",
    description:
      "Recrutée dans le cadre de la transformation digitale du groupe. Modernisation de l'écosystème applicatif, migration vers microservices et cloud, développement d'apps web et mobile pour équipes internes et clients.",
    projects: [
      {
        name: "Campaign Platform",
        description:
          "Plateforme marketing multicanal (SMS, email, WhatsApp) avec segmentation avancée et reporting temps réel.",
      },
      {
        name: "Gestion des Leads",
        description:
          "Outil de collecte et qualification des leads avec priorisation automatique des prospects à fort potentiel.",
      },
    ],
    stack: [
      "React", "React Native", "TypeScript", "Node.js",
      "Express.js", "MongoDB", "SQL Server", "Docker", "Jenkins",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Motoriq",
    description:
      "Plateforme automobile marocaine — comparateur multi-véhicules (jusqu'à 4 modèles), estimateur de prix occasion avec alerte \"bonne affaire / surévalué\", Budget Finder par usage et calculateur TCO sur 3/5 ans.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/wiam97",
  },
  {
    name: "Ce portfolio",
    description:
      "Portfolio personnel construit avec Next.js 14 (App Router, Server Components, API Routes), containerisé avec Docker multi-stage, déployé sur AWS S3 + CloudFront avec CI/CD GitHub Actions et envoi d'emails via AWS SES.",
    tech: ["Next.js", "TypeScript", "Docker", "AWS S3", "CloudFront", "SES"],
    githubUrl: "https://github.com/wiam97/portfolio-wiam",
  },
];

export const education: Education[] = [
  {
    school: "ENSIAS · Rabat",
    degree: "Ingénieure d'État en Informatique",
    detail: "Génie Logiciel & Systèmes d'Information · 2017–2021",
  },
  {
    school: "Amazon Web Services",
    degree: "AWS Solutions Architect – Associate",
    detail: "En cours de préparation",
  },
  {
    school: "OpenJS Foundation",
    degree: "Node.js Application Developer",
    detail: "Certifié",
  },
  {
    school: "Formation continue",
    degree: "AI & LLM Integration for Developers",
    detail: "OpenAI · LangChain · RAG",
  },
];
