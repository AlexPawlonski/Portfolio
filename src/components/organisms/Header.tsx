import { classNames } from "@src/utils";
import { ProfilImg } from "../atoms";

interface Props {
  isFixed?: boolean;
}
export default function Header({ isFixed }: Props) {
  return (
    <header className="rounded-xl w-full p-4 rainbowGlow boxShadowRainbow">
      <p className="text-end lg:text-xl text-white">
        {!isFixed ? `</header>` : `</memo>`}
      </p>
      {isFixed && (
        <ProfilImg size="w-52 lg:w-32 xl:w-52 mx-auto my-4" showText={false} />
      )}
      <div
        className={
          isFixed
            ? "flex flex-col gap-2 m-2 xl:m-4 2xl:m-6"
            : "text-center lg:text-start m-2 lg:m-6"
        }
      >
        <h1
          className={classNames(
            isFixed ? "xl:text-5xl lg:text-3xl" : "text-3xl lg:text-5xl",
            "text-blueReact textShadowsBlue"
          )}
        >
          Alex Pawlonski
        </h1>
        <h2
          className={classNames(
            isFixed
              ? "xl:text-xl lg:text-sm my-2"
              : "text-xl my-2 lg:my-4 lg:text-2xl"
          )}
        >
          Développeur Front-end
        </h2>
        <h3
          className={classNames(
            isFixed ? "flex flex-col gap-2" : "lg:text-2xl flex gap-2 text-xs"
          )}
        >
          <p>{"<Next JS />"}</p>
          <p>{"<TypeScript />"}</p> 
          <p>{"<Node JS />"}</p>
        </h3>
      </div>
    </header>
  );
}
