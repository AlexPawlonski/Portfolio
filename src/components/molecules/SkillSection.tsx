import { ISkill } from "@src/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { SkillItem } from "../molecules";

interface Props {
  title: string;
  skillArray: ISkill[];
  maxHeight: boolean;
  icon: IconDefinition;
}

export default function SkillSection({
  title,
  skillArray,
  maxHeight,
  icon,
}: Props) {
  return (
    <div className="bg-drakBlue/65 bg-opacity-40 rounded-xl px-4 py-4 lg:px-6">
      <h3 className="text-blueReact textShadowsBlue mb-4 text-xl lg:text-3xl">
        {title}
        <FontAwesomeIcon icon={icon} className="ml-4" />
      </h3>
      <ul className="flex flex-wrap gap-2 lg:gap-4">
        {skillArray.map((skill, key) => (
          <SkillItem key={key} skill={skill} />
        ))}
      </ul>
    </div>
  );
}
