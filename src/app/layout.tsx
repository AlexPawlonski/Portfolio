import "@styles/index.css";
import "@styles/index.scss";

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
      <body className="px-5 lg:px-8 xl:px-10 2xl:max-w-[80%] xl:max-w-full mx-auto">
        {children}
        <div className="fixed top-0 inset-0 overflow-hidden">
          <div className="jumbo absolute -inset-[10px] opacity-50"></div>
        </div>
      </body>
    </html>
  );
}
