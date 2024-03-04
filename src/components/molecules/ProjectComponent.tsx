import { Picture, Project } from "@src/interfaces";
import { ButtonLink, ImgItem } from "../atoms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
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
      <article className="w-full flex flex-col items-center">
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
      <article className="bg-drakBlue bg-opacity-40 rounded-xl p-4 lg:p-10 lg:h-[80%] h-[85%] grid lg:grid-cols-2 lg:grid-rows-10 grid-rows-12">
        <div className="flex flex-col lg:flex-row lg:justify-between justify-around col-span-2 lg:row-span-1 row-span-2 text-blueReact">
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
        <div className="col-span-2 row-span-10 relative lg:flex lg:gap-10">
          <div className="flex flex-col justify-between gap-4 h-[60%] lg:h-full lg:w-[60%] pb-5 ">
            <div className="flex flex-col gap-3 lg:text-lg xl:text-xl overflow-y-scroll pr-3">
              {project.description.map((text, key) => (
                <p key={key}>{text}</p>
              ))}
            </div>
            <div className="flex justify-start flex-wrap gap-x-4 text-xl lg:text-2xl lg:mt-auto lg:mb-4 textAnnimColor">
              {project.skills.map((skill, key) => (
                <h3 key={key} className="min-w-max">{`</${skill}>`}</h3>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 overflow-y-scroll pr-3 h-[40%] lg:h-full lg:w-[40%]">
            {project.picture.map((picture, key) => (
              <ImgItem
                key={key}
                img={picture}
                onClick={(img) => fCallBackImg(img)}
              />
            ))}
          </div>
        </div>
      </article>
    );
  }
}
