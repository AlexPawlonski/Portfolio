import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import { ProfilImg } from "@src/components/atoms";
import { Nav } from "@src/components/organisms";
import "@styles/index.css";
import "@styles/index.scss";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-jetbrains",
  display: "swap",
});

const BASE_URL = "https://alexpawlonski.fr";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Alex Pawlonski — Développeur Full-stack Spécialisé Front-end",
  description:
    "Portfolio d'Alex Pawlonski, développeur Full-stack spécialisé Front-end basé en France. Expert React.js, Next.js, TypeScript. 4+ ans d'expérience sur des projets SaaS et e-commerce headless.",
  keywords: [
    "Alex Pawlonski",
    "développeur front-end",
    "développeur full-stack",
    "React.js",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "portfolio développeur",
    "développeur France",
  ],
  authors: [{ name: "Alex Pawlonski", url: BASE_URL }],
  creator: "Alex Pawlonski",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: BASE_URL,
    siteName: "Alex Pawlonski — Portfolio",
    title: "Alex Pawlonski — Développeur Full-stack Spécialisé Front-end",
    description:
      "Portfolio d'Alex Pawlonski, développeur Full-stack spécialisé Front-end. Expert React.js, Next.js, TypeScript.",
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: "Alex Pawlonski — Développeur Full-stack Spécialisé Front-end",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Pawlonski — Développeur Full-stack Spécialisé Front-end",
    description:
      "Portfolio d'Alex Pawlonski, développeur Full-stack spécialisé Front-end.",
    images: ["/og"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <html lang="fr" className={jetBrainsMono.variable}>
      <body className="font-mono font-bold relative mx-auto px-5 lg:px-8 xl:max-w-full xl:px-10 2xl:max-w-[85%]">
        {children}
        <footer className="-mt-16 flex justify-between pb-4 text-left lg:text-right">
          <div className="hidden items-center gap-4 lg:flex">
            <ProfilImg size="w-12" showText={false} isFixed={true} />
            <Nav isFixed={true} />
            <p className="text-center text-base">{`</nav>`}</p>
          </div>
          <div>
            <p>Alex pawlonski</p>
            <p>Copyright (c) 2026</p>
          </div>
        </footer>
        <div className="fixed inset-0 top-0 overflow-hidden">
          <div className="jumbo absolute -inset-[10px] opacity-50"></div>
        </div>
      </body>
    </html>
  );
}
