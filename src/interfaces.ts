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
    git: string;
    site: string;
  };
}

export interface Picture {
  title: string;
  desc: string;
  img: StaticImageData;
  isMobile: boolean;
}
