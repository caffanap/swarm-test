import type { Metadata } from "next";
import "./globals.css";
import "./fonts.css";
import Navbar from "@/components/base/navbar";
import Footer from "@/components/base/footer";

export const metadata: Metadata = {
  title: "SWARM AI",
  description: "An AI-powered platform to help you manage and analyze your data effectively.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Navbar />
        <main className="min-h-screen w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
