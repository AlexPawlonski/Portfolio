import {
  builder,
  champSelect,
  champSelectMobile,
  iconBuildLol,
  inventoryMobile,
  settingMobile,
  stateMobile,
} from "@public/img/buildlol";
import { homeBluEx, iconCodingweb } from "@public/img/bulex";
import { homeNeoServer, iconNeomanis } from "@public/img/neoserver";

import { Project } from "./interfaces";

export const projects: Project[] = [
  {
    id: 0,
    name: "Build-lol.com",
    description: [
      "Développement en indépendent du site web Build-lol.com basée sur l'api de Riot games",
      "Qui permettra à ses utilisateurs de visualiser les statistiques de leur personnage (League of Legend) en fonction de leur équipement d'un simple glisser déposer.",
    ],
    icon: iconBuildLol,
    title: "Build-lol.com",
    picture: [
      {
        title: "ChampSelect Screen",
        img: champSelect,
        isMobile: false,
        desc: "Description img",
      },
      {
        title: "ChampSelect Screen Mobile",
        img: champSelectMobile,
        isMobile: true,
        desc: "Description img",
      },
      {
        title: "Builder Screen",
        img: builder,
        isMobile: false,
        desc: "Description img",
      },
      {
        title: "Builder Screen Mobile",
        img: stateMobile,
        isMobile: true,
        desc: "Description img",
      },
      {
        title: "Inventory Mobile",
        img: inventoryMobile,
        isMobile: true,
        desc: "Description img",
      },
      {
        title: "Setting Mobile",
        img: settingMobile,
        isMobile: true,
        desc: "Description img",
      },
    ],
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
    name: "NeoServer",
    description: [
      "Développement en indépendent du site web Build-lol.com basée sur l'api de Riot games",
      "Qui permettra à ses utilisateurs de visualiser les statistiques de leur personnage (League of Legend) en fonction de leur équipement d'un simple glisser déposer.",
    ],
    icon: iconNeomanis,
    title: "Neomanis (NeoServer)",
    picture: [
      {
        title: "Home Page",
        img: homeNeoServer,
        isMobile: false,
        desc: "Description img",
      },
    ],
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
    name: "CodingWeb BluEx",
    description: [
      "Développement en indépendent du site web Build-lol.com basée sur l'api de Riot games",
      "Qui permettra à ses utilisateurs de visualiser les statistiques de leur personnage (League of Legend) en fonction de leur équipement d'un simple glisser déposer.",
    ],
    icon: iconCodingweb,
    title: "CodingWeb (BluEx)",
    picture: [
      {
        title: "Home Page",
        img: homeBluEx,
        isMobile: false,
        desc: "Description img",
      },
    ],
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
