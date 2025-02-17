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
import { gridBluEx, homeBluEx, iconCodingweb } from "@public/img/bluex";
import {
  addCollection,
  addGame,
  homeCollection,
  loginCollection,
  mycollectionLogo,
} from "@public/img/mycollection";
import {
  homeQuiz,
  loginQuiz,
  quizarenaLogo,
  sessionList,
  setailSession,
} from "@public/img/quizarena";

export const projects: Project[] = [
  {
    id: 0,
    name: "Quiz Arena Cloud",
    desc: (
      <div className="flex flex-col gap-2">
        <h2 className="text-redReact text-xl">
          QuizArena Cloud est une plateforme SaaS destinée aux entreprises au
          sein de la solution QuizArena.
        </h2>
        <p>
          Elle permet de créer un compte pour accéder au jeu QuizArena,
          d’organiser des sessions de jeu et de les personnaliser grâce à un
          système de
          <span className="textAnnimColor"> questions personnalisées</span>.
        </p>
        <p>
          Elle propose également une multitude de paramètres de jeu prédéfinis,
          tout en offrant une expérience utilisateur
          <span className="textAnnimColor"> fluide et simple</span>.
        </p>
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
              Développement de fonctionnalités complexes :
              <span className="textAnnimColor">
                {" "}
                drag & drop, formulaires interactifs, scripts d&apos;importation
                de traductions
              </span>
              .
            </li>
            <li>
              Réalisation de maquettes
              <span className="textAnnimColor"> UX/UI</span> avec
              <span className="textAnnimColor"> figma</span>.
            </li>
            <li>
              Création de bases de données avec
              <span className="textAnnimColor"> Drizzle ORM</span>.
            </li>
            <li>
              Gestion de sessions utilisateurs et authentification via
              <span className="textAnnimColor"> NextAuth</span> et{" "}
              <span className="textAnnimColor"> Cognito</span>.
            </li>
            <li>
              Développement de scripts pour automatiser la mise à jour des
              traductions depuis
              <span className="textAnnimColor"> Google Sheets</span>.
            </li>
          </ul>
        </div>
      </div>
    ),
    icon: quizarenaLogo,
    title: "Quiz Arena Cloud",
    picture: [
      {
        title: "Page de connexion",
        img: loginQuiz,
        isMobile: false,
        desc: "Le SaaS s'ouvre sur une page de connexion qui permet de se connecter à son compte ou de s'inscrire si l'utilisateur n'en a pas encore mais aussi d’accéder à la partie de récupération de mots de passe.",
      },
      {
        title: "Page d'acceuil",
        img: homeQuiz,
        isMobile: false,
        desc: "Cette page sert de page d'acceuil mais aussi de catalogue pour les thèmes de quiz disponibles",
      },
      {
        title: "Page mes session",
        img: sessionList,
        isMobile: false,
        desc: "Elle permet de voir les sessions en cours, les sessions à venir et les sessions passées.",
      },
      {
        title: "Page de détail d'une session",
        img: setailSession,
        isMobile: false,
        desc: "Cette page permet de voir les détails d'une session en particulier, comme les questions posées ou les paramètres de jeu.",
      },
    ],
    skills: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "AWS",
      "Drizzle ORM",
      "sst",
      "NextAuth",
      "Figma",
    ],
    link: {
      git: "https://github.com/quizarenalabs",
      site: "https://quizarena.com/en/",
    },
  },

  {
    id: 1,
    name: "Build-lol.com",
    desc: (
      <div className="flex flex-col gap-2">
        <h2 className="text-redReact text-xl">
          Build-lol.com est une plateforme SaaS permettant de créer des builds
          pour le jeu League of Legends.
        </h2>
        <p>
          Ce projet est mon premier vrai projet utilisant
          <span className="textAnnimColor"> Next.js</span> comme base. Il repose
          sur la récupération des données des personnages et des objets via
          <span className="textAnnimColor"> l’API de Riot Games</span>.
        </p>
        <p>
          L’application utilise ces données pour afficher les statistiques de
          combat et permet de les combiner afin de visualiser l’évolution du
          build en temps réel en fonction du niveau du personnage.
        </p>
        <div>
          <h3 className="text-blueReact my-3 text-lg">Mes contributions :</h3>
          <ul className="flex list-inside list-disc flex-col gap-1">
            <li>
              Développement de fonctionnalités et d&apos;interfaces avec
              <span className="textAnnimColor"> Next.js</span>
            </li>
            <li>
              Intégration des pages avec
              <span className="textAnnimColor"> Tailwind CSS</span>.
            </li>
            <li>
              <span className="textAnnimColor"> Optimisation</span> du site pour
              la <span className="textAnnimColor"> performance</span> et le
              <span className="textAnnimColor"> SEO</span>.
            </li>
            <li>
              Réalisation de maquettes
              <span className="textAnnimColor"> Figma</span> et création
              d&apos;assets avec
              <span className="textAnnimColor"> Photoshop</span>.
            </li>
          </ul>
          <p className="text-redReact mt-4 text-xl">
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
        title: "Sélection de champion",
        img: champSelect,
        isMobile: false,
        desc: "Écran qui permet de sélectionner son champion. et qui possède de multiples fonctionnalités comme la recherche avancée ou le filtrage par rôles.",
      },
      {
        title: "Création de build",
        img: builder,
        isMobile: false,
        desc: "L'écran principal de l'application qui permet de glisser-déposer les équipements du champion pour visualiser ses statistiques",
      },
      {
        title: "Sélection de champion (Mobile)",
        img: champSelectMobile,
        isMobile: true,
        desc: "Écran qui permet de sélectionner son champion. et qui possède de multiples fonctionnalités comme la recherche avancée ou le filtrage par rôles. (Mobile)",
      },
      {
        title: "Création de build (Mobile)",
        img: stateMobile,
        isMobile: true,
        desc: "L'écran principal de l'application qui permet de glisser-déposer les équipements du champion pour visualiser ses statistiques",
      },
      {
        title: "Inventaire (Mobile)",
        img: inventoryMobile,
        isMobile: true,
        desc: "Visuel particulier de l'inventaire en version mobile qui possède un système propre de dragon drop adapté au support.",
      },
      {
        title: "Settings (Mobile)",
        img: settingMobile,
        isMobile: true,
        desc: "Les settings en version mobile on leur propre menu dédié toujours dans un souci d'adaptation au support",
      },
    ],
    skills: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Nginx",
      "pm2",
      "ubuntu server",
      "API REST",
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
      <div className="flex flex-col gap-2">
        <h2 className="text-redReact text-xl">
          MyCollection est une plateforme SaaS permettant aux collectionneurs de
          gérer et de répertorier chaque item de leur collection.
        </h2>
        <p>
          Ce projet est encore au stade de prototype, mais une grande partie des
          fonctionnalités sont déjà présentes, notamment la création de comptes
          et l’enregistrement des objets.
        </p>
        <div>
          <h3 className="text-blueReact my-3 text-lg">Mes contributions :</h3>
          <ul className="flex list-inside list-disc flex-col gap-1">
            <li>
              Développement de fonctionnalités et d&apos;interfaces avec{" "}
              <span className="textAnnimColor"> Next.js</span>
            </li>
            <li>
              Intégration des pages avec{" "}
              <span className="textAnnimColor"> Tailwind CSS</span>.
            </li>
            <li>
              Maquettage des différentes vues de l’application sur{" "}
              <span className="textAnnimColor"> Figma</span>.
            </li>
            <li>
              Mise en place de la base de données{" "}
              <span className="textAnnimColor"> MySQL</span>, interfacée avec{" "}
              <span className="textAnnimColor"> Prisma ORM</span>.
            </li>
            <li>
              Mise en place de l’authentification des utilisateurs via{" "}
              <span className="textAnnimColor"> NextAuth </span>
              avec Google.
            </li>
          </ul>
          <p className="text-redReact mt-4 text-xl">
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
        title: "Page de connexion",
        img: loginCollection,
        isMobile: false,
        desc: "Page de connexion de MyCollection qui permet de se connecter à son compte via google ou autre reseau social",
      },
      {
        title: "Page d'acceuil",
        img: homeCollection,
        isMobile: false,
        desc: "Page d'acceuil de MyCollection qui permet de voir les différentes collection de l'utilisateur et d'en ajouter de nouvelle",
      },
      {
        title: "Ajout d'une collection",
        img: addCollection,
        isMobile: false,
        desc: "Pop-up qui permet d'ajouter une nouvelle collection au compte de l'utilisateur",
      },
      {
        title: "Ajout d'un jeu",
        img: addGame,
        isMobile: false,
        desc: "Pop-up qui permet d'ajouter un nouveau jeu à une collection",
      },
    ],
    skills: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Nginx",
      "pm2",
      "ubuntu server",
      "API REST",
    ],
    link: {
      site: "https://www.figma.com/design/Vjima4lL0R2U0qDJWFV4mR/MyCollection.io",
      git: "https://github.com/AlexPawlonski/MyCollection",
    },
  },

  {
    id: 3,
    name: "NeoServer",
    desc: (
      <div className="flex flex-col gap-2">
        <h2 className="text-redReact text-xl">
          NeoServer est le projet principal de la solution Neomanis.
        </h2>
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
          questions techniques créées par les techniciens.
        </p>
        <p>
          L’une des principales fonctionnalités du SaaS est la création et la
          modification de &quot;Livres&quot; : des scripts pouvant être exécutés
          sur les postes clients via une interface no code en drag & drop.
        </p>
        <div>
          <h3 className="text-blueReact my-3 text-lg">Mes contributions :</h3>
          <ul className="flex list-inside list-disc flex-col gap-1">
            <li>
              Réalisation d’une page complexe en tenant compte de
              <span className="textAnnimColor">
                {" "}
                l’ergonomie utilisateur
              </span>{" "}
              et de la <span className="textAnnimColor"> responsivité</span>.
            </li>
            <li>
              Mise en place des routes
              <span className="textAnnimColor"> API</span> entre les
              <span className="textAnnimColor">
                {" "}
                microservices Back-end Express.js{" "}
              </span>
              et les applications
              <span className="textAnnimColor"> Front-end</span> (NeoHelper,
              NeoServer).
            </li>
            <li>
              Maquettage des différentes vues de l’application sur
              <span className="textAnnimColor"> Figma</span>.
            </li>
            <li>
              Intégration de
              <span className="textAnnimColor"> tests fonctionnels</span> avec
              <span className="textAnnimColor"> Jest</span>.
            </li>
            <li>
              Création de maquettes pour les nouvelles pages et fonctionnalités
              sur <span className="textAnnimColor"> Figma</span>.
            </li>
            <li>
              Implémentation de
              <span className="textAnnimColor"> WebSockets</span> pour gérer les
              notifications en temps réel envoyées par les
              <span className="textAnnimColor"> microservices</span>.
            </li>
          </ul>
          <p className="text-blueReact my-4 text-xl">
            Ce projet partage des composants React avec NeoHelper grâce à une
            bibliothèque <span className="textAnnimColor"> Storybook</span>
            indépendante.
          </p>
          <p className="text-redReact text-xl">
            Ce projet a été gelé en 2023 par manque de financement, mais il a
            atteint le stade commercial avec une version complète et utilisable
            par une entreprise.
          </p>
        </div>
      </div>
    ),
    icon: iconNeomanis,
    title: "NeoServer",
    picture: [
      {
        title: "Page d'acceuil",
        img: homedrag,
        isMobile: false,
        desc: "Page d'acceuil de Neo Server dans lequel on peut voir l’inventaire, ainsi que la gestion des événements en bas et les notifications à l’utilisateur à droite.",
      },
      {
        title: "Page de détail d'un ticket",
        img: ticketdetail,
        isMobile: false,
        desc: "Page de détail d'un ticket qui permet de voir les informations du ticket mais aussi de le modifier ou de le clôturer",
      },
      {
        title: "Composant Chat",
        img: chat,
        isMobile: false,
        desc: "Composent chat qui permet de discuter en temps réel avec les autres techniciens de l'entreprise ou les clients",
      },
      {
        title: "Page de modification de livre",
        img: bookedite,
        isMobile: false,
        desc: "Page de modification de livre qui permet de créer ou de modifier un livre pour effectuer des actions sur les postes clients",
      },
      {
        title: "Page de rapport de diagnostic",
        img: recapbook,
        isMobile: false,
        desc: "Page de rapport de diagnostic qui permet de voir les résultats des diagnostics effectués sur les postes clients",
      },
      {
        title: "Page des questions techniques",
        img: blogdetail,
        isMobile: false,
        desc: "Page des questions techniques qui permet de voir les questions posées par les techniciens et les réponses associées",
      },
      {
        title: "Page des performances",
        img: statescreen,
        isMobile: false,
        desc: "Page qui permet de voir les performances de l'emtreprise pour la résolution des tickets",
      },

      {
        title: "Page de modification de rôle",
        img: settingrole,
        isMobile: false,
        desc: "Page de modification de rôle qui permet de changer les rôles des utilisateurs de l'entreprise",
      },
    ],
    skills: [
      "React.js",
      "Tailwind CSS",
      "TypeScript",
      "Express.js",
      "Mongo DB",
      "API REST",
      "Node.js",
    ],
    link: {
      site: "https://www.linkedin.com/company/neomanis/",
    },
  },
  {
    id: 4,
    name: "NeoHelper",
    desc: (
      <div className="flex flex-col gap-2">
        <h2 className="text-redReact text-xl">
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
          de donner accès au poste utilisateur à
          <span className="textAnnimColor"> NeoBot</span> pour effectuer des
          actions de maintenance.
        </p>
        <p>
          Il est doté d’une interface de suivi des problèmes signalés ainsi que
          d’un chat de communication.
        </p>
        <div>
          <h3 className="text-blueReact my-3 text-lg">Mes contributions :</h3>
          <ul className="flex list-inside list-disc flex-col gap-1">
            <li>
              Développement d’interfaces adaptées au format mobile avec gestion
              du redimensionnement des fenêtres Windows.
            </li>
            <li>
              Communication entre Windows et l’application NeoHelper pour
              exécuter des diagnostics sur le poste utilisateur via
              <span className="textAnnimColor"> Tauri.js</span>.
            </li>
            <li>
              Création d’un chat en
              <span className="textAnnimColor"> WebSocket</span> pour la
              communication en temps réel entre utilisateurs et techniciens.
            </li>
          </ul>
          <p className="text-redReact mt-4 text-xl">
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
        desc: "La homepage de NeoHelper se compose de différentes listes de problèmes, trier en fonction de leur statut ( en cours,  en attente, clos). Il y a aussi le bouton besoin d'aide qui est là pour faciliter l'accès au système de chat, dans le cas où l'utilisateur aurait besoin de signaler un problème et démarrer une discussion avec le service de diagnostic.",
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
      "React.js",
      "Tailwind CSS",
      "TypeScript",
      "Express.js",
      "Mongo DB",
      "API REST",
      "Node.js",
      "Tauri.js",
    ],
    link: {
      site: "https://www.linkedin.com/company/neomanis/",
    },
  },
  {
    id: 5,
    name: "BluEx",
    desc: (
      <div className="flex flex-col gap-2">
        <h2 className="text-redReact text-xl">
          BlueX est le principal projet sur lequel j’ai travaillé chez
          CodingWeb.
        </h2>
        <p>
          Il prend la forme d’une
          <span className="textAnnimColor"> marketplace</span> permettant aux
          utilisateurs de gérer leur stand lors d’un événement tel qu’un
          <span className="textAnnimColor"> salon d’exposition</span>.
        </p>
        <p>
          La plateforme permet notamment de commander des services liés à
          l’événement ou du matériel pour le stand.
        </p>
        <p>
          Elle inclut également une fonctionnalité de pré-organisation de la
          disposition des éléments du stand.
        </p>
        <div>
          <h3 className="text-blueReact my-3 text-lg">Mes contributions :</h3>
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
              <span className="textAnnimColor"> API</span> entre le
              <span className="textAnnimColor"> Front-end</span> et le
              <span className="textAnnimColor"> Back-end</span>.
            </li>
          </ul>
        </div>
      </div>
    ),
    icon: iconCodingweb,
    title: "BluEx",
    picture: [
      {
        title: "Page d'acceuil",
        img: homeBluEx,
        isMobile: false,
        desc: "Page d'acceuil de BluEx qui permet de voir les différentes articles disponible sur la marketplace",
      },
      {
        title: "Présentation des interfaces de la marketplace",
        img: gridBluEx,
        isMobile: false,
        desc: "Image de présentation des différentes interfaces de la marketplace",
      },
    ],
    skills: [
      "React.js",
      "Meteor.js",
      "Blaze.js",
      "Bootstrap",
      "API REST",
      "Node.js",
    ],
    link: {
      site: "https://www.codingweb.fr/references-bluex.html#work",
    },
  },
];

export const skills: ISkills = {
  front: [
    { title: "React.js", level: 5, fav: true },
    { title: "Next.js", level: 3, fav: true },
    { title: "TypeScript", level: 4, fav: true },
    { title: "JavaScript", level: 4, fav: false },
    { title: "HTML", level: 5, fav: false },
    { title: "CSS", level: 5, fav: false },
    { title: "Tailwind CSS", level: 5, fav: true },
    { title: "Emotion", level: 1, fav: false },
  ],
  back: [
    { title: "Node.js", level: 5, fav: true },
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
    company: "Quiz Arena",
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
      <div className="flex flex-col gap-2">
        <h2 className="text-redReact text-xl">
          La start-up QuizArena propose une
          <span className="textAnnimColor"> solution immersive</span> pour
          faciliter le
          <span className="textAnnimColor"> team building</span> en entreprise.
        </h2>
        <p>
          Elle se présente sous la forme d’un jeu de quiz et blind test animé
          par un présentateur virtuel. La mise en place est rapide et peut être
          utilisée pour de nombreuses occasions :{" "}
          <span className="textAnnimColor">
            intégration d’un employé , entretien, célébration d’une étape
            importante, réunion hebdomadaire, etc...
          </span>
        </p>
        <p>
          QuizArena offre une
          <span className="textAnnimColor"> personnalisation avancée</span> des
          sessions de jeu grâce à un système de
          <span className="textAnnimColor"> questions personnalisées</span>, des
          <span className="textAnnimColor"> audios générés</span> par
          <span className="textAnnimColor"> intelligence artificielle</span> et
          un gameplay sur mesure avec différents
          <span className="textAnnimColor"> jokers</span>.
        </p>
        <p className="text-redReact mt-2 text-xl">
          J’ai intégré l’entreprise pour travailler sur la solution SaaS
          QuizArena Cloud, en collaboration avec deux développeurs Full Stack
          expérimentés.
        </p>
        <p>
          L’organisation du travail se faisait sous forme de
          <span className="textAnnimColor"> sprints hebdomadaires</span>. Je
          participais au développement en
          <span className="textAnnimColor"> full remote</span> et bénéficiais
          d’une <span className="textAnnimColor"> grande autonomie</span>.
        </p>
        <div>
          <h3 className="text-blueReact my-3 text-lg">
            Un processus de vérification rigoureux était mis en place pour
            assurer la qualité du code et faciliter un déploiement rapide :
          </h3>
          <ul className="flex list-inside list-disc flex-col gap-1">
            <li>
              Revue de code
              <span className="textAnnimColor text-lg"> (PR Review)</span>
            </li>
            <li>
              Tests automatisés sur
              <span className="textAnnimColor text-lg"> GitHub</span>
            </li>
            <li>Conventions de mise en forme du code</li>
          </ul>
          <p className="text-redReact mt-4 text-xl">
            Ce fut une expérience très enrichissante et stimulante.
          </p>
        </div>
      </div>
    ),
    skills: [
      "Next.js",
      "React.js",
      "Tailwind css",
      "TypeScript",
      "Node.js",
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
      <div className="flex flex-col gap-2">
        <h2 className="text-blueReactueReact text-xl">
          Création de projets en indépendant, Auto-formation
          <span className="textAnnimColor"> Next.js</span>,
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
              <span className="textAnnimColor"> Next.js</span>.
            </li>
            <li>
              Mise en place d&apos;une base de données utilisateurs
              <span className="textAnnimColor"> MySQL</span> en utilisant
              <span className="textAnnimColor"> Prisma ORM</span>.
            </li>
            <li>
              Implémentation d&apos;un système d&apos;authentification avec
              <span className="textAnnimColor"> NextAuth</span>.
            </li>
            <li>
              Optimisation du site pour la performance et le
              <span className="textAnnimColor"> SEO</span>.
            </li>
            <li>
              Réalisation de maquettes
              <span className="textAnnimColor"> Figma</span> et création
              d&apos;assets avec
              <span className="textAnnimColor"> Photoshop</span>.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-blueReact mt-3 text-lg">Serveur VPS public :</h3>
          <h4 className="text-redReact mb-3 text-lg">
            Pour répondre aux besoins d&apos;hébergement de mes différents
            projets, j&apos;ai configuré un serveur
            <span className="textAnnimColor"> Ubuntu</span> from scratch.
          </h4>
        </div>
        <ul className="flex list-inside list-disc flex-col gap-1">
          <li>
            Configuration de <span className="textAnnimColor"> Nginx</span> et
            d&apos;un <span className="textAnnimColor"> proxy</span> avec mise
            en place de
            <span className="textAnnimColor"> certificats HTTPS</span>.
          </li>
          <li>
            Configuration d&apos;un
            <span className="textAnnimColor"> nom de domaine</span>.
          </li>
          <li>
            Installation de <span className="textAnnimColor"> Jenkins</span>
            pour automatiser les déploiements avec
            <span className="textAnnimColor"> GitHub</span>.
          </li>
        </ul>
      </div>
    ),
    skills: [
      "Next.js",
      "React.js",
      "Tailwind css",
      "TypeScript",
      "Node.js",
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
      <div className="flex flex-col gap-2">
        <h2 className="text-redReact text-xl">
          La start-up Neomanis proposait une solution
          <span className="textAnnimColor">
            {" "}
            d’aide aux entreprises de support technique{" "}
          </span>
          pour {""}
          <span className="textAnnimColor">
            faciliter la communication et la gestion des tickets
          </span>
          .
        </h2>
        <div>
          <h3 className="text-blueReact mt-3 text-lg">
            Cette solution comprenait :
          </h3>
          <ul className="flex list-inside list-disc flex-col gap-1">
            <li>
              <span className="textAnnimColor text-lg">NeoServer :</span> Une
              application web destinée aux techniciens
            </li>
            <li>
              <span className="textAnnimColor text-lg">NeoHelper :</span> Un
              agent installé sur le poste client
            </li>
            <li>
              <span className="textAnnimColor text-lg">NeoBot :</span> ChatBot
              pour automatiser le diagnostic chez les clients.
            </li>
          </ul>
        </div>
        <p className="text-redReact my-2 text-xl">
          J’ai intégré l’entreprise en tant que développeur Front-End,
          travaillant sur les interfaces des différents projets.
        </p>
        <p>
          L’équipe était composée de
          <span className="textAnnimColor"> cinq développeurs</span> : trois
          Back-End, deux Front-End, un développeur senior et deux apprentis.
        </p>
        <p>
          Le travail était organisé en
          <span className="textAnnimColor"> sprints de deux semaines</span>,
          gérés par notre développeur senior. À la fin de chaque sprint, une
          réunion de revue réunissait tous les membres de l’entreprise pour
          présenter les avancées.
        </p>
        <div>
          <h3 className="text-blueReact my-3 text-lg">
            Pour garantir la qualité et l’uniformité du code, plusieurs bonnes
            pratiques étaient mises en place :
          </h3>
          <ul className="flex list-inside list-disc flex-col gap-1">
            <li>
              Revue de code entre collègues et avec le développeur référent
            </li>
            <li>
              {" "}
              <span className="textAnnimColor"> Tests automatisés</span> à
              plusieurs niveaux
            </li>
            <li>Conventions de mise en forme du code</li>
          </ul>
        </div>
        <p className="text-redReact mt-4 text-xl">
          Malheureusement, l’entreprise a fermé ses portes après deux ans, faute
          de financement. Toutefois, la solution a réussi à être commercialisée
          et installée chez plusieurs clients avant l’arrêt du projet.
        </p>
      </div>
    ),
    skills: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Tailwind css",
      "Storybook",
      "Tauri.js",
      "Expresse.js",
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
      <div className="flex flex-col gap-2">
        <h2 className="text-redReact text-xl">
          CodingWeb est une entreprise spécialisée dans le développement
          d’applications et de sites web métiers.
        </h2>
        <p>
          Son objectif est d’optimiser les processus des entreprises grâce à des
          solutions web adaptées.
        </p>
        <p>
          Les clients de CodingWeb proviennent de divers secteurs : Marchés
          financiers, La qualité, Événementiel, Associations et ONG.
        </p>
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
            <span className="textAnnimColor"> Node.js</span> ainsi que du
            framework <span className="textAnnimColor"> Blaze.js</span>.
          </li>
        </ul>
      </div>
    ),
    skills: [
      "React.js",
      "Node.js",
      "JavaScript",
      "Tailwind CSS",
      "Storybook",
      "Bootstrap",
      "Meteor.js",
      "Blaze.js",
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
        <h3 className="text-redReact mb-3 text-xl">
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
      "React.js",
      "Angular.js",
      "JavaScript",
      "HTML",
      "CSS",
      "PHP",
      "Wordpress",
      "MySQL",
    ],
  },
];
