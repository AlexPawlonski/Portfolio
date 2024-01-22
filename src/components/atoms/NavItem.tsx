import { classNames } from "@src/utils";

interface Props {
  id: string;
  icon: JSX.Element;
  className?: string;
}

export default function ProfilImg({ id, icon, className }: Props) {
  return (
    <a
      href={`#${id}`}
      className={classNames(
        "bg-grey-light rounded-xl py-3 px-4 text-2xl boxShadowsLite cursor-pointer transform transition-all hover:scale-110",
        className
      )}
    >
      {icon}
    </a>
  );
}
