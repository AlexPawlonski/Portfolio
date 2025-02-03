import { ISkill } from "@src/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as starSolid } from "@fortawesome/free-solid-svg-icons";

interface Props {
  skill: ISkill;
}

export default function SkillItem({ skill }: Props) {
  return (
    <li className="flex gap-2 items-center bg-drakBlue w-fit px-4 py-2 rounded-full">
      <h3 className="text-lg lg:text-2xl">{skill.title}</h3>
      {skill.fav && (
        <FontAwesomeIcon icon={starSolid} className="rainbowGlow" />
      )}
    </li>
  );
}
