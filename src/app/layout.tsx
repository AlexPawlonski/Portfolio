import "@styles/index.css";
import Head from "next/head";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <html>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="" />
        <title>AlexPawlonski</title>
      </Head>
      <body className="p-5">{children}</body>
    </html>
  );
}
