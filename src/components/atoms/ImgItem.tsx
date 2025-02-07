import { Picture } from "@src/interfaces";
import { classNames } from "@src/utils";
import Image from "next/image";

interface Props {
  img: Picture;
  onClick: (project: Picture) => void;
}
export default function ImgItem({ img, onClick }: Props) {
  return (
    <div className="p-2 cursor-pointer w-1/2" onClick={() => onClick(img)}>
      <Image
        src={img.img.src}
        alt={`${img.title}-Icon`}
        width={1280}
        height={720}
        className={classNames(
          "rounded-sm object-contain ",
          !img.isMobile && "aspect-video"
        )}
      />
      {/* add glow effect on hover pc */}
      <h3 className="text-center capitalize lg:text-xl xl:text-2xl mt-4">{img.title}</h3>
    </div>
  );
}
