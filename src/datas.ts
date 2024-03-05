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
import {
  blogdetail,
  bookedite,
  chat,
  homedrag,
  iconNeomanis,
  recapbook,
  settingrole,
  statescreen,
  ticketdetail,
} from "@public/img/neoserver";

import { Project, ISkills } from "./interfaces";
import {
  chatNeohelper,
  homeNeohelper,
  settingNeohelper,
} from "@public/img/neohelper";

export const projects: Project[] = [
  {
    id: 0,
    name: "Build-lol.com",
    description: [
      "Développement en indépendent du site web Build-lol.com basée sur l'api de Riot games",
      "Qui permettra à ses utilisateurs de visualiser les statistiques de leur personnage (League of Legend) en fonction de leur équipement d'un simple glisser déposer.",
      "",
      "Le site se présente comme une web app qui reprend la DA de League of Legend, en l'adaptant pour un format mobile ou PC.",
      "Les informations présentes sur la plateforme sont directement tirées de l'API de Rio de games, ce qui fait que toutes les informations sont instantanément mise à jour si jamais une update est déployée sur le jeu original.",
      "C'est d'ailleurs un des défis principaux car l'interface doit s'adapter à tous les changements d'information qui pourraient advenir dans le futur.",
      "En plus des fonctionnalités principales de sélection et de construction de l'équipement de son personnage,  le site est entièrement dynamique en termes de langage utilisateur mais aussi de version de League of Legend.",
      "Grâce au sélecteur présent dans le header ou le menu, vous avez la possibilité de changer la langue et de sélectionner la version du jeu parmi les 14 dernières saisons. ",
    ],
    icon: iconBuildLol,
    title: "Build-lol.com",
    picture: [
      {
        title: "ChampSelect Screen",
        img: champSelect,
        isMobile: false,
        desc: "Écran qui permet de sélectionner son champion. Et qui possède de multiples fonctionnalités comme la recherche avancée ou le filtrage par rôles.",
      },
      {
        title: "Builder Screen",
        img: builder,
        isMobile: false,
        desc: "L'écran principal de l'application qui permet de glisser déposer les équipements du champion pour pouvoir visualiser ses stats",
      },
      {
        title: "ChampSelect Screen Mobile",
        img: champSelectMobile,
        isMobile: true,
        desc: "Écran qui permet de sélectionner son champion. Et qui possède de multiples fonctionnalités comme la recherche avancée ou le filtrage par rôles. (Mobile)",
      },
      {
        title: "Builder Screen Mobile",
        img: stateMobile,
        isMobile: true,
        desc: "L'écran principal de l'application qui permet de glisser déposer les équipements du champion pour pouvoir visualiser ses stats (mobile)",
      },
      {
        title: "Inventory Mobile",
        img: inventoryMobile,
        isMobile: true,
        desc: "Visuel particulier de l'inventaire en version mobile qui possède un système propre de dragon drop adapté au support.",
      },
      {
        title: "Setting Mobile",
        img: settingMobile,
        isMobile: true,
        desc: "Les settings en version mobile on leur propre menu dédié toujours dans un souci d'adaptation au support",
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
    name: "NeoServeur",
    description: [
      "NeoServeur c’est  le côté dédié au technicien de l'écosystème Neomanis.",
      " ",
      "Il est composé d'une multitude d'écran permettant à ces derniers de faire: ",
      "Me la gestion de ticket grâce à un système d'inventaire et de backlog entièrement dynamique.",
      "D'un système de chat instantané entre tous les utilisateurs.",
      "D'un écran pour visualiser les différents diagnostics effectués sur les PC des clients.",
      "D'un éditeur de script pour pouvoir personnaliser ou créer des livres qui résoudront des problèmes automatiquement chez les clients.",
      "Ou encore d'une partie blog qui permet au technicien de poser des questions facilitant le partage d'information.",
      "Mon rôle sur Neo serveur a été majoritairement de participer à l'intégration de L’ux / ui désigné par un tiers, au sein de l'équipe neomanis.",
      "Si je devais citer un défi technique qui m'a marqué,  je dirais que c'est la création du système d'inventaire en drag and drop qui se génère automatiquement en fonction du nombre d'hexagone souhaité.",
      "Note:  NeoServeur est une plateforme destinée à des clients du coup il n'existe pas de version publique accessible.",
    ],
    icon: iconNeomanis,
    title: "Neomanis (NeoServeur)",
    picture: [
      {
        title: "Home Page",
        img: homedrag,
        isMobile: false,
        desc: "Home page de Neo Server dans lequel on peut voir l'inventaire mais aussi la gestion des événements en bas ou encore les notifications à l'utilisateur à droite",
      },
      {
        title: "Ticket detail",
        img: ticketdetail,
        isMobile: false,
        desc: "Home page de Neo Server dans lequel on peut voir l'inventaire mais aussi la gestion des événements en bas ou encore les notifications à l'utilisateur à droite",
      },
      {
        title: "chat",
        img: chat,
        isMobile: false,
        desc: "Home page de Neo Server dans lequel on peut voir l'inventaire mais aussi la gestion des événements en bas ou encore les notifications à l'utilisateur à droite",
      },
      {
        title: "bookedite",
        img: bookedite,
        isMobile: false,
        desc: "Home page de Neo Server dans lequel on peut voir l'inventaire mais aussi la gestion des événements en bas ou encore les notifications à l'utilisateur à droite",
      },
      {
        title: "recapbook",
        img: recapbook,
        isMobile: false,
        desc: "Home page de Neo Server dans lequel on peut voir l'inventaire mais aussi la gestion des événements en bas ou encore les notifications à l'utilisateur à droite",
      },
      {
        title: "blogdetail",
        img: blogdetail,
        isMobile: false,
        desc: "Home page de Neo Server dans lequel on peut voir l'inventaire mais aussi la gestion des événements en bas ou encore les notifications à l'utilisateur à droite",
      },
      {
        title: "statescreen",
        img: statescreen,
        isMobile: false,
        desc: "Home page de Neo Server dans lequel on peut voir l'inventaire mais aussi la gestion des événements en bas ou encore les notifications à l'utilisateur à droite",
      },

      {
        title: "settingrole",
        img: settingrole,
        isMobile: false,
        desc: "Home page de Neo Server dans lequel on peut voir l'inventaire mais aussi la gestion des événements en bas ou encore les notifications à l'utilisateur à droite",
      },
    ],
    skills: [
      "React JS",
      "API REST",
      "Node JS",
      "Tailwind CSS",
      "TypeScript",
      "Express JS",
      "Mongo DB",
    ],
    link: {
      site: "https://www.linkedin.com/company/neomanis/",
    },
  },
  {
    id: 2,
    name: "NeoHelper",
    description: [
      "NeoHelper et l'application côté client de l'écosystème Neomanis,  il s'agit d'un agent de diagnostic permettant de réaliser des actions sur le PC de l'utilisateur mais aussi de faire des prises en main à distance ou encore de faciliter la discussion avec l'utilisateur grâce à un assistant virtuel.",
      "Il se présente sous un format mobile et peut être installé sur Windows et Linux, il s'agit à la base d'une application React JS qui utilise l'outil tauri JS pour pouvoir communiquer avec l'OS de la machine et rendre l'application compatible. ",
      "En plus des fonctionnalités de chat et de gestion des problèmes en cours mis à disposition à l'utilisateur il y a aussi un système de notification et de contrôle de son compte directement intégré à l'application.  Pour que les utilisateurs puissent personnaliser leur avatar ou encore changer la langue de leur application ",
      "Note: NeoHelper est une plateforme destinée à des clients du coup il n'existe pas de version publique accessible.",
    ],
    icon: iconNeomanis,
    title: "Neomanis (NeoHelper)",
    picture: [
      {
        title: "Home screen",
        img: homeNeohelper,
        isMobile: true,
        desc: "La homepage de NeoHelper  se compose de différentes listes de problèmes, trier en fonction de leur statut ( en cours,  en attente, clos). Il y a aussi le bouton besoin d'aide qui est là pour faciliter l'accès au système de chat, dans le cas où l'utilisateur aurait besoin de signaler un problème et démarrer une discussion avec le service de diagnostic.",
      },
      {
        title: "Chat screen",
        img: chatNeohelper,
        isMobile: true,
        desc: "L'écran de discussion se présente sous la forme d'un chat classique, dans lequel est rajouter un système de réponse simplifiée pour gagner du temps lors des demandes. Ce n'est pas visible directement sur le visuel mais il y a aussi un système de glisser déposer pour que l'utilisateur ajoute des pièces jointes à la discussion quand c'est nécessaire.",
      },
      {
        title: "Setting screen",
        img: settingNeohelper,
        isMobile: true,
        desc: "L'écran de setting dispose de toutes les informations concernant l'utilisateur mais aussi lui donne la possibilité de changer certaines d'entre elles",
      },
    ],
    skills: [
      "React JS",
      "API REST",
      "Node JS",
      "Tailwind CSS",
      "TypeScript",
      "Express JS",
      "Mongo DB",
      "Tauri JS",
    ],
    link: {
      site: "https://www.linkedin.com/company/neomanis/",
    },
  },
  // {
  //   id: 3,
  //   name: "CodingWeb BluEx",
  //   description: [
  //     "Développement en indépendent du site web Build-lol.com basée sur l'api de Riot games",
  //     "Qui permettra à ses utilisateurs de visualiser les statistiques de leur personnage (League of Legend) en fonction de leur équipement d'un simple glisser déposer.",
  //   ],
  //   icon: iconCodingweb,
  //   title: "CodingWeb (BluEx)",
  //   picture: [
  //     {
  //       title: "Home Page",
  //       img: homeBluEx,
  //       isMobile: false,
  //       desc: "Description img",
  //     },
  //   ],
  //   skills: [
  //     "Next JS",
  //     "Nginx",
  //     "API REST",
  //     "Node JS",
  //     "React JS",
  //     "Tailwind CSS",
  //   ],
  //   link: {
  //     git: "https://github.com/AlexPawlonski/Build-lol",
  //     site: "https://buildlol.alexpawlonski.tech",
  //   },
  // },
];
export const skills: ISkills = {
  front: [
    { title: "React JS", level: 5, fav: true },
    { title: "Next JS", level: 3, fav: true },
    { title: "TypeScript / JavaScript", level: 4, fav: true },
    { title: "HTML / CSS", level: 5, fav: true },
    { title: "Sass", level: 1, fav: false },
    { title: "Tailwind CSS", level: 5, fav: true },
    { title: "Bootstrap", level: 3, fav: false },
    { title: "Emotion", level: 1, fav: false },
    { title: "Axios", level: 4, fav: false },
    { title: "React Query", level: 3, fav: false },
    { title: "React Hook Form", level: 4, fav: false },
    { title: "React Chart", level: 2, fav: false },
    { title: "React D&D", level: 3, fav: false },
  ],
  back: [
    { title: "Node JS", level: 5, fav: true },
    { title: "Mongo DB", level: 1, fav: false },
    { title: "FireBase", level: 2, fav: true },
    { title: "Expresse JS", level: 1, fav: false },
    { title: "Nest JS", level: 1, fav: false },
  ],
  server: [
    { title: "Ngnix", level: 2, fav: false },
    { title: "Jenkins", level: 1, fav: false },
  ],
  test: [{ title: "Jest", level: 2, fav: false }],
  tools: [
    { title: "Agile", level: 5, fav: false },
    { title: "Storybook", level: 3, fav: true },
    { title: "GitHub", level: 3, fav: false },
    { title: "Figma", level: 3, fav: true },
    { title: "Photoshop", level: 3, fav: false },
  ],
};
