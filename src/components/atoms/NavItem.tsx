interface Props {
  id: string;
  onClick: (id: string) => void;
  icon: JSX.Element;
}

export default function ProfilImg({ id, onClick, icon }: Props) {
  return (
    <li
      className="bg-grey-light rounded-xl py-3 px-4 text-2xl boxShadowsLite cursor-pointer transform transition-all hover:scale-110"
      onClick={() => onClick(id)}
    >
      {icon}
    </li>
  );
}
