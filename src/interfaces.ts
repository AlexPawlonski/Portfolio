import { StaticImageData } from "next/image";

export interface Project {
  id: number;
  name: string;
  description: string[];
  picture: StaticImageData[];
  skills: string[];
  link: {
    git: string;
    site: string;
  };
}
