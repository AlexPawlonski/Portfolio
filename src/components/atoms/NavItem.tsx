import { classNames } from "@src/utils";

interface Props {
  id: string;
  icon: JSX.Element;
  className?: string;
  isActive?: boolean;
}

export default function NavItem({ id, icon, className, isActive }: Props) {
  return (
    <a
      href={`#${id}`}
      className={classNames(
        "rounded-xl p-3 flex bg-drakBlue justify-center boxShadowsLite cursor-pointer transform transition-all hover:scale-110 relative boxShadowRainbowLinkHover z-20",
        isActive && "scale-110 text-white",
        className
      )}
    >
      {icon}
    </a>
  );
}
