import "./globals.css";

import { Footer, NavBar } from "@components";

export const metadata = {
  title: "Go Motors",
  description: "Discover the world's leading car showcase platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
