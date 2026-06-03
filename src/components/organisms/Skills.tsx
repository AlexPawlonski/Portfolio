import { skills } from "@src/datas";
import { SkillSection } from "../molecules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPencil,
  faServer,
  faScrewdriverWrench,
  faCubes,
  faExplosion,
  faRobot,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

export default function Skills() {
  return (
    <section id="skills" className="flex flex-col gap-4 pt-4">
      <div className="flex items-baseline gap-4">
        <h2 className="text-3xl xl:text-5xl">Skills</h2>
        <span className="flex items-center gap-2 text-sm rainbowGlow">
          <span>Mes technos préférées</span>{" "}
          <FontAwesomeIcon icon={faStar} className="" />
        </span>
      </div>
      <SkillSection
        title="IA Générative"
        skillArray={skills.ia}
        maxHeight={Boolean(skills.ia.length > 3)}
        icon={faRobot}
      />
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
