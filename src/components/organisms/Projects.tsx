"use client";
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
      className="flex flex-col gap-2 relative h-screen py-6"
    >
      <h2 className="text-3xl xl:text-5xl pb-4">Réalisation</h2>
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
        <div className="grid grid-cols-2 lg:grid-rows-6 grid-rows-3 lg:flex lg:flex-wrap flex-1 gap-x-8 lg:gap-x-14 bg-drakBlue/65 rounded-xl px-6">
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
