"use client";
import { useEffect, useState } from "react";
import { Header, Nav } from ".";
import { ProfilImg } from "../atoms";
import { classNames } from "@src/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

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
        "flex flex-col items-center fixed lg:sticky bottom-4 lg:top-4 right-3 z-50 lg:h-full"
      )}
    >
      <div className="hidden lg:block w-full">
        <Header isFixed={true} />
      </div>
      <div className="lg:hidden">
        <Nav forceVertical={true} isFixed={true} />
      </div>
      <div className="hidden lg:block mt-10 mb-2">
        <Nav isFixed={true} />
      </div>
      <ProfilImg size="w-20 lg:hidden" showText={false} isFixed={true} />
      <p className="text-center lg:text-xl">{`</nav>`}</p>
    </section>
  );
}
