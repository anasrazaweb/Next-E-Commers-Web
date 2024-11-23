import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navabr/Navbar";
import { AddCardContextProvider } from "@/context/ADDTOCARD/AddCardContext";
import Footer from "../app/footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AddCardContextProvider>
          <Navbar />
          {children}
          <Footer />
        </AddCardContextProvider>
      </body>
    </html>
  );
}
