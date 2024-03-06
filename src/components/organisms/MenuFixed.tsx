"use client";
import { useEffect, useState } from "react";
import { Header, Nav } from ".";
import { ProfilImg } from "../atoms";
import { classNames } from "@src/utils";

export default function MenuFixed() {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const scrollThreshold = 800;
      if (scrollY > scrollThreshold) {
        setShowComponent(true);
      } else {
        setShowComponent(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={classNames(
        !showComponent && "hidden lg:block",
        "flex flex-col gap-4 items-center fixed lg:sticky top-4 right-3 z-50 h-full"
      )}
    >
      <ProfilImg size="w-20 lg:hidden" showText={false} isFixed={true} />
      <div className="hidden lg:block w-full">
        <Header isFixed={true} />
      </div>
      <div className="lg:hidden">
        <Nav forceVertical={true} isFixed={true} />
      </div>
      <div className="hidden lg:block my-10">
        <Nav isFixed={true} />
      </div>
    </section>
  );
}
