"use client";
interface Props {
  children: React.ReactNode;
  className: string;
}
export default function LinkCV({ children, className }: Props) {
  return (
    <a href="/CVAlexV1.pdf" target="_blank" className={className}>
      {children}
    </a>
  );
}
