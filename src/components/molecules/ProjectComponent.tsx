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
          "bg-drakBlue/65 bg-opacity-40 relative flex w-full flex-1 items-center gap-4 overflow-hidden rounded-xl p-5 lg:gap-6",
          !imgSelected.isMobile ? "flex-col" : "flex-col lg:flex-row",
        )}
      >
        <Image
          src={imgSelected.img.src}
          alt={`${imgSelected.title}-Icon`}
          width={1280}
          height={720}
          className={classNames(
            "rounded-lg",
            imgSelected.isMobile ? "w-fit h-full" : "aspect-video",
          )}
        />
        <div
          className={classNames(
            !imgSelected.isMobile ? "w-full overflow-scroll" : "h-full",
          )}
        >
          <h2 className="mb-4 text-xl lg:text-2xl xl:text-4xl">
            {imgSelected.title}
          </h2>
          <p className="xl:text-xl">{imgSelected.desc}</p>
        </div>
      </article>
    );
  } else {
    return (
      <article className="bg-drakBlue/65 bg-opacity-40 relative flex flex-1 flex-col gap-6 overflow-hidden rounded-xl p-5">
        <div className="text-blueReact flex flex-col justify-around gap-2 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="text-3xl lg:text-3xl xl:text-5xl">{`<${project.name}/>`}</h2>
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
        <div className="relative flex-1 overflow-hidden lg:flex">
          <div className="flex h-[60%] flex-col gap-4 overflow-y-scroll pr-4 lg:h-full lg:w-[60%]">
            {project.desc}
          </div>
          <div className="mt-4 flex h-[40%] flex-wrap justify-start overflow-y-scroll pr-3 lg:mt-0 lg:h-full lg:w-[40%]">
            {project.picture.map((picture, key) => (
              <ImgItem
                key={key}
                img={picture}
                onClick={(img) => fCallBackImg(img)}
              />
            ))}
          </div>
        </div>
        <div className="textAnnimColor flex flex-wrap justify-start gap-x-4 text-xl lg:mt-auto xl:text-3xl">
          {project.skills.map((skill, key) => (
            <h3 key={key} className="min-w-max">{`</${skill}>`}</h3>
          ))}
        </div>
      </article>
    );
  }
}
