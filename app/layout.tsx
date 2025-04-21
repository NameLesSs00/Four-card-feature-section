import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "its time to use some animation",
  description: "Omg why writing code is so hard now days ):",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white">
      <body 
      >
        {children}
      </body>
    </html>
  );
}
