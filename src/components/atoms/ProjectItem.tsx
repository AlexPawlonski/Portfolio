import { Project } from "@src/interfaces";
import Image from "next/image";

interface Props {
  project: Project;
  onClick: (project: Project) => void;
}
export default function ProjectItem({ project, onClick }: Props) {
  return (
    <div
      className="group relative flex cursor-pointer flex-col transition-all"
      onClick={() => onClick(project)}
    >
      <Image
        src={project.icon?.src}
        alt={`${project.name}-Icon`}
        width={512}
        height={512}
        className="transform py-5 transition-all group-hover:scale-105"
      />
      <h2 className="text-center text-xl">{project.title}</h2>
    </div>
  );
}
