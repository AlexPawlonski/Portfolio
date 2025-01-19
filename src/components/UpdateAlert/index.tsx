"use client";

import { Button } from "@public/components/ui/button";
import { cn } from "@src/app/lib/utils";
import { useState } from "react";
import LinkCV from "../atoms/LinkCV";

export function UpdateAlert() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="fixed h-screen w-screen top-0 left-0 z-10 flex items-center justify-center">
      {/* Background */}
      <div className="h-full w-full absolute bg-drakBlue opacity-45 top-0 left-0 z-0 boxShadowRainbow"></div>
      {/* PopUp */}
      <div className="bg-drakBlue rounded-md p-6 sm:w-1/2 z-20 flex flex-col gap-2 w-full mx-8">
        <h1 className="sm:text-3xl mb-4 text-blueReact textShadowsBlue text-xl">
          Attention, une nouvelle version de mon portfolio est en cours de
          développement !
        </h1>
        <h2>
          Les informations présentes sur cette version datent de plus d&apos;un an,
          mais elles sont tout de même correctes.
        </h2>
        <h3>
          En attendant la mise à jour, je vous invite à télécharger mon nouveau
          CV, qui lui, est à jour !
        </h3>
        <div className="flex flex-col gap-6 justify-center items-center my-4">
          <LinkCV className="w-fit text-2xl hover:text-redReact text-blueReact hover:underline cursor-pointer">
            Mon CV à jour ICI !
          </LinkCV>

          <Button
            onClick={() => setOpen(false)}
            className="bg-white text-drakBlue w-full hover:bg-redReact hover:text-white"
          >
            <p>Accéder au portfolio !</p>
          </Button>
        </div>
      </div>
    </div>
  );
}
