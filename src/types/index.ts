export interface Project {
  id: number;
  year: number;
  title: string;
  description: string;
  category: string[];
  technologies: string[];
  image: string;
  url: string,
}

export interface Skill {
  name: string;
  progress: number;
  category: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}