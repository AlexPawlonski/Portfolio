import { Picture, Project } from "@src/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faRotateRight,
  faDisplay,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useMemo } from "react";
import { classNames } from "@src/utils";

interface Props {
  onClickBack: () => void;
  onClickForward?: () => void;
  projectSelected?: Project;
  imgSelected?: Picture;
}
export default function ProjectNav({
  onClickBack,
  onClickForward,
  projectSelected,
  imgSelected,
}: Props) {
  const history = useMemo(() => {
    if (projectSelected && !imgSelected) {
      return <>C:\Project\{projectSelected.name}</>;
    } else if (projectSelected && imgSelected) {
      return (
        <>
          \{projectSelected.name}\img\{imgSelected.title}
        </>
      );
    }
    return <>C:\Project</>;
  }, [projectSelected, imgSelected]);

  return (
    <div className="bg-drakBlue bg-opacity-40 px-4 py-2 rounded-lg flex items-center gap-4 lg:my-8 lg:gap-6 xl:gap-7">
      <div className="flex items-center gap-4 lg:gap-6 xl:gap-7">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className={classNames(
            projectSelected
              ? "cursor-pointer hover:scale-105 transform transition-all"
              : "opacity-45",
            "text-xl lg:text-2xl xl:text-4xl"
          )}
          onClick={onClickBack}
        />
        <FontAwesomeIcon
          icon={faArrowRight}
          className="text-xl lg:text-2xl xl:text-4xl opacity-45 hidden lg:block"
          onClick={onClickForward}
        />
        <FontAwesomeIcon
          icon={faRotateRight}
          className="text-xl lg:text-2xl xl:text-4xl opacity-45 hidden lg:block"
        />
      </div>
      <div className="bg-white text-grey-dark px-3 lg:py-1 lx:py-2 rounded-lg w-[90%] lg:w-full flex items-center gap-2">
        <FontAwesomeIcon
          icon={faDisplay}
          className="text-sm lg:text-lg xl:text-xl"
        />
        <FontAwesomeIcon
          icon={faChevronRight}
          className="text-xs lg:text-sm xl:text-base"
        />
        <p className="lg:text-xl xl:text-2xl truncate">{history}</p>
      </div>
    </div>
  );
}
