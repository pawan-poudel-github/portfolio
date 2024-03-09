
import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pawan Poudel",
  description: "A passionate full-stack web developer with a focus on crafting engaging and functional web applications.",
  keywords:"pawan,pawan poudel"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
    <div className="min-h-screen w-full bg-dot-white/[0.1] relative ">

        {children}
        </div>
        </body>
    </html>
  );
}
