import { skills } from "@src/datas";
import { SkillSection } from "../molecules";
import { LevelBar } from "../atoms";

import {
  faPencil,
  faServer,
  faScrewdriverWrench,
  faCubes,
  faExplosion,
} from "@fortawesome/free-solid-svg-icons";

export default function Skills() {
  return (
    <section id="skills">
      <div className="flex items-end gap-10 justify-between">
        <h2 className="text-2xl xl:text-5xl">Compétence</h2>
        <LevelBar level={3} base={5} legendIsActive />
      </div>
      <div className="mt-10 flex flex-col gap-6">
        <SkillSection
          title="Front-end"
          skillArray={skills.front}
          maxHeight={Boolean(skills.front.length > 3)}
          icon={faPencil}
        />
        <SkillSection
          title="Back-end"
          skillArray={skills.back}
          maxHeight={Boolean(skills.back.length > 3)}
          icon={faCubes}
        />
        <SkillSection
          title="Outils"
          skillArray={skills.tools}
          maxHeight={Boolean(skills.tools.length > 3)}
          icon={faScrewdriverWrench}
        />
        <SkillSection
          title="Server"
          skillArray={skills.server}
          maxHeight={Boolean(skills.server.length > 3)}
          icon={faServer}
        />
        <SkillSection
          title="Test"
          skillArray={skills.test}
          maxHeight={Boolean(skills.test.length > 3)}
          icon={faExplosion}
        />
      </div>
    </section>
  );
}
