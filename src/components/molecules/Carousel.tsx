import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { classNames } from "@src/utils";
import { useState, useEffect } from "react";

interface Props {
  children: JSX.Element[];
  isNav?: boolean;
}

export default function Carousel({ children, isNav = false }: Props) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? children.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === children.length - 1 ? 0 : curr + 1));

  return (
    <div className="relative w-full overflow-hidden">
      {/* main image */}
      <div
        className={classNames(!isNav ? "flex" : "flex gap-4 overflow-scroll")}
        style={!isNav ? { transform: `translateX(-${curr * 100}%)` } : {}}
      >
        {children}
      </div>
      {/* fleche des coter */}
      {!isNav && (
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <FontAwesomeIcon
            icon={faArrowLeft}
            onClick={prev}
            className="text-xl p-1"
          />
          <FontAwesomeIcon
            onClick={next}
            icon={faArrowRight}
            className="text-xl p-1 text-gray-800"
          />
        </div>
      )}

      {/* point du bas */}
      {!isNav && (
        <div className="flex items-center justify-center gap-2 mt-2">
          {children.map((_, i) => (
            <div
              key={i}
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr !== i && "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      )}
    </div>
  );
}
