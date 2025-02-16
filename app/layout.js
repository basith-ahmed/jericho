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
  title: "Jericho - Hear the Universe",
  description: "Sonification of the Universe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik+Glitch&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Genos:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <script src="https://www.youtube.com/iframe_api"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-[100vh] bg-black relative`}
      >
        <nav className="bg-black/50 backdrop-blur-md flex justify-between p-4 px-8 text-white border-b border-white/10 absolute top-0 left-0 right-0 z-50">
          <div className="font-bold tracking-widest text-2xl">JERICHO</div>
          <div className="space-x-8 flex items-center ">
            <Link href="/">Home</Link>
            <Link href="/discover">Discover</Link>
            <Link href="/create">Create</Link>
          </div>
        </nav>
        <main className="flex-1 h-full">{children}</main>
      </body>
    </html>
  );
}
