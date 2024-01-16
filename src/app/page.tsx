import { Header, Nav } from "@components/organisms";
import { ProfilImg } from "@src/components/atoms";

export default function Home() {
  return (
    <main>
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
    </main>
  );
}
