import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./header";
import Footer from "./footer";
import "app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "청강학원",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#1a1e2b]" style={{ fontFamily: "font" }}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
