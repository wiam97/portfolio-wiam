// ─── Types TypeScript pour toutes les données du portfolio ───────────────────

export interface Skill {
  category: string;
  items: string[];
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface ExpProject {
  name: string;
  description: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  projects: ExpProject[];
  stack: string[];
}

export interface Education {
  school: string;
  degree: string;
  detail: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedinUrl: string;
  linkedinLabel: string;
  githubUrl: string;
  location: string;
  languages: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  availability: string;
  stats: { value: string; label: string }[];
  contact: ContactInfo;
}
