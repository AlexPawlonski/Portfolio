import { Project } from "@src/interfaces";
import Image from "next/image";

interface Props {
  project: Project;
  onClick: (project: Project) => void;
}
export default function ProjectItem({ project, onClick }: Props) {
  return (
    <div
      className="flex flex-col group cursor-pointer lg:w-1/4 xl:w-1/6 relative transition-all aspect-square h-fix"
      onClick={() => onClick(project)}
    >
      <Image
        src={project.icon?.src}
        alt={`${project.name}-Icon`}
        width={512}
        height={512}
        className="py-5 group-hover:scale-105 transition-all transform"
      />
      <h2 className="text-center text-xl">{project.title}</h2>
    </div>
  );
}
