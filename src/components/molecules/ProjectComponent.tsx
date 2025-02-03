import { Picture, Project } from "@src/interfaces";
import { ButtonLink, ImgItem } from "../atoms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { classNames } from "@src/utils";

interface Props {
  project: Project;
  imgSelected: Picture | undefined;
  fCallBackImg: (img: Picture | undefined) => void;
}
export default function ProjectComponent({
  project,
  imgSelected,
  fCallBackImg,
}: Props) {
  if (imgSelected) {
    return (
      <article
        className={classNames(
          "flex w-full gap-4 lg:gap-6 bg-drakBlue bg-opacity-40 rounded-xl p-5 flex-1 relative overflow-hidden lg:flex-row flex-col items-center",
          !imgSelected.isMobile && ""
        )}
      >
        <Image
          src={imgSelected.img.src}
          alt={`${imgSelected.title}-Icon`}
          width={1280}
          height={720}
          className={classNames(
            "rounded-lg",
            imgSelected.isMobile ? "w-fit" : "aspect-video"
          )}
        />
        <div className={classNames(!imgSelected.isMobile && "w-full")}>
          <h2 className="text-2xl lg:text-4xl xl:text-6xl mb-4">
            {imgSelected.title}
          </h2>
          <p className="lg:text-2xl xl:text-4xl">{imgSelected.desc}</p>
        </div>
      </article>
    );
  } else {
    return (
      <article className="bg-drakBlue bg-opacity-40 rounded-xl p-5 relative flex-1 flex flex-col overflow-hidden gap-6">
        <div className="flex flex-col lg:flex-row lg:justify-between justify-around text-blueReact gap-2 lg:items-center">
          <h2 className="text-3xl xl:text-5xl lg:text-3xl">{`<${project.name}/>`}</h2>
          <div className="flex items-start gap-6">
            {project.link.git && (
              <ButtonLink
                icon={<FontAwesomeIcon icon={faGithub} />}
                text="GitHub"
                href={project.link.git}
              />
            )}
            <ButtonLink
              icon={<FontAwesomeIcon icon={faLink} />}
              text="Le Site"
              href={project.link.site}
            />
          </div>
        </div>
        <div className="relative flex-1 lg:flex overflow-hidden">
          <div className="flex flex-col gap-4 lg:w-[60%] h-[60%] lg:h-full overflow-y-scroll pr-4">
            {project.description.map((text, key) => (
              <p key={key} className=" xl:text-3xl">
                {text}
              </p>
            ))}
          </div>
          <div className="grid grid-cols-2 overflow-y-scroll pr-3 lg:w-[40%] h-[40%] lg:h-full">
            {project.picture.map((picture, key) => (
              <ImgItem
                key={key}
                img={picture}
                onClick={(img) => fCallBackImg(img)}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-start flex-wrap gap-x-4 text-xl lg:mt-auto textAnnimColor xl:text-3xl">
          {project.skills.map((skill, key) => (
            <h3 key={key} className="min-w-max">{`</${skill}>`}</h3>
          ))}
        </div>
      </article>
    );
  }
}
