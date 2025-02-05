import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <div
      id="contact"
      className="flex h-screen w-full items-center justify-center"
    >
      <div className="flex flex-col gap-10">
        <div className="flex items-center gap-10">
          <h3 className="text-blueReact textShadowsBlue text-4xl lg:text-6xl">
            On se call ?
          </h3>
          <div className="rainbowGlow items-center gap-10 lg:flex">
            <a
              href="mailto:apawlonski8@gmail.com"
              className="boxShadowRainbowLinkHover relative flex items-center gap-4"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-2xl lg:text-4xl"
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
                className="text-2xl lg:text-4xl"
              />
              <h3 className="text-lg">@AlexPawlonski</h3>
            </a>
          </div>
        </div>
        <h3 className="text-sm lg:text-2xl">
          Si vous voulez plus d&apos;informations ou travailler avec moi
          n&apos;hésitez pas à me contacter :D
        </h3>
      </div>
    </div>
  );
}
