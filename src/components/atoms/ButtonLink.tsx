interface Props {
  icon: JSX.Element;
  text: string;
  href: string;
}
export default function ButtonLink({ icon, text, href }: Props) {
  return (
    <a href={href} target="_blank" className="flex items-center gap-2 text-xl lg:text-2xl xl:text-4xl text-white">
      {icon} <p>{text}</p>
    </a>
  );
}
