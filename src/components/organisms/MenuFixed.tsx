import { Header, Nav } from ".";
import { ProfilImg } from "../atoms";

export default function MenuFixed() {
  return (
    <section className="flex flex-col gap-4 items-center fixed top-4 right-3 lg:left-3 xl:left-6 z-50 lg:w-48 xl:w-80">
      <ProfilImg size="w-20 lg:hidden" showText={false} />
      <div className="hidden lg:block w-full">
        <Header isFixed={true} />
      </div>
      <div className="lg:hidden">
        <Nav forceVertical={true} />
      </div>
      <div className="hidden lg:block">
        <Nav isFixed={true} />
      </div>
    </section>
  );
}
