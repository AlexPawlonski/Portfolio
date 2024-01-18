"use client";
import { NavItem } from "@components/atoms";
import {
  faHome,
  faBriefcase,
  faDisplay,
  faSchool,
  faPaperPlane,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { classNames } from "@src/utils";
import { useState } from "react";

interface Props {
  forceVertical?: boolean;
}

export default function Nav({ forceVertical = false }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center flex-col gap-4">
      {forceVertical && (
        <div
          className={classNames(
            "transform transition-all",
            isOpen && "rotate-180"
          )}
          onClick={() => setIsOpen((old) => !old)}
        >
          <FontAwesomeIcon icon={faChevronDown} className="text-xl mt-2" />
        </div>
      )}
      {(!forceVertical || isOpen) && (
        <>
          <ul
            className={classNames(
              forceVertical ? "flex-col lg:flex-row" : "lg:flex-col",
              "flex items-center gap-4"
            )}
          >
            <NavItem
              id={"home"}
              onClick={(id) => console.log(id)}
              icon={<FontAwesomeIcon icon={faHome} />}
            />
            <NavItem
              id={"projects"}
              onClick={(id) => console.log(id)}
              icon={<FontAwesomeIcon icon={faDisplay} />}
            />
            <NavItem
              id={"work"}
              onClick={(id) => console.log(id)}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            />
            <NavItem
              id={"scool"}
              onClick={(id) => console.log(id)}
              icon={<FontAwesomeIcon icon={faSchool} />}
            />
            <NavItem
              id={"contact"}
              onClick={(id) => console.log(id)}
              icon={<FontAwesomeIcon icon={faPaperPlane} />}
            />
          </ul>
          <p className="text-center lg:text-xl">{`</nav>`}</p>
        </>
      )}
    </nav>
  );
}
