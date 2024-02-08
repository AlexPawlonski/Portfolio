import { Picture, Project } from "@src/interfaces";
import { ButtonLink, ImgItem } from "../atoms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

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
      <article className="w-full flex flex-col items-center max">
        <Image
          src={imgSelected.img.src}
          alt={`${imgSelected.title}-Icon`}
          width={1280}
          height={720}
          className="rounded-sm object-contain imgHeight w-full"
        />
        <h2 className="text-center mt-6 text-2xl lg:text-4xl">
          {imgSelected.title}
        </h2>
        <p className="text-center mt-4 lg:text-xl xl:text-2xl">
          {imgSelected.desc}
        </p>
      </article>
    );
  } else {
    return (
      <article className="bg-grey-light rounded-xl p-4 flex flex-col gap-3 lg:flex-row xl:px-8">
        <div className="lg:w-4/6 xl:w-1/2 flex flex-col gap-8">
          <h2 className="text-3xl xl:text-5xl lg:text-3xl">{`<${project.name}/>`}</h2>
          <div className="flex items-center gap-4">
            <ButtonLink
              icon={<FontAwesomeIcon icon={faGithub} />}
              text="GitHub"
              href={project.link.git}
            />
            <ButtonLink
              icon={<FontAwesomeIcon icon={faLink} />}
              text="Le Site"
              href={project.link.site}
            />
          </div>
          <div className="flex flex-col gap-3 lg:text-lg xl:text-xl w-[80%]">
            {project.description.map((text, key) => (
              <p key={key}>{text}</p>
            ))}
          </div>
          <div className="flex justify-center lg:justify-start flex-wrap gap-x-4 text-xl lg:text-2xl lg:mt-auto lg:mb-4 ">
            {project.skills.map((skill, key) => (
              <h3 key={key} className="min-w-max">{`</${skill}>`}</h3>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:w-2/6 xl:w-1/2 mt-4 lg:mt-0">
          {project.picture.map((picture, key) => (
            <ImgItem
              key={key}
              img={picture}
              onClick={(img) => fCallBackImg(img)}
            />
          ))}
        </div>
      </article>
    );
  }
}
