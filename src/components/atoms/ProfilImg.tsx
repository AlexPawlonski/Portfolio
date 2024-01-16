import Image from "next/image";
import Img from "@src/../public/photopro.webp";

interface Props {
  size?: string;
}

export default function ProfilImg({ size = "w-32" }: Props) {
  return (
    <div className={`${size} `}>
      <Image
        src={Img.src}
        alt="AlexPicture"
        width={200}
        height={200}
        className="rounded-full boxShadowsLite"
      />
        <p className="text-center mt-2 lg:-mb-6">{`</img>`}</p>
    </div>
  );
}
