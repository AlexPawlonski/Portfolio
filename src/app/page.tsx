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

export default function Home() {
  return (
    <main id="home" className="z-10 relative">
      <p className="absolute right-10 top-5 text-2xl">{`</body>`}</p>
      <section className="flex flex-col gap-4 lg:gap-0 items-center justify-center lg:flex-row-reverse h-screen relative">
        <div className="flex flex-col items-center gap-4 lg:gap-20 lg:mx-20 xl:mx-24">
          <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-24">
            <ProfilImg size=" xl:w-80 lg:w-52 w-32" />
            <Header />
          </div>
          <Writer
            phrases={[
              "Hi!",
              "Bienvenue sur mon PortFolio :D",
              "Work in progress...",
            ]}
          />
        </div>
        <Nav />
        <div className="absolute bottom-5 lg:bottom-20 mx-auto group">
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
        <div className="w-full mt-4 flex flex-col gap-10">
          <Projects />
          <Skills />
          <Work />
        </div>
      </div>
      <Contact />
    </main>
  );
}
