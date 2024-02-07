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
    <nav className="flex items-center flex-col gap-4">
      {forceVertical && (
        <div
          className={classNames(
            "transform transition-all",
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
              forceVertical || isFixed ? "flex-col lg:flex-row lx:gap-2" : "lg:flex-col gap-4",
              "flex items-center",
              isFixed && "lg:w-full max-w-full flex-wrap justify-center"
            )}
          >
            <NavItem
              id={"home"}
              icon={<FontAwesomeIcon icon={faHome} />}
              className={classNames(isFixed && "transform scale-75")}
            />
            <NavItem
              id={"projects"}
              icon={<FontAwesomeIcon icon={faDisplay} />}
              className={classNames(isFixed && "transform scale-75")}
            />
            <NavItem
              id={"work"}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
              className={classNames(isFixed && "transform scale-75")}
            />
            <NavItem
              id={"scool"}
              icon={<FontAwesomeIcon icon={faSchool} />}
              className={classNames(isFixed && "transform scale-75")}
            />
            <NavItem
              id={"contact"}
              icon={<FontAwesomeIcon icon={faPaperPlane} />}
              className={classNames(isFixed && "transform scale-75")}
            />
          </ul>
          <p className="text-center lg:text-xl">{`</nav>`}</p>
        </>
      )}
    </nav>
  );
}
