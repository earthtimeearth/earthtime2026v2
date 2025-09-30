// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "Earth Time",
  description: "who do you wanna be?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#ff892b" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#ff892b" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-full bg-[#ff892b]`}>
        {/* Site-wide background video (behind everything) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/bg-poster.jpg"
          aria-hidden="true"
          className="pointer-events-none select-none fixed inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/background_multi_1.webm" type="video/webm" />
          <source src="/videos/background_multi_1.mp4" type="video/mp4" />
        </video>

        {/* All page content above the video */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
