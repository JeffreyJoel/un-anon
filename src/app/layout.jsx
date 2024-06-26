import { Inter } from "next/font/google";
import "./globals.css";
import { Web3Modal } from "@/connection";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "unanon",
  description: "unanon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`dark ${inter.className}`}>
        <Web3Modal>{children}</Web3Modal>
      </body>
    </html>
  );
}
