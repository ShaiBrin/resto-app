import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./ui/navigation";

export const metadata: Metadata = {
  title: "Ghalib's Restaurant",
  description: "BBQ Restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="w-full pl-5">
          <Navigation/>
        </div>
        <div className="pt-24 pb-20"> 
          {children}
        </div>
      </body>
    </html>
  );
}
