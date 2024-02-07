import { Picture } from "@src/interfaces";
import Image from "next/image";

interface Props {
  img: Picture;
  onClick: (project: Picture) => void;
}
export default function ImgItem({ img, onClick }: Props) {
  return (
    <div
      className="col-span-1 w-full gap-2"
      onClick={() => onClick(img)}
    >
      <Image
        src={img.img.src}
        alt={`${img.title}-Icon`}
        width={1280}
        height={720}
        className="rounded-sm object-contain aspect-video"
      />
      {/* add glow effect on hover pc */}
      <h3 className="text-center">{img.title}</h3>
    </div>
  );
}
