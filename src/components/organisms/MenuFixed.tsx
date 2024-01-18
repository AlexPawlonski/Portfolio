import { Header, Nav } from ".";
import { ProfilImg } from "../atoms";

export default function MenuFixed() {
  return (
    <section className="flex flex-col items-center  fixed top-4 left-3">
      <ProfilImg size="w-20" />
      {/* <Header /> */}
      <Nav forceVertical={true} />
    </section>
  );
}
