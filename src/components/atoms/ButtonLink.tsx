import { Project } from "@src/interfaces";

interface Props {
  icon: JSX.Element;
  text: string;
  href: string;
}
export default function ButtonLink({ icon, text, href }: Props) {
  return (
    <a href={href} target="_blank" className="flex items-center gap-2 bg-white rounded-full px-4 text-xl text-grey-dark">
      {icon} <p>{text}</p>
    </a>
  );
}
