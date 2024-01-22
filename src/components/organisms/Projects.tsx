import { useState } from "react";
import { ProjectComponent, ProjectNav } from "../molecules";
import { Project } from "@src/interfaces";
import { projects } from "@src/datas";

export default function Projects() {
  const [projectSelected, setProjectSelected] = useState<Project>(projects[0]);
  return (
    <section id="projects" className="flex flex-col gap-4">
      <h2 className="text-2xl xl:text-5xl mt-4">Réalisation</h2>
      <ProjectComponent project={projectSelected} />
      <ProjectNav
        datas={projects}
        projectSelected={projectSelected}
        onClick={(project) => setProjectSelected(project)}
      />
    </section>
  );
}
