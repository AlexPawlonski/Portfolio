"use client";
import { useState } from "react";
import { ProjectComponent, ProjectNav } from "../molecules";
import { Picture, Project } from "@src/interfaces";
import { projects } from "@src/datas";
import { ProjectItem } from "../atoms";
import { classNames } from "@src/utils";

export default function Projects() {
  const [projectSelected, setProjectSelected] = useState<Project | undefined>();
  const [imgSelected, setImgSelected] = useState<Picture>();
  return (
    <section
      id="projects"
      className={classNames("relative flex flex-col gap-4 pb-4", projectSelected && "h-screen")}
    >
      <h2 className="text-3xl xl:text-5xl pt-4">Réalisation</h2>
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
        <div className="bg-drakBlue/65 grid grid-cols-3 grid-rows-3 gap-x-8 rounded-xl px-6 lg:grid-cols-4 lg:grid-rows-2 pb-6">
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
