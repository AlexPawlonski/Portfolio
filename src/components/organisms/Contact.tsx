import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
export default function Contact() {
  return (
    <div
      id="contact"
      className="h-[92vh] w-full flex flex-col items-center justify-center text-center gap-6"
    >
      <div className="flex flex-col gap-4 lg:gap-8 item-center">
        <h3 className="text-xl lg:text-2xl">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Merci d'être arrivé jusqu'ici !
        </h3>
        <a
          href="mailto:apawlonski8@gmail.com"
          className="text-4xl lg:text-6xl border-b-2 max-w-fit textAnnimColor mx-auto hover:scale-105 transition-all textAnnimColor cursor-pointer transform relative boxShadowRainbowMailHover z-20"
        >
          On se call ?
        </a>
        <h3 className="text-sm lg:text-2xl">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Si vous voulez plus d'informations ou travailler avec moi n'hésitez
          pas à me contacter :D
        </h3>
      </div>
      <div className="flex justify-center items-center gap-8 lg:text-2xl">
        <div className="text-center">
          <div className="lg:p-4 flex justify-center">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-2xl lg:text-4xl textAnnimColor"
            />
          </div>
          <h3 className="text-lg">apawlonski8@gmail.com</h3>
        </div>
        <div>
          <div className="flex gap-6 justify-center">
            <a
              href="https://www.linkedin.com/in/alex-pawlonski/"
              target="_blanck"
              className="lg:p-4 flex justify-center textAnnimColor cursor-pointer transform transition-all hover:scale-110 relative boxShadowRainbowHover z-20"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-2xl lg:text-4xl"
              />
            </a>
            <a
              href="https://github.com/AlexPawlonski"
              target="_blanck"
              className="lg:p-4 flex justify-center textAnnimColor cursor-pointer transform transition-all hover:scale-110 relative boxShadowRainbowHover z-20"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="text-2xl lg:text-4xl "
              />
            </a>
          </div>
          <h3 className="text-lg">@AlexPawlonski</h3>
        </div>
      </div>
    </div>
  );
}
