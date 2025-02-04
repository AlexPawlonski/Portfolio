import {
  builder,
  champSelect,
  champSelectMobile,
  iconBuildLol,
  inventoryMobile,
  settingMobile,
  stateMobile,
} from "@public/img/buildlol";
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

import { Project, ISkills, Work } from "./interfaces";
import {
  chatNeohelper,
  homeNeohelper,
  settingNeohelper,
} from "@public/img/neohelper";

import {
  neomanisImg,
  codingWebImg,
  ceffinImg,
  quizArenaImg,
} from "@public/img/work";

export const projects: Project[] = [
  {
    id: 0,
    name: "Build-lol.com",
    desc: (
      <div>
        <h2>
          QuizArena Cloud est une plateforme SaaS destinée au lancement
          automatique de sessions de jeux, principalement pour les utilisateurs
          RH.
        </h2>
        <div>
          <h3>Mes contributions :</h3>
          <ul>
            <li>Intégration de pages et de composants React.</li>
            <li>Optimisation de l’application avec Next.js.</li>
            <li>
              Développement de fonctionnalités complexes : drag & drop,
              formulaires interactifs, scripts d&apos;importation de
              traductions.
            </li>
            <li>Réalisation de maquettes UX/UI avec figma.</li>
            <li>Création de bases de données avec Drizzle.</li>
            <li>
              Gestion de sessions utilisateurs et authentification via NextAuth
              et Cognito.
            </li>
            <li>
              Développement de scripts pour automatiser la mise à jour des
              traductions depuis Google Sheets
            </li>
          </ul>
        </div>
      </div>
    ),

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
    desc: <div></div>,
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
    desc: <div></div>,
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
  test: [
    { title: "Jest", level: 2, fav: false },
    { title: "Playwright", level: 2, fav: false },
  ],
  tools: [
    { title: "Agile", level: 5, fav: false },
    { title: "Storybook", level: 3, fav: true },
    { title: "GitHub", level: 3, fav: false },
    { title: "Figma", level: 3, fav: true },
    { title: "Photoshop", level: 3, fav: false },
  ],
};

export const works: Work[] = [
  {
    title: "Développeur Full-Stack",
    company: "QuizArena",
    type: "CDI",
    img: quizArenaImg,
    linkWork: "https://www.linkedin.com/company/neomanis/",
    date: {
      start: "Juillet 2021",
      end: "Juin 2023",
      time: "2 ans",
    },
    location: "Angers, Pays de la Loire, France (Full remote)",
    desc: (
      <div>
        <h2 className="text-xl text-blueReact">
          QuizArena Cloud est une plateforme SaaS destinée au lancement
          automatique de sessions de jeux, principalement pour les utilisateurs
          RH.
        </h2>
        <div>
          <h3 className="my-3 text-lg text-redReact">Mes contributions :</h3>
          <ul className="list-disc flex flex-col gap-2">
            <li>Intégration de pages et de composants React.</li>
            <li>Optimisation de l’application avec Next.js.</li>
            <li>
              Développement de fonctionnalités complexes : drag & drop,
              formulaires interactifs, scripts d&apos;importation de
              traductions.
            </li>
            <li>Réalisation de maquettes UX/UI avec figma.</li>
            <li>Création de bases de données avec Drizzle.</li>
            <li>
              Gestion de sessions utilisateurs et authentification via NextAuth
              et Cognito.
            </li>
            <li>
              Développement de scripts pour automatiser la mise à jour des
              traductions depuis Google Sheets
            </li>
          </ul>
        </div>
      </div>
    ),
    skills: [
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind css",
      "Storybook",
      "Tauri JS",
      "Expresse JS",
    ],
  },
  {
    title: "Développeur Front-end",
    company: "Neomanis",
    type: "CDI",
    img: neomanisImg,
    linkWork: "https://www.linkedin.com/company/neomanis/",
    date: {
      start: "Juillet 2021",
      end: "Juin 2023",
      time: "2 ans",
    },
    location: "Angers, Pays de la Loire, France (Full remote)",
    desc: <div></div>,
    skills: [
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind css",
      "Storybook",
      "Tauri JS",
      "Expresse JS",
    ],
  },
  {
    title: "Développeur Web Full-Stack",
    company: "CodingWeb",
    type: "Stage",
    img: codingWebImg,
    linkWork: "https://www.linkedin.com/company/codingweb/",
    date: {
      start: "Novembre 2020",
      end: "Décembre 2020",
      time: "2 mois",
    },
    location: "Beaucouzé, Pays de la Loire, France (Hybride remote)",
    desc: <div></div>,
    skills: [
      "React JS",
      "JavaScript",
      "Node JS",
      "Tailwind css",
      "Storybook",
      "Bootstrap",
      "Meteor JS",
    ],
  },
];

export const schools: Work[] = [
  {
    title: "Diplôme de développeur Full-Stack",
    company: "CEFii",
    type: "Formation pro",
    img: ceffinImg,
    linkWork: "https://www.linkedin.com/school/cefii/",
    date: {
      start: "Avril 2020",
      end: "Janvier 2021",
      time: "8 mois",
    },
    location: "Angers, Pays de la Loire, France",
    desc: <div></div>,
    skills: [
      "React JS",
      "Angular JS",
      "JavaScript",
      "HTML",
      "CSS",
      "PHP",
      "Wordpresse",
      "MySQL",
    ],
  },
];
