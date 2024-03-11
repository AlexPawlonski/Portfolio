import { ISkill } from "@src/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { SkillItem } from "../molecules";
import { ShowMore } from "../atoms";

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
    <div className="bg-drakBlue rounded-xl px-6 py-4 bg-opacity-40">
      <ShowMore maxHeight={maxHeight}>
        <>
          <h3 className="text-xl mb-4 lg:text-3xl">
            {title}
            <FontAwesomeIcon icon={icon} className="ml-4" />
          </h3>
          <ul className="flex flex-col gap-2 lg:gap-4 mx-1 lg:grid lg:grid-cols-4">
            {skillArray.map((skill, key) => (
              <SkillItem key={key} skill={skill} />
            ))}
          </ul>
        </>
      </ShowMore>
    </div>
  );
}
