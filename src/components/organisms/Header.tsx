export default function Header() {
  return (
    <header className="flex flex-col items-center gap-4">
      <section className="bg-grey-light rounded-xl w-full p-4 testBoxShadows">
        <p className="text-end lg:text-xl">{`</header>`}</p>
        <div className="text-center lg:text-start m-2 lg:m-6">
          <h1 className="text-3xl lg:text-5xl text-blueReact textShadowsBlue">Alex Pawlonski</h1>
          <h2 className="text-xl my-2 lg:my-4 lg:text-2xl">Développeur Full-Stack</h2>
          <h3 className="lg:text-2xl">{"<Node JS /> <React JS/> <TypeScript />"}</h3>
        </div>
      </section>
    </header>
  );
}
