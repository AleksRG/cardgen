import "./globals.css";
import { Metadata } from "next";
import { Audiowide, Bruno_Ace } from "next/font/google";

const audiowide = Audiowide({
  weight: "400",
  style: "normal",

  preload: false,
});
const bruno = Bruno_Ace({
  weight: "400",
  style: "normal",
  preload: false,
});

const title = "Card Generator";
const description = "The best Card Generator Ever";
export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: "summary_large_image",
    creator: "@AlexRG",
  },
  metadataBase: new URL("https://cardgen.vercel.app/"),
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={bruno.className}>{children}</body>
    </html>
  );
}
