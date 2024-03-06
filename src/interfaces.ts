import { StaticImageData } from "next/image";

export interface Project {
  id: number;
  name: string;
  description: string[];
  icon: StaticImageData;
  title: string;
  picture: Picture[];
  skills: string[];
  link: {
    git?: string;
    site: string;
  };
}

export interface Picture {
  title: string;
  desc: string;
  img: StaticImageData;
  isMobile: boolean;
}

export interface ISkill {
  title: string;
  level: number;
  fav: boolean;
}
export interface ISkills {
  front: ISkill[];
  back: ISkill[];
  server: ISkill[];
  test: ISkill[];
  tools: ISkill[];
}
