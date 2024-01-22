import { screen1, screen2, screen3 } from "@public/img/buildlol";
import { Project } from "./interfaces";

export const projects: Project[] = [
  {
    id: 0,
    name: "Build-lol.com",
    description: [
      "Développement en indépendent du site web Build-lol.com basée sur l'api de Riot games",
      "Qui permettra à ses utilisateurs de visualiser les statistiques de leur personnage (League of Legend) en fonction de leur équipement d'un simple glisser déposer.",
    ],
    picture: [screen1, screen2, screen3],
    skills: [
      "Next JS",
      "Nginx",
      "API REST",
      "Node JS",
      "React JS",
      "Tailwind CSS",
    ],
    link: {
      git: "https://github.com/AlexPawlonski/Build-lol",
      site: "https://buildlol.alexpawlonski.tech",
    },
  },
  {
    id: 1,
    name: "Neomanis",
    description: [
      "Développement en indépendent du site web Build-lol.com basée sur l'api de Riot games",
      "Qui permettra à ses utilisateurs de visualiser les statistiques de leur personnage (League of Legend) en fonction de leur équipement d'un simple glisser déposer.",
    ],
    picture: [screen2, screen3],
    skills: [
      "Next JS",
      "Nginx",
      "API REST",
      "Node JS",
      "React JS",
      "Tailwind CSS",
    ],
    link: {
      git: "https://github.com/AlexPawlonski/Build-lol",
      site: "https://buildlol.alexpawlonski.tech",
    },
  },
  {
    id: 2,
    name: "BluEx",
    description: [
      "Développement en indépendent du site web Build-lol.com basée sur l'api de Riot games",
      "Qui permettra à ses utilisateurs de visualiser les statistiques de leur personnage (League of Legend) en fonction de leur équipement d'un simple glisser déposer.",
    ],
    picture: [screen2, screen3],
    skills: [
      "Next JS",
      "Nginx",
      "API REST",
      "Node JS",
      "React JS",
      "Tailwind CSS",
    ],
    link: {
      git: "https://github.com/AlexPawlonski/Build-lol",
      site: "https://buildlol.alexpawlonski.tech",
    },
  },
];
