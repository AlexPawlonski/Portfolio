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
        "rounded-xl py-3 px-4 text-2xl boxShadowsLite cursor-pointer transform transition-all hover:scale-110 relative rainbowGlow boxShadowRainbowHover z-20",
        className
      )}
    >
      {icon}
    </a>
  );
}
