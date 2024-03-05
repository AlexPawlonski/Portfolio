import { skills } from "@src/datas";
import { SkillItem } from "../molecules";
import { LevelBar } from "../atoms";
import { ISkill } from "@src/interfaces";
import { useState } from "react";
import { classNames } from "@src/utils";

export default function Skills() {
  const [isActive, setIsActive] = useState<
    "Front-end" | "Back-end" | "Server" | "Test" | "Outils"
  >();

  const ListSkills = ({
    title,
    skillArray,
    onClick,
    isActive,
    maxHeight,
  }: {
    title: "Front-end" | "Back-end" | "Server" | "Test" | "Outils";
    skillArray: ISkill[];
    onClick: (
      title: "Front-end" | "Back-end" | "Server" | "Test" | "Outils" | undefined
    ) => void;
    isActive: boolean;
    maxHeight: boolean;
  }) => {
    return (
      <div>
        <div
          className={classNames(
            isActive ? "max-h-none" : "max-h-52",
            "text-center overflow-hidden transition-all"
          )}
          style={{ transition: "max-height 0.5s ease" }}
        >
          <h3 className="text-xl my-2">{title}</h3>
          <ul className="flex flex-col gap-2 mx-1">
            {skillArray.map((skill, key) => (
              <SkillItem key={key} skill={skill} />
            ))}
          </ul>
        </div>
        {maxHeight && (
          <div
            className="flex items-center w-full gap-6 mt-2 cursor-pointer"
            onClick={() => (isActive ? onClick(undefined) : onClick(title))}
          >
            <span className="border-2 w-full"></span>
            <p className="min-w-max">
              {isActive ? "Afficher moin ..." : "Afficher plus ..."}
            </p>
            <span className="border-2 w-full"></span>
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="skills" className="lg:h-[1000px] h-[800px]">
      <div className="flex items-end gap-10 justify-between">
        <h2 className="text-2xl xl:text-5xl">Compétence</h2>
        <LevelBar level={3} base={5} legendIsActive />
      </div>
      <div className="mt-10 mx-5 flex flex-col gap-4">
        <ListSkills
          title="Front-end"
          skillArray={skills.front}
          onClick={(title) => setIsActive(title)}
          isActive={Boolean(isActive === "Front-end")}
          maxHeight={Boolean(skills.front.length > 3)}
        />
        <ListSkills
          title="Back-end"
          skillArray={skills.back}
          onClick={(title) => setIsActive(title)}
          isActive={Boolean(isActive === "Back-end")}
          maxHeight={Boolean(skills.back.length > 3)}
        />
        <ListSkills
          title="Server"
          skillArray={skills.server}
          onClick={(title) => setIsActive(title)}
          isActive={Boolean(isActive === "Server")}
          maxHeight={Boolean(skills.server.length > 3)}
        />
        <ListSkills
          title="Test"
          skillArray={skills.test}
          onClick={(title) => setIsActive(title)}
          isActive={Boolean(isActive === "Test")}
          maxHeight={Boolean(skills.test.length > 3)}
        />
        <ListSkills
          title="Outils"
          skillArray={skills.tools}
          onClick={(title) => setIsActive(title)}
          isActive={Boolean(isActive === "Outils")}
          maxHeight={Boolean(skills.tools.length > 3)}
        />
      </div>
    </section>
  );
}
