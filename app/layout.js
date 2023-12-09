import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./header";
import Footer from "./footer";
import "app/globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "청강학원",
};

export default function RootLayout({ children }) {
  return (
    <html lang="kr">
      <body className="" style={{ fontFamily: "font" }}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap"
            rel="stylesheet"
          />

        </Head>
        
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
