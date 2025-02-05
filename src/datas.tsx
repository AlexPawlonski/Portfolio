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
  AstraIcon,
} from "@public/img/work";
import { iconCodingweb } from "@public/img/bluex";
import { mycollectionLogo } from "@public/img/mycollection";
import { quizarenaLogo } from "@public/img/quizarena";

export const projects: Project[] = [
  {
    id: 0,
    name: "QuizArena",
    desc: (
      <div>
        <h2>
          QuizArena Cloud est une plateforme SaaS destinée aux entreprises au
          sein de la solution QuizArena.
        </h2>
        <p>
          Elle permet de créer un compte pour accéder au jeu QuizArena,
          d’organiser des sessions de jeu et de les personnaliser grâce à un
          système de questions personnalisées. Elle propose également une
          multitude de paramètres de jeu prédéfinis, tout en offrant une
          expérience utilisateur fluide et simple.
        </p>
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
    icon: quizarenaLogo,
    title: "QuizArena Cloud",
    picture: [
      {
        title: "Home screen",
        img: homeNeohelper,
        isMobile: true,
        desc: "La ",
      },
    ],
    skills: ["Next JS", "Tailwind CSS", "TypeScript", ""],
    link: {
      git: "https://github.com/quizarenalabs",
      site: "https://quizarena.com/en/",
    },
  },

  {
    id: 1,
    name: "Build-lol.com",
    desc: (
      <div>
        <h2>
          Build-lol.com est une plateforme SaaS permettant de créer des builds
          pour le jeu League of Legends.
        </h2>
        <p>
          Ce projet est mon premier vrai projet utilisant Next.js comme base. Il
          repose sur la récupération des données des personnages et des objets
          via l’API de Riot Games. L’application utilise ces données pour
          afficher les statistiques de combat et permet de les combiner afin de
          visualiser l’évolution du build en temps réel en fonction du niveau du
          personnage.
        </p>
        <div>
          <h3>Mes contributions :</h3>
          <ul>
            <li>
              Développement de fonctionnalités et d&apos;interfaces avec Next.js
            </li>
            <li>Intégration des pages avec Tailwind CSS.</li>
            <li>Optimisation du site pour la performance et le SEO.</li>
            <li>
              Réalisation de maquettes Figma et création d&apos;assets avec
              Photoshop.
            </li>
          </ul>
          <p>
            À terme, le projet devrait également permettre aux utilisateurs de
            partager leurs builds sur un forum dédié et d&apos;afficher des
            informations plus détaillées sur les interactions entre objets et
            champions en situation de combat.
          </p>
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
      site: "https://buildlol.alexpawlonski.fr",
    },
  },
  {
    id: 2,
    name: "MyCollection",
    desc: (
      <div>
        <h2>
          MyCollection est une plateforme SaaS permettant aux collectionneurs de
          gérer et de répertorier chaque item de leur collection.
        </h2>
        <p>
          Ce projet est encore au stade de prototype, mais une grande partie des
          fonctionnalités sont déjà présentes, notamment la création de comptes
          et l’enregistrement des objets.
        </p>
        <div>
          <h3>Mes contributions :</h3>
          <ul>
            <li>
              Développement de fonctionnalités et d&apos;interfaces avec Next.js
            </li>
            <li>Intégration des pages avec Tailwind CSS.</li>
            <li>Maquettage des différentes vues de l’application sur Figma.</li>
            <li>
              Mise en place de la base de données MySQL, interfacée avec Prisma.
            </li>
            <li>
              Mise en place de l’authentification des utilisateurs via NextAuth
              avec Google.
            </li>
          </ul>
          <p>
            À terme, ce projet vise à être utilisable aussi bien sur PC que sur
            mobile, avec notamment un module IA permettant de reconnaître
            directement les objets et de faciliter leur intégration.
          </p>
        </div>
      </div>
    ),
    icon: mycollectionLogo,
    title: "MyCollection",
    picture: [
      {
        title: "Home screen",
        img: homeNeohelper,
        isMobile: true,
        desc: "La homepage de NeoHelper ",
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

  {
    id: 3,
    name: "NeoServer",
    desc: (
      <div>
        <h2>NeoServer est le projet principal de la solution Neomanis.</h2>
        <p>
          Il se présente sous la forme d’un panneau de contrôle permettant aux
          techniciens d’une entreprise de support technique de visualiser une
          multitude d’informations, telles que les tickets en cours de
          résolution, les résultats des diagnostics des postes clients ou l’état
          d’une infrastructure informatique.
        </p>
        <p>
          Il permet également la communication entre les différents acteurs de
          l’entreprise grâce à un système de chat intégré et une section de
          questions techniques créées par les techniciens. L’une des principales
          fonctionnalités du SaaS est la création et la modification de
          &quot;Livres&quot; : des scripts pouvant être exécutés sur les postes
          clients via une interface no code en drag & drop.
        </p>
        <div>
          <h3>Mes contributions :</h3>
          <ul>
            <li>
              Réalisation d’une page complexe en tenant compte de l’ergonomie
              utilisateur et de la responsivité.
            </li>
            <li>
              Mise en place des routes API entre les microservices Back-end
              Express.js et les applications Front-end (NeoHelper, NeoServer).
            </li>
            <li>Maquettage des différentes vues de l’application sur Figma.</li>
            <li>Intégration de tests fonctionnels avec Jest.</li>
            <li>
              Création de maquettes pour les nouvelles pages et fonctionnalités
              sur Figma.
            </li>
            <li>
              Implémentation de WebSockets pour gérer les notifications en temps
              réel envoyées par les microservices.
            </li>
          </ul>
          <p>
            Ce projet partage des composants React avec NeoHelper grâce à une
            bibliothèque Storybook indépendante.
          </p>
          <p>
            Ce projet a été gelé en 2023 par manque de financement, mais il a
            atteint le stade commercial avec une version complète et utilisable
            par une entreprise.
          </p>
        </div>
      </div>
    ),
    icon: iconNeomanis,
    title: "NeoServeur",
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
    id: 4,
    name: "NeoHelper",
    desc: (
      <div>
        <h2>
          NeoHelper fait partie de la solution Neomanis et vient en complément
          du fonctionnement de NeoServer.
        </h2>
        <p>
          NeoHelper se présente sous la forme d’un agent installé directement
          chez les clients des entreprises afin de faciliter les échanges entre
          techniciens et utilisateurs.
        </p>
        <p>
          Il permet de signaler directement des problèmes techniques, mais aussi
          de donner accès au poste utilisateur à NeoBot pour effectuer des
          actions de maintenance. Il est doté d’une interface de suivi des
          problèmes signalés ainsi que d’un chat de communication.
        </p>
        <div>
          <h3>Mes contributions :</h3>
          <ul>
            <li>
              Développement d’interfaces adaptées au format mobile avec gestion
              du redimensionnement des fenêtres Windows.
            </li>
            <li>
              Communication entre Windows et l’application NeoHelper pour
              exécuter des diagnostics sur le poste utilisateur via Tauri.js.
            </li>
            <li>
              Création d’un chat en WebSocket pour la communication en temps
              réel entre utilisateurs et techniciens.
            </li>
          </ul>
          <p>
            Ce projet partage des composants React avec NeoServer grâce à une
            bibliothèque Storybook indépendante.
          </p>
        </div>
      </div>
    ),
    icon: iconNeomanis,
    title: "NeoHelper",
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
  {
    id: 5,
    name: "BluEx",
    desc: (
      <div>
        <h2>
          BlueX est le principal projet sur lequel j’ai travaillé chez
          CodingWeb.
        </h2>
        <p>
          Il prend la forme d’une marketplace permettant aux utilisateurs de
          gérer leur stand lors d’un événement tel qu’un salon d’exposition.
        </p>
        <p>
          La plateforme permet notamment de commander des services liés à
          l’événement ou du matériel pour le stand. Elle inclut également une
          fonctionnalité de pré-organisation de la disposition des éléments du
          stand.
        </p>
        <div>
          <h3>Mes contributions :</h3>
          <ul>
            <li>
              Développement de nouvelles fonctionnalités pour la marketplace en
              React.js.
            </li>
            <li>
              Réduction de la dette technique de la plateforme en recréant des
              pages Meteor.js en React.js, avec une mise à jour visuelle en
              utilisant Bootstrap.
            </li>
            <li>
              Mise en place des communications API entre le Front-end et le
              Back-end.
            </li>
          </ul>
        </div>
      </div>
    ),
    icon: iconCodingweb,
    title: "BluEx",
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
    { title: "TypeScript", level: 4, fav: true },
    { title: "JavaScript", level: 4, fav: false },
    { title: "HTML", level: 5, fav: false },
    { title: "CSS", level: 5, fav: false },
    { title: "Tailwind CSS", level: 5, fav: true },
    { title: "Emotion", level: 1, fav: false },
  ],
  back: [
    { title: "Node JS", level: 5, fav: true },
    { title: "Prisma", level: 5, fav: false },
    { title: "Drizzle", level: 5, fav: true },
    { title: "SQL", level: 5, fav: false },
    { title: "PHP", level: 5, fav: false },
  ],
  server: [
    { title: "Ngnix", level: 2, fav: false },
    { title: "Jenkins", level: 1, fav: false },
    { title: "Hostiger", level: 1, fav: false },
    { title: "Ubuntu server", level: 1, fav: false },
  ],
  test: [
    { title: "Jest", level: 2, fav: false },
    { title: "Playwright", level: 2, fav: false },
  ],
  tools: [
    { title: "Storybook", level: 3, fav: true },
    { title: "Figma", level: 3, fav: true },
    { title: "Notion", level: 3, fav: true },
    { title: "GitHub", level: 3, fav: false },
    { title: "Photoshop", level: 3, fav: false },
  ],
};

export const works: Work[] = [
  {
    title: "Développeur Full-Stack",
    company: "QuizArena",
    type: "CDI",
    img: quizArenaImg,
    linkWork: "https://quizarena.com/en/",
    date: {
      start: "Mai 2024",
      end: "Févier 2025",
      time: "10 mois",
    },
    location: "Biarritz, Nouvelle-Aquitaine, France (Full remote à Redon)",
    desc: (
      <div>
        <h2 className="text-blueReactueReact text-xl">
          QuizArena Cloud est une plateforme SaaS destinée au lancement
          automatique de sessions de jeux, principalement pour les utilisateurs
          RH.
        </h2>
        <div>
          <h3 className="text-blueReact my-3 text-lg">Mes contributions :</h3>
          <ul className="flex list-inside list-disc flex-col gap-1">
            <li>
              Intégration de pages et de composants
              <span className="textAnnimColor"> React</span>.
            </li>
            <li>
              Optimisation de l’application avec
              <span className="textAnnimColor"> Next.js</span>.
            </li>
            <li>
              Développement de fonctionnalités complexes : drag & drop,
              formulaires interactifs, scripts d&apos;importation de
              traductions.
            </li>
            <li>
              Réalisation de maquettes UX/UI avec
              <span className="textAnnimColor"> Figma</span>.
            </li>
            <li>
              Création de bases de données avec
              <span className="textAnnimColor"> Drizzle</span>.
            </li>
            <li>
              Gestion de sessions utilisateurs et authentification via
              <span className="textAnnimColor"> NextAuth </span>
              et <span className="textAnnimColor"> Cognito</span>.
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
      "Next JS",
      "React JS",
      "Tailwind css",
      "TypeScript",
      "Node JS",
      "Amazon web services",
      "Figma",
      "Drizzle ORM",
      "sst",
      "NextAuth",
    ],
  },

  {
    title: "Développeur Full-Stack",
    company: "AlexPawlonski",
    type: "Auto-formation",
    img: AstraIcon,
    linkWork: "https://github.com/AlexPawlonski",
    date: {
      start: "Septembre 2023",
      end: "Mai 2024",
      time: "9 mois",
    },
    location: "Redon, ille et vilaine, France",
    desc: (
      <div>
        <h2 className="text-blueReactueReact text-xl">
          Création de projets en indépendant, Auto-formation
          <span className="textAnnimColor"> Next JS</span>,
          <span className="textAnnimColor"> DevOps</span>.
        </h2>
        <div>
          <h3 className="text-blueReact mt-3 text-lg">Build-lol.com :</h3>
          <h4 className="text-redReact mb-3 text-lg">
            Saas création de build pour le jeu League of Legends.
          </h4>
          <ul className="flex list-inside list-disc flex-col gap-1">
            <li>
              Développement de fonctionnalités et d&apos;interfaces avec
              Next.js.
            </li>
            <li>
              Mise en place d&apos;une base de données utilisateurs MySQL en
              utilisant Prisma ORM.
            </li>
            <li>
              Implémentation d&apos;un système d&apos;authentification avec
              NextAuth.
            </li>
            <li>Optimisation du site pour la performance et le SEO.</li>
            <li>
              Réalisation de maquettes Figma et création d&apos;assets avec
              Photoshop.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-blueReact mt-3 text-lg">Serveur VPS public :</h3>
          <h4 className="text-redReact mb-3 text-lg">
            Pour répondre aux besoins d&apos;hébergement de mes différents
            projets, j&apos;ai configuré un serveur Ubuntu from scratch.
          </h4>
        </div>
        <ul className="flex list-inside list-disc flex-col gap-1">
          <li>
            Configuration de Nginx et de proxy avec mise en place de certificats
            HTTPS.
          </li>
          <li>Configuration d&apos;un nom de domaine.</li>
          <li>
            Installation de Jenkins pour automatiser les déploiements avec
            GitHub.
          </li>
        </ul>
      </div>
    ),
    skills: [
      "Next JS",
      "React JS",
      "Tailwind css",
      "TypeScript",
      "Node JS",
      "Ubuntu server",
      "Figma",
      "Prisma ORM",
      "Jenkins",
      "Nginx",
      "Notion",
      "Api REST",
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
    desc: (
      <div>
        <h2 className="text-xl">
          Travaillant dans l’équipe Front-end, en collaboration avec l’équipe
          Back-end, dans un environnement ultra-dynamique utilisant la méthode
          agile, j’ai eu l’opportunité de contribuer à plusieurs
          <span className="textAnnimColor"> projets innovants</span>.
        </h2>
        <h3 className="text-blueReact mt-3 text-xl">NeoServer :</h3>
        <h4 className="text-redReact mb-3 text-lg">
          Web app fournie aux techniciens des entreprises utilisant la solution.
        </h4>
        <ul className="flex list-inside list-disc flex-col gap-1">
          <li>
            Réalisation d’une page complexe répondant aux problématiques
            d’ergonomie utilisateur et de responsivité.
          </li>
          <li>
            Mise en place des routes API entre les microservices Back-end
            <span className="textAnnimColor"> Express.js</span> et les
            applications Front (NeoHelper, NeoServer).
          </li>
          <li>
            Intégration de tests fonctionnels avec
            <span className="textAnnimColor"> Jest</span>.
          </li>
          <li>
            Création de maquettes pour des pages et des nouvelles
            fonctionnalités avec <span className="textAnnimColor"> Figma</span>.
          </li>
          <li>
            Implémentation de
            <span className="textAnnimColor"> WebSockets</span> pour gérer les
            notifications en temps réel envoyées par des microservices.
          </li>
        </ul>

        <h3 className="text-blueReact mt-3 text-xl">NeoHelper :</h3>
        <h4 className="text-redReact mb-3 text-lg">
          Logiciel Windows installé directement chez les clients des entreprises
          pour faciliter les échanges entre techniciens et utilisateurs.
        </h4>
        <ul className="flex list-inside list-disc flex-col gap-1">
          <li>
            Développement d’interfaces adaptées au format mobile avec gestion du
            redimensionnement des fenêtres Windows.
          </li>
          <li>
            Communication entre Windows et l’application NeoHelper pour exécuter
            des diagnostics sur le poste utilisateur via
            <span className="textAnnimColor"> Tauri.js</span>.
          </li>
          <li>
            Création d’un chat en
            <span className="textAnnimColor"> WebSocket</span> pour la
            communication en temps réel entre utilisateurs et techniciens.
          </li>
        </ul>
        <h3 className="text-blueReact my-3 text-xl">Librairie Storybook :</h3>
        <ul className="flex list-inside list-disc flex-col gap-1">
          <li>
            Installation et personnalisation d’un environnement
            <span className="textAnnimColor"> Storybook</span>.
          </li>
          <li>
            Développement de composants complexes :
            <span className="text-redReact">
              {" "}
              Drag & Drop, composants récursifs, inventaire de tickets
              interactif
            </span>
            .
          </li>
          <li>
            Création de composants{" "}
            <span className="textAnnimColor"> React.js</span> réutilisables sur
            plusieurs applications.
          </li>
          <li>Mise en place de tests d’intégration.</li>
        </ul>
        <h3 className="text-blueReact my-3 text-xl">
          Création d’un module Node.js :
        </h3>
        <ul className="flex list-inside list-disc flex-col gap-1">
          <li>
            Développement d’un module pour centraliser et gérer les traductions
            de tous les projets Front-end.
          </li>
        </ul>
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
    desc: (
      <div>
        <h2 className="text-xl">
          J’ai travaillé sur deux projets en m’intégrant aux sprints
          <span className="textAnnimColor"> Agile</span> des équipes de
          l&apos;entreprise.
        </h2>
        <h3 className="text-blueReact mt-3 text-xl">BlueX :</h3>
        <h4 className="text-redReact mb-3 text-lg">
          Projet de plateforme de gestion d’événements pour un client américain,
          <span className="text-blueReact"> Shepard</span>, incluant une
          marketplace.
        </h4>
        <ul className="flex list-inside list-disc flex-col gap-1">
          <li>
            Développement de nouvelles fonctionnalités pour la marketplace en
            <span className="textAnnimColor"> React.js</span>.
          </li>
          <li>
            Réduction de la dette technique de la plateforme en recréant des
            pages <span className="textAnnimColor"> Meteor.js</span> en
            <span className="textAnnimColor"> React.js</span>, avec une mise à
            jour visuelle en utilisant
            <span className="textAnnimColor"> Bootstrap</span>.
          </li>
          <li>
            Mise en place des communications
            <span className="textAnnimColor"> API</span> entre le Front-end et
            le Back-end.
          </li>
        </ul>
        <h3 className="text-blueReact mt-3 text-xl">Meethem.fr :</h3>
        <h4 className="text-redReact mb-3 text-lg">
          Projet d’organisation d’événements entre amis avec un système
          d’invitations et d’agenda.
        </h4>
        <ul className="flex list-inside list-disc flex-col gap-1">
          <li>
            Refonte complète de l’interface
            <span className="textAnnimColor"> UX/UI</span> du site, en passant
            de
            <span className="textAnnimColor"> Bootstrap</span> à
            <span className="textAnnimColor"> Tailwind CSS</span>.
          </li>
          <li>
            Mise à jour des packages
            <span className="textAnnimColor"> Node JS</span> ainsi que du
            framework <span className="textAnnimColor"> Blaze JS</span>.
          </li>
        </ul>
      </div>
    ),
    skills: [
      "React JS",
      "Node JS",
      "JavaScript",
      "Tailwind CSS",
      "Storybook",
      "Bootstrap",
      "Meteor JS",
      "Blaze JS",
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
    desc: (
      <div>
        <h3 className="mb-3 text-xl">
          Durant ma formation, j&apos;ai eu l&apos;occasion d&apos;explorer
          divers aspects du métier de développeur.
        </h3>
        <h3 className="text-blueReact my-3 text-xl">
          Apprentisage et découverte :
        </h3>
        <ul className="flex list-inside list-disc flex-col gap-1">
          <li>
            Apprentisage des base du développement web,{" "}
            <span className="textAnnimColor"> HTML</span>,{" "}
            <span className="textAnnimColor"> CSS</span>,{" "}
            <span className="textAnnimColor"> JavaScrip</span>,
            <span className="textAnnimColor"> PHP</span>,{" "}
            <span className="textAnnimColor"> SQL</span>.
          </li>
          <li>
            Métrise des outils de développement,{" "}
            <span className="textAnnimColor"> VSCode</span>,{" "}
            <span className="textAnnimColor"> Android Studio</span>,
            <span className="textAnnimColor"> WampServer</span>,{" "}
            <span className="textAnnimColor"> GitHub</span>.
          </li>
          <li>
            Découvert de framework et de CMS comme{" "}
            <span className="textAnnimColor"> Angular</span>,{" "}
            <span className="textAnnimColor"> React</span>,{" "}
            <span className="textAnnimColor"> WordPress</span>.
          </li>
          <li>
            Gestion de projet, Planification des sprint, repartition des tache,
            gestion des équipe et de leur comunication, présentation aux
            clients.
          </li>
          <li>
            Réalisation de <span className="textAnnimColor"> MCD/MLD</span> via
            Merise.
          </li>
        </ul>
      </div>
    ),
    skills: [
      "React JS",
      "Angular JS",
      "JavaScript",
      "HTML",
      "CSS",
      "PHP",
      "Wordpress",
      "MySQL",
    ],
  },
];
