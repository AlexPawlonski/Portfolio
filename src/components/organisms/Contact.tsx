import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faEnvelope,
  faFileDownload,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import LinkCV from "../atoms/LinkCV";

export default function Contact() {
  return (
    <div
      id="contact"
      className="flex h-screen w-full items-center justify-center"
    >
      <div className="flex flex-col gap-10">
        <div className="items-center gap-10 lg:flex">
          <h3 className="text-blueReact textShadowsBlue text-center text-4xl lg:text-left lg:text-6xl">
            On se call ?
          </h3>
          <div className="rainbowGlow mt-10 flex flex-col gap-4 lg:mt-0 lg:flex-row lg:items-center lg:gap-10">
            <a
              href="mailto:apawlonski8@gmail.com"
              className="boxShadowRainbowLinkHover relative flex items-center gap-4"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="w-10 text-2xl lg:text-4xl"
              />
              <h3 className="text-lg">apawlonski8@gmail.com</h3>
            </a>
            <a
              href="https://www.linkedin.com/in/alex-pawlonski/"
              target="_blanck"
              className="boxShadowRainbowLinkHover relative flex items-center gap-4"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="w-10 text-2xl lg:text-4xl"
              />
              <h3 className="text-lg">@AlexPawlonski</h3>
            </a>
            <LinkCV className="textAnnimColor boxShadowRainbowLinkHover flex transform items-center gap-4">
              <>
                <FontAwesomeIcon
                  icon={faFileDownload}
                  className="w-10 text-xl lg:text-4xl"
                />
                <h3 className="text-lg">Mon VC ici</h3>
              </>
            </LinkCV>
          </div>
        </div>
        <h3 className="text-sm lg:text-2xl">
          Si vous voulez{" "}
          <span className="textAnnimColor"> plus d&apos;informations</span> ou
          <span className="textAnnimColor"> travailler avec moi </span>
          n&apos;hésitez pas à me contacter :D
        </h3>
      </div>
    </div>
  );
}
