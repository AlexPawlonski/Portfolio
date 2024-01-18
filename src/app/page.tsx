"use client";
import { Header, Nav, MenuFixed, Projects } from "@components/organisms";
import { ProfilImg } from "@src/components/atoms";
import { useEffect, useRef, useState } from "react";

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

  return (
    <main id="home">
      <p className="text-end lg:text-xl">{`</body>`}</p>
      <section className="flex flex-col gap-4 lg:gap-0 items-center lg:justify-center lg:flex-row-reverse lg:mt-20">
        <div className="flex flex-col items-center gap-4 lg:gap-20 lg:mx-20 xl:mx-24">
          <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-24 ">
            <ProfilImg size="lg:w-52 w-32" />
            <Header />
          </div>
          <h2 className="text-xl my-2 lg:text-4xl">“Work in progress ...”</h2>
        </div>
        <Nav />
      </section>
      <span ref={myRef} id="scrollPoint"></span>
      {!headerVisible && <MenuFixed />}
      <Projects />
    </main>
  );
}
