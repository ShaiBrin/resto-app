import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./ui/navigation";
import Footer from "./ui/footer";

export const metadata: Metadata = {
  title: "JAGY's SMOKEHOUSE BBQ & GRILLADE",
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
        <div className="w-full">
          <Navigation />
        </div>
        <div>{children}</div>
        <div className="pt-10 px-4 md:px-0">
          <Footer />
        </div>
      </body>
    </html>
  );
}