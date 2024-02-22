import type { Metadata } from "next";
import "./ui/globals.css";

export const metadata: Metadata = {
  title: "Winwise",
  description: "Analisis de datos lol",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
