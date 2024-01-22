import { Project } from "@src/interfaces";
import { ProjectItem } from "../atoms";
import Carousel from "./Carousel";

interface Props {
  datas: Project[];
  onClick: (project: Project) => void;
  projectSelected: Project;
}
export default function ProjectNav({ datas, onClick, projectSelected }: Props) {
  return (
    <Carousel isNav={true}>
      {datas.map((project, key) => (
        <ProjectItem
          key={key}
          data={project}
          isSelected={projectSelected.id === project.id}
          onClick={() => onClick(project)}
        />
      ))}
    </Carousel>
  );
}
