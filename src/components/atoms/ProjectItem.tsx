import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Project } from "@src/interfaces";
import { classNames } from "@src/utils";
import Image from "next/image";

interface Props {
  data: Project;
  isSelected: boolean;
  onClick: () => void;
}
export default function ProjectItem({ data, isSelected, onClick }: Props) {
  return (
    <div
      onClick={() => onClick()}
      className={classNames(
        "rounded-xl relative flex flex-col overflow-hidden h-36 w-[80%] min-w-[80%] my-4 mx-1",
        isSelected && "boxShadowsWhite"
      )}
    >
      <a href={data.link.site} target="_blank">
        <FontAwesomeIcon
          icon={faLink}
          className="text-xl absolute right-2 top-2 z-10"
        />
      </a>
      <h3 className="absolute w-full px-4 bottom-0 z-10 text-2xl bg-grey-dark bg-opacity-50">
        {data.name}
      </h3>
      <Image
        src={data.picture[0].src}
        alt="ExemplePicture"
        width={1280}
        height={720}
        className="boxShadowsLite absolute top-0 z-0 w-full h-full"
      />
    </div>
  );
}
