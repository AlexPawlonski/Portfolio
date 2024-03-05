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
    <nav className="flex items-center flex-col gap-4 lg:mb-36">
      {forceVertical && (
        <div
          className={classNames(
            "transform transition-all bg-drakBlue rounded-full h-8 w-8 flex items-center justify-center ",
            isOpen && "rotate-180"
          )}
          onClick={() => setIsOpen((old) => !old)}
        >
          <FontAwesomeIcon icon={faChevronDown} className="text-xl" />
        </div>
      )}
      {(!forceVertical || isOpen) && (
        <>
          <ul
            className={classNames(
              forceVertical || isFixed
                ? "flex-col lg:flex-row lx:gap-0 gap-2"
                : "lg:flex-col gap-4",
              "flex items-center",
              isFixed && "lg:w-full max-w-full flex-wrap justify-center gap-4"
            )}
          >
            <NavItem id={"home"} icon={<FontAwesomeIcon icon={faHome} />} />
            <NavItem
              id={"projects"}
              icon={<FontAwesomeIcon icon={faDisplay} />}
            />
            <NavItem
              id={"skills"}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            />
            <NavItem id={"scool"} icon={<FontAwesomeIcon icon={faSchool} />} />
            <NavItem
              id={"contact"}
              icon={<FontAwesomeIcon icon={faPaperPlane} />}
            />
          </ul>
          <p className="text-center lg:text-xl">{`</nav>`}</p>
        </>
      )}
    </nav>
  );
}
