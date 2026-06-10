import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gerry Abel Al Ashby | Portfolio",
  description:
    "Portfolio of Gerry Abel Al Ashby — D3 Teknologi Informasi graduate from Universitas Brawijaya. UI/UX, Backend & Frontend Developer.",
  keywords: [
    "Gerry Abel Al Ashby",
    "Portfolio",
    "Web Developer",
    "UI/UX",
    "Laravel",
    "Next.js",
    "Universitas Brawijaya",
  ],
  authors: [{ name: "Gerry Abel Al Ashby" }],
  openGraph: {
    title: "Gerry Abel Al Ashby | Portfolio",
    description:
      "Portfolio of Gerry Abel Al Ashby — Web Developer, UI/UX Designer, Backend & Frontend Developer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
