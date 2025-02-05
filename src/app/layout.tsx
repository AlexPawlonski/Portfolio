import { ProfilImg } from "@src/components/atoms";
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
      <body className="relative mx-auto px-5 lg:px-8 xl:max-w-full xl:px-10 2xl:max-w-[80%]">
        {children}
        <footer className="-mt-16 flex justify-between pb-4 text-left lg:text-right">
          <div className="hidden items-center gap-4 lg:flex">
            <ProfilImg size="w-12" showText={false} isFixed={true} />
            <Nav isFixed={true} />
            <p className="text-center text-base">{`</nav>`}</p>
          </div>
          <div>
            <p>Alex pawlonski</p>
            <p>Copyright (c) 2025</p>
          </div>
        </footer>
        <div className="fixed inset-0 top-0 overflow-hidden">
          <div className="jumbo absolute -inset-[10px] opacity-50"></div>
        </div>
      </body>
    </html>
  );
}
