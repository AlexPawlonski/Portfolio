"use client";
import { Header, Nav, MenuFixed, Projects } from "@components/organisms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProfilImg, Writer } from "@src/components/atoms";
import { useEffect, useMemo, useRef, useState } from "react";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const myRef: any = useRef();
  const [headerVisible, setHeaderVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setHeaderVisible(entry.isIntersecting);
    });
    observer.observe(myRef.current);
  }, []);

  const [screenWidthSize, setScreenSize] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1280
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setScreenSize(window.innerWidth);
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const pcPoint = useMemo(() => {
    return { 1024: screenWidthSize > 1024, 1280: screenWidthSize > 1280 };
  }, [screenWidthSize]);

  return (
    <main id="home" className="z-10 relative">
      <p className="absolute right-10 top-5 text-2xl">{`</body>`}</p>
      <section className="flex flex-col gap-4 lg:gap-0 items-center justify-center lg:flex-row-reverse h-screen relative">
        <div className="flex flex-col items-center gap-4 lg:gap-20 lg:mx-20 xl:mx-24">
          <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-24">
            <ProfilImg size=" xl:w-80 lg:w-52 w-32" />
            <Header />
          </div>
          <Writer
            phrases={[
              "Hi!",
              "Bienvenue sur mon PortFolio :D",
              "Work in progress...",
            ]}
          />
        </div>
        <Nav />
        <div className="absolute bottom-5 lg:bottom-20 mx-auto group">
          <a
            href={`#projects`}
            className="bg-white lg:h-20 lg:w-20 w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transform transition-all cursor-pointer relative z-20"
          >
            <FontAwesomeIcon
              icon={faArrowDown}
              className="text-grey-dark lg:text-4xl text-2xl animate-bounce mt-2 lg:mt-3"
            />
          </a>
          <div className="group-hover:opacity-100 transition-all opacity-0 imgGradient absolute top-1 left-1 z-10 w-24 h-24"></div>
        </div>
        <span ref={myRef} id="scrollPoint"></span>
      </section>
      <div className="flex w-full lg:gap-14 lg:mt-10">
        {!headerVisible && !pcPoint[1024] && <MenuFixed />}
        {pcPoint[1024] && (
          <div className="xl:w-[25%] lg:w-[30%]">
            <MenuFixed />
          </div>
        )}
        <div className="w-full mt-4">
          <Projects />
        </div>
      </div>
    </main>
  );
}
