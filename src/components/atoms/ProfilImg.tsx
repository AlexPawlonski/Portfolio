import Image from "next/image";
import Img from "@src/../public/photopro.webp";
import { classNames } from "@src/utils";

interface Props {
  size?: string;
  showText?: boolean;
  isFixed?: boolean;
}

export default function ProfilImg({
  size = "w-32",
  showText = true,
  isFixed = false,
}: Props) {
  return (
    <div className={`${size} relative`}>
      <Image
        src={Img.src}
        alt="AlexPicture"
        width={200}
        height={200}
        className={classNames("rounded-full relative z-20", isFixed ? "boxShadows" : "boxShadowsLite")}
      />
      {!isFixed && (
        <div className="imgGradient absolute top-0 lg:top-5 lg:left-5 left-3 z-10 xl:w-[190px] lg:w-[120px] w-[100px] xl:h-[190px] lg:h-[120px] h-[100%]"></div>
      )}

      {showText && (
        <p className="text-center lg:text-xl mt-2 lg:mt-6 lg:-mb-6">{`</img>`}</p>
      )}
    </div>
  );
}
