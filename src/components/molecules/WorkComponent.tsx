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
    <div className="bg-drakBlue/65 bg-opacity-40 flex flex-col gap-4 rounded-xl p-5">
      <div className="flex flex-col gap-2">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <Image
              src={work.img.src}
              alt="Work-picture"
              width={200}
              height={200}
              className="w-20 rounded-sm lg:w-28"
            />
            <div className="flex flex-col gap-2">
              <h2 className="text-blueReact textShadowsBlue text-xl lg:text-3xl">
                {work.title}
              </h2>
              <div className="flex items-center gap-4 lg:text-2xl">
                <a
                  href={work.linkWork}
                  className="textAnnimColor boxShadowRainbowLinkHover flex transform items-center gap-2 transition-all hover:scale-105"
                >
                  {work.company}
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="mb-[1px] ml-2 text-xs lg:mb-[2px] lg:text-base"
                  />
                </a>
                <h4 className="text-redReact text-sm lg:text-xl">
                  ({work.type})
                </h4>
              </div>
            </div>
          </div>
          <h4 className="mt-1 hidden justify-self-end text-sm xl:block lg:text-2xl">
            {work.date.start} - {work.date.end}
          </h4>
        </div>
        <h4 className="justify-self-end text-sm xl:hidden lg:text-xl">
          {work.date.start} - {work.date.end}
        </h4>
      </div>
      <ShowMore maxHeight={true}>{work.desc}</ShowMore>
      <div className="textAnnimColor flex flex-wrap justify-start gap-x-4 text-sm lg:text-xl">
        {work.skills.map((skill, key) => (
          <h3 key={key} className="min-w-max">{`</${skill}>`}</h3>
        ))}
      </div>
    </div>
  );
}
