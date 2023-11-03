import { Inter } from "next/font/google";
import './globals.css'
import { NavBar } from "./NavBar";
import Footer from '@/components/Footer/page';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Arcano Ingenieria",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
