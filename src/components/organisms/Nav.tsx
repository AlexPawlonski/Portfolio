"use client";
import { NavItem } from "@components/atoms";
import {
  faHome,
  faBriefcase,
  faDisplay,
  faSchool,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Nav() {
  return (
    <nav className="flex items-center flex-col gap-4">
      <ul className="flex lg:flex-col items-center gap-4">
        <NavItem
          id={"home"}
          onClick={(id) => console.log(id)}
          icon={<FontAwesomeIcon icon={faHome} />}
        />
        <NavItem
          id={"work"}
          onClick={(id) => console.log(id)}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        />
        <NavItem
          id={"Project"}
          onClick={(id) => console.log(id)}
          icon={<FontAwesomeIcon icon={faDisplay} />}
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
    </nav>
  );
}
