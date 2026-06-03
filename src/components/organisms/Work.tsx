"use client";

import { useState } from "react";
import { works, schools } from "@src/datas";
import { WorkComponent } from "../molecules";

export default function Work() {
  const [activeWork, setActiveWork] = useState<number | null>(null);
  const [activeSchool, setActiveSchool] = useState<number | null>(null);

  return (
    <section id="work" className="flex flex-col gap-4 pb-4">
      <div className="flex flex-col gap-4">
        <h2 className="pt-4 text-3xl xl:text-5xl">Experience</h2>
        {works.map((work, key) => (
          <WorkComponent
            key={key}
            work={work}
            isOpen={activeWork === key}
            onToggle={() => setActiveWork(activeWork === key ? null : key)}
          />
        ))}
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="pt-4 text-3xl xl:text-5xl">Formation</h2>
        {schools.map((work, key) => (
          <WorkComponent
            key={key}
            work={work}
            isOpen={activeSchool === key}
            onToggle={() => setActiveSchool(activeSchool === key ? null : key)}
          />
        ))}
      </div>
    </section>
  );
}
