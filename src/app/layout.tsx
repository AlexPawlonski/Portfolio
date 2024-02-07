import "@styles/index.css";
import Head from "next/head";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <html lang="fr">
      <head>
        <title>AlexPawlonski</title>
        <meta
          name="description"
          content="Portfolio Alex pawlonski développeur spécialisé React JS"
        />
        <link rel="icon" href="/icon.png" sizes="any" />
      </head>
      <body className="p-5">{children}</body>
    </html>
  );
}
