import { classNames } from "@src/utils";
import { ProfilImg } from "../atoms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

interface Props {
  isFixed?: boolean;
}
export default function Header({ isFixed }: Props) {
  return (
    <header className="rounded-xl w-full p-4 rainbowGlow boxShadowRainbow bg-drakBlue">
      <p className="text-end lg:text-xl text-white">
        {!isFixed ? `</header>` : `</memo>`}
      </p>
      {isFixed && (
        <ProfilImg size="w-52 lg:w-32 xl:w-52 mx-auto my-4" showText={false} />
      )}
      <div
        className={
          isFixed ? "flex flex-col" : "text-start m-2 lg:m-6 flex flex-col"
        }
      >
        <h1
          className={classNames(
            isFixed ? "xl:text-5xl lg:text-3xl" : "text-3xl lg:text-5xl",
            "text-blueReact textShadowsBlue"
          )}
        >
          Alex Pawlonski
        </h1>
        <h2
          className={classNames(
            isFixed ? "xl:text-xl lg:text-sm" : "text-xl lg:text-2xl",
            "my-3 text-redReact min-w-max"
          )}
        >
          Développeur Front-end passionné
        </h2>
        <div className="flex text-xl xl:text-2xl gap-6 rainbowGlow ">
          <a
            href="https://www.linkedin.com/in/alex-pawlonski/"
            target="_blanck"
            className="flex items-center cursor-pointer gap-2 boxShadowRainbowLinkHover transform hover:scale-105 transition-all"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            <p>Linkedin</p>
          </a>

          <a
            href="https://github.com/AlexPawlonski"
            target="_blanck"
            className="flex items-center cursor-pointer gap-2 boxShadowRainbowLinkHover transform hover:scale-105 transition-all"
          >
            <FontAwesomeIcon icon={faGithub} />
            <p>GitHub</p>
          </a>
        </div>
      </div>
    </header>
  );
}
