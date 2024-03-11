"use client";

import { classNames } from "@src/utils";
import { useState } from "react";

interface Props {
  children: JSX.Element;
  maxHeight?: boolean;
}

export default function ShowMore({ children, maxHeight }: Props) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <div
        className={classNames(
          isActive ? "max-h-none" : "max-h-52 lg:max-h-none",
          "lg:text-start overflow-hidden transition-all"
        )}
        style={{
          transition: "max-height 0.5s ease",
        }}
      >
        {children}
      </div>
      {maxHeight && (
        <div
          className="flex items-center w-full gap-6 mt-2 cursor-pointer lg:hidden"
          onClick={() => setIsActive((old) => !old)}
        >
          <span className="border-b-4 w-full"></span>
          <p className="min-w-max">
            {isActive ? "Afficher moin ..." : "Afficher plus ..."}
          </p>
          <span className="border-b-4 w-full"></span>
        </div>
      )}
    </div>
  );
}
