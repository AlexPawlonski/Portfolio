import { Work } from "@src/interfaces";
import Image from "next/image";
import { ShowMore } from "../atoms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

interface Props {
  work: Work;
}

export default function WorkComponent({ work }: Props) {
  return (
    <div className="flex flex-col gap-4 bg-drakBlue rounded-xl px-6 py-4 bg-opacity-40">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <Image
            src={work.img.src}
            alt="Work-picture"
            width={200}
            height={200}
            className="rounded-sm w-20 lg:w-28"
          />
          <div className="flex flex-col gap-2">
            <h2 className="textAnnimColor text-xl lg:text-3xl">{work.title}</h2>
            <div className="flex items-center gap-4 lg:text-2xl">
              <a href={work.linkWork} className="text-blueReact">
                {work.company}
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="ml-2 text-xs"
                />
              </a>
              <h4 className="text-sm text-redReact">({work.type})</h4>
            </div>
          </div>
        </div>
        <h4 className="text-sm lg:text-lg">
          {work.date.start} - {work.date.end} ({work.date.time})
        </h4>
      </div>
      <ShowMore maxHeight={true}>
        <>
          {work.desc.map((text, key) => (
            <p key={key} className="min-h-4 lg:text-lg">
              {text}
            </p>
          ))}
        </>
      </ShowMore>
      <div className="flex justify-start flex-wrap gap-x-4 textAnnimColor text-sm lg:text-xl">
        {work.skills.map((skill, key) => (
          <h3 key={key} className="min-w-max">{`</${skill}>`}</h3>
        ))}
      </div>
    </div>
  );
}
