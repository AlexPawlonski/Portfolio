import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <div
      id="contact"
      className="h-screen w-full flex items-center justify-center"
    >
      <div className="flex flex-col gap-10">
        <div className="flex items-center gap-10">
          <h3 className="text-4xl lg:text-6xl">
            On se call ?
          </h3>
          <div className="lg:flex items-center gap-10 rainbowGlow">
            <a
              href="mailto:apawlonski8@gmail.com"
              className="flex gap-4 items-center boxShadowRainbowLinkHover relative"
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
              className="flex gap-4 items-center boxShadowRainbowLinkHover relative"
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
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Si vous voulez plus d'informations ou travailler avec moi n'hésitez
          pas à me contacter :D
        </h3>
      </div>
    </div>
  );
}
