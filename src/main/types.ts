export interface ProjectType {
  id: number;
  name: string;
  img: string;
  usedTech: string[];
  description: string;
  completed: boolean;
  backgroundColor: string;
  gitHubLink?: string;
  liveLink?: string;
}

export interface SkillType {
  name: string;
  icon: any;
  backgroundColor: string;
}

export interface SocialType {
  name: string;
  icon: any;
  link?: string;
  phoneNumber?: string;
  account?: string;
  backgroundColor: string;
}
