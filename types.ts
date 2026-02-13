export interface NavItem {
  id: string;
  label: string;
  icon: string;
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}