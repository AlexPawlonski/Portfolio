"use client";

import { classNames } from "@src/utils";
import { useState } from "react";
import { motion } from "framer-motion";

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
          "overflow-hidden",
          isActive ? "max-h-full" : "max-h-24"
        )}
      >
        {children}
      </div>
      {maxHeight && !isActive && (
        <div
          className="flex items-center w-full gap-6 mt-2 cursor-pointer"
          onClick={() => setIsActive((old) => !old)}
        >
          <span className="border-b-4 w-full"></span>
          <p className="min-w-max">Afficher plus ...</p>
          <span className="border-b-4 w-full"></span>
        </div>
      )}
    </div>
  );
}
