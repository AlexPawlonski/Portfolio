import { classNames } from "@src/utils";
import { ProfilImg } from "../atoms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import LinkCV from "../atoms/LinkCV";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

interface Props {
  isFixed?: boolean;
}
export default function Header({ isFixed }: Props) {
  return (
    <header
      className={classNames(
        "rainbowGlow boxShadowRainbow bg-drakBlue/65 w-full rounded-xl p-4",
        isFixed && "max-w-[300px]",
      )}
    >
      <div className="flex w-full justify-between">
        <LinkCV className="textAnnimColor boxShadowRainbowLinkHover flex transform items-center gap-2 text-base transition-all hover:scale-105 lg:text-xl">
          <>
            {`</Mon VC ici `}
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="mb-[2px] text-sm"
            />
            {` >`}
          </>
        </LinkCV>
        <p className="text-white lg:text-xl">
          {!isFixed ? `</header>` : `</memo>`}
        </p>
      </div>

      {isFixed && (
        <ProfilImg size="w-52 lg:w-32 xl:w-52 mx-auto my-4" showText={false} />
      )}
      <div
        className={
          isFixed ? "flex flex-col" : "m-2 flex flex-col text-start lg:m-6"
        }
      >
        <h1
          className={classNames(
            isFixed ? "lg:text-3xl xl:text-5xl" : "text-3xl lg:text-5xl",
            "text-blueReact textShadowsBlue",
          )}
        >
          Alex Pawlonski
        </h1>
        <h2
          className={classNames(
            isFixed ? "lg:text-sm xl:text-xl" : "text-xl lg:text-2xl",
            "text-redReact my-3",
          )}
        >
          Développeur Front-end passionné
        </h2>
        <div className="rainbowGlow flex gap-6 text-xl xl:text-2xl">
          <a
            href="https://www.linkedin.com/in/alex-pawlonski/"
            target="_blanck"
            className="boxShadowRainbowLinkHover flex transform cursor-pointer items-center gap-2 transition-all hover:scale-105"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            <p>Linkedin</p>
          </a>

          <a
            href="https://github.com/AlexPawlonski"
            target="_blanck"
            className="boxShadowRainbowLinkHover flex transform cursor-pointer items-center gap-2 transition-all hover:scale-105"
          >
            <FontAwesomeIcon icon={faGithub} />
            <p>GitHub</p>
          </a>
        </div>
      </div>
    </header>
  );
}
