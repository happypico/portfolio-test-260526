export interface ContactInfo {
  phone: string;
  email: string;
  website: string;
  location: string;
}

export interface SkillItem {
  id: string;
  name: string;
  stars: number;
  maxStars: number;
  description: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  bulletPoints: string[];
  techStack: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  school: string;
  major: string;
  period: string;
}

export interface LanguageItem {
  id: string;
  name: string;
  stars: number;
}
