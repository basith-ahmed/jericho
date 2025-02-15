import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jericho - Hear the world",
  description: "Sonification of the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="bg-black flex justify-between p-4 text-white border-b border-white">
          <div>JERICHO</div>
          <div className="space-x-4">
            <Link href="/">Home</Link>
            <Link href="/discover">Discover</Link>
            <Link href="/create">Create</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
