import { works, schools } from "@src/datas";
import { WorkComponent } from "../molecules";

export default function Work() {
  return (
    <section id="work" className="flex flex-col gap-4 pb-4">
      <div className="flex flex-col gap-4">
        <h3 className="pt-4 text-3xl xl:text-5xl">Experience</h3>
        {works.map((work, key) => (
          <WorkComponent key={key} work={work} />
        ))}
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="pt-4 text-3xl xl:text-5xl">Formation</h3>
        {schools.map((work, key) => (
          <WorkComponent key={key} work={work} />
        ))}
      </div>
    </section>
  );
}
