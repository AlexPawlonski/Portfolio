"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  children: JSX.Element;
  maxHeight?: boolean;
  isOpen?: boolean;
  onToggle?: () => void;
}

export default function ShowMore({ children, maxHeight, isOpen, onToggle }: Props) {
  const [localIsActive, setLocalIsActive] = useState(false);

  const isActive = isOpen !== undefined ? isOpen : localIsActive;
  const handleToggle = onToggle ?? (() => setLocalIsActive((old) => !old));

  return (
    <div>
      <motion.div
        initial={false}
        animate={{ height: isActive ? "auto" : 96 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        {children}
      </motion.div>
      {maxHeight && (
        <div
          className="flex items-center w-full gap-6 mt-2 cursor-pointer"
          onClick={handleToggle}
        >
          <span className="border-b-4 w-full"></span>
          <p className="min-w-max">
            {isActive ? "Afficher moins" : "Afficher plus ..."}
          </p>
          <span className="border-b-4 w-full"></span>
        </div>
      )}
    </div>
  );
}
