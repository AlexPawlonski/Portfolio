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
  isFixed?: boolean;
}

export default function Nav({ forceVertical = false, isFixed = false }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={classNames(
        "flex items-center flex-col gap-4",
        !isFixed && "lg:mb-36"
      )}
    >
      {(!forceVertical || isOpen) && (
        <>
          <ul
            className={classNames(
              "flex gap-2 rainbowGlow",
              forceVertical || isFixed
                ? "flex-col lg:flex-row lx:gap-0 text-2xl"
                : "lg:flex-col text-2xl"
            )}
          >
            <NavItem id={"home"} icon={<FontAwesomeIcon icon={faHome} />} />
            <NavItem
              id={"projects"}
              icon={<FontAwesomeIcon icon={faDisplay} />}
            />
            <NavItem id={"work"} icon={<FontAwesomeIcon icon={faSchool} />} />
            <NavItem
              id={"skills"}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            />
            <NavItem
              id={"contact"}
              icon={<FontAwesomeIcon icon={faPaperPlane} />}
            />
          </ul>
          {!isFixed && <p className="text-center text-base">{`</nav>`}</p>}
        </>
      )}
      {forceVertical && (
        <div
          className={classNames(
            "transform transition-all bg-drakBlue rounded-full h-8 w-8 flex items-center justify-center mb-2",
            !isOpen && "rotate-180"
          )}
          onClick={() => setIsOpen((old) => !old)}
        >
          <FontAwesomeIcon icon={faChevronDown} className="text-xl" />
        </div>
      )}
    </nav>
  );
}
