import { Nav } from "@src/components/organisms";
import "@styles/index.css";
import "@styles/index.scss";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <html lang="fr">
      <head>
        <title>Alex Pawlonski</title>
        <meta
          name="description"
          content="Portfolio Alex pawlonski développeur Front-end"
        />
        <link rel="icon" href="/icon.png" sizes="any" />
      </head>
      <body className="px-5 lg:px-8 xl:px-10 2xl:max-w-[80%] xl:max-w-full mx-auto relative">
        {children}
        <footer className="text-left lg:text-right pb-4 -mt-16 flex justify-between">
          <div className=" items-center gap-4 hidden lg:flex">
            <Nav isFixed={true} />
            <p className="text-center text-base">{`</nav>`}</p>
          </div>

          <div>
            <p>Alex pawlonski</p>
            <p>Copyright (c) 2025</p>
          </div>
        </footer>
        <div className="fixed top-0 inset-0 overflow-hidden">
          <div className="jumbo absolute -inset-[10px] opacity-50"></div>
        </div>
      </body>
    </html>
  );
}
