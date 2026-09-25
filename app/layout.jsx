import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

// Variable font: one file covers every weight the site uses
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-jetbrainsMono",
});

const SITE_URL = "https://kt-portfolio-nu.vercel.app";
const DESCRIPTION =
  "Portfolio of KyungTae (KT) Kim, a Computer Science student at USC: resume, projects, and C++ games you can play in the browser.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "KT Portfolio",
    template: "%s | KT Portfolio",
  },
  description: DESCRIPTION,
  keywords: [
    "KyungTae Kim",
    "KT Kim",
    "USC",
    "Computer Science",
    "Software Engineer",
    "Portfolio",
    "C++",
    "Game Development",
    "WebAssembly",
    "Next.js",
  ],
  authors: [{ name: "KyungTae Kim", url: SITE_URL }],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "KT Portfolio",
    title: "KT Portfolio",
    description: DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "KT Portfolio",
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#990000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
      </body>
    </html>
  );
}
