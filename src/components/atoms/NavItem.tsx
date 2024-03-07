import { classNames } from "@src/utils";

interface Props {
  id: string;
  icon: JSX.Element;
  className?: string;
}

export default function NavItem({ id, icon, className }: Props) {
  return (
    <a
      href={`#${id}`}
      className={classNames(
        "rounded-xl p-4 flex bg-drakBlue justify-center boxShadowsLite cursor-pointer transform transition-all hover:scale-110 relative boxShadowRainbowHover z-20 ",
        className
      )}
    >
      {icon}
    </a>
  );
}
