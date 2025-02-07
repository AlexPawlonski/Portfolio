import { skills } from "@src/datas";
import { SkillSection } from "../molecules";

import {
  faPencil,
  faServer,
  faScrewdriverWrench,
  faCubes,
  faExplosion,
} from "@fortawesome/free-solid-svg-icons";

export default function Skills() {
  return (
    <section id="skills" className="gap-4 flex flex-col pt-4">
     <h2 className="text-3xl xl:text-5xl" >Skills</h2>
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
    </section>
  );
}
