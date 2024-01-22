import { Project } from "@src/interfaces";
import { ButtonLink } from "../atoms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import Carousel from "./Carousel";

interface Props {
  project: Project;
}
export default function ProjectComponent({ project }: Props) {
  return (
    <article className="bg-grey-light rounded-xl p-4 flex flex-col gap-3">
      <p className="text-end lg:text-xl">{`</Component>`}</p>
      <h2 className="text-3xl">{project.name}</h2>
      <div className="flex flex-col gap-3">
        {project.description.map((text, key) => (
          <p key={key}>{text}</p>
        ))}
      </div>
      <Carousel>
        {project.picture.map((picture, key) => (
          <Image
            key={key}
            src={picture.src}
            alt="ExemplePicture"
            width={1280}
            height={720}
            className="boxShadowsLite w-full min-w-full rounded-xl"
          />
        ))}
      </Carousel>
      <h3 className="text-center text-xl">
        {project.skills.map((skill) => `</${skill}> `).join(" ")}
      </h3>
      <div className="flex items-center justify-center gap-4">
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
    </article>
  );
}
