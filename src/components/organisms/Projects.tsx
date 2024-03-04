import { useState } from "react";
import { ProjectComponent, ProjectNav } from "../molecules";
import { Picture, Project } from "@src/interfaces";
import { projects } from "@src/datas";
import { ProjectItem } from "../atoms";

export default function Projects() {
  const [projectSelected, setProjectSelected] = useState<Project | undefined>();
  const [imgSelected, setImgSelected] = useState<Picture>();
  return (
    <section
      id="projects"
      className="flex flex-col gap-2 lg:h-[1000px] h-[800px]"
    >
      <h2 className="text-2xl xl:text-5xl">Réalisation</h2>
      <ProjectNav
        onClickBack={() => {
          if (imgSelected) {
            setImgSelected(undefined);
          } else {
            setProjectSelected(undefined);
          }
        }}
        onClickForward={() => console.log("forward")}
        projectSelected={projectSelected}
        imgSelected={imgSelected}
      />
      {!projectSelected && (
        <div className="grid grid-cols-2 lg:flex lg:flex-wrap gap-x-14">
          {projects.map((project, key) => (
            <ProjectItem
              key={key}
              project={project}
              onClick={(project) => setProjectSelected(project)}
            />
          ))}
        </div>
      )}
      {projectSelected && (
        <ProjectComponent
          project={projectSelected}
          fCallBackImg={(img) => setImgSelected(img)}
          imgSelected={imgSelected}
        />
      )}
    </section>
  );
}
