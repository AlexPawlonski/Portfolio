import { ISkill } from "@src/interfaces";
import { LevelBar } from "../atoms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as starReagular } from "@fortawesome/free-regular-svg-icons";
import { faStar as starSolid } from "@fortawesome/free-solid-svg-icons";

interface Props {
  skill: ISkill;
}

export default function SkillItem({ skill }: Props) {
  return (
    <li className="flex flex-col gap-2 col-span-1">
      <label className="flex items-center justify-between text-sm">
        <h3>{skill.title}</h3>
        {skill.fav ? (
          <FontAwesomeIcon icon={starSolid} className="" />
        ) : (
          <FontAwesomeIcon icon={starReagular} className="" />
        )}
      </label>
      <LevelBar level={skill.level} base={5} />
    </li>
  );
}
