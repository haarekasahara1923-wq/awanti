import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rani Awanti Bai Higher Secondary School, Gwalior",
  description: "Official website of Rani Awanti Bai Higher Secondary School, D-13,Sector -D,DDNagar,Gwalior(MP)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

