import {
  Header,
  Nav,
  MenuFixed,
  Projects,
  Skills,
  Work,
  Contact,
} from "@components/organisms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProfilImg, Writer } from "@src/components/atoms";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { works, projects } from "@src/datas";

const BASE_URL = "https://alexpawlonski.fr";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alex Pawlonski",
  url: BASE_URL,
  email: "apawlonski8@gmail.com",
  jobTitle: "Développeur Full-stack Spécialisé Front-end",
  description:
    "Développeur Full-stack spécialisé Front-end avec 4+ ans d'expérience sur des projets SaaS et e-commerce headless.",
  image: `${BASE_URL}/photopro.webp`,
  sameAs: [
    "https://www.linkedin.com/in/alex-pawlonski/",
    "https://github.com/AlexPawlonski",
  ],
  knowsAbout: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "GraphQL",
    "Figma",
    "Docker",
    "PrestaShop",
  ],
};

const worksSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Expériences professionnelles d'Alex Pawlonski",
  itemListElement: works.map((work, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "OrganizationRole",
      roleName: work.title,
      startDate: work.date.start,
      endDate: work.date.end !== "Aujourd'hui" ? work.date.end : undefined,
      description: `${work.type} — ${work.location}`,
      affiliation: {
        "@type": "Organization",
        name: work.company,
        url: work.linkWork,
      },
    },
  })),
};

const projectsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Projets de développement — Alex Pawlonski",
  itemListElement: projects.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "SoftwareApplication",
      name: project.name,
      url: project.link.site,
      applicationCategory: "WebApplication",
      keywords: project.skills.join(", "),
      author: {
        "@type": "Person",
        name: "Alex Pawlonski",
        url: BASE_URL,
      },
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(worksSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
      />
      <main id="home" className="z-10 relative">
        <p className="absolute right-2 lg:right-10 top-5 text-2xl">{`</body>`}</p>
        <section className="flex flex-col gap-4 lg:gap-0 items-center justify-center lg:flex-row-reverse h-screen relative">
          <div className="flex flex-col items-center gap-4 lg:gap-20 lg:mx-20 xl:mx-24">
            <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-24">
              <ProfilImg size=" xl:w-80 lg:w-52 w-32" />
              <Header />
            </div>
            <Writer phrases={["Hi!", "Bienvenue sur mon PortFolio :D"]} />
          </div>
          <Nav />
          <div className="absolute bottom-10 mx-auto group">
            <a
              href={`#projects`}
              className="bg-white lg:h-20 lg:w-20 w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transform transition-all cursor-pointer relative z-20"
            >
              <FontAwesomeIcon
                icon={faArrowDown}
                className="text-grey-dark lg:text-4xl text-2xl animate-bounce mt-2 lg:mt-3"
              />
            </a>
            <div className="group-hover:opacity-100 transition-all opacity-0 imgGradient absolute top-1 left-1 z-10 w-24 h-24"></div>
          </div>
        </section>
        <div className="flex w-full lg:gap-14 lg:mt-10 relative">
          <MenuFixed />
          <div className="w-full mt-4 flex flex-col gap-4">
            <Projects />
            <Work />
            <Skills />
          </div>
        </div>
        <Contact />
      </main>
    </>
  );
}
