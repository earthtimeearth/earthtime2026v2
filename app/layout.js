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
        {/* Keep iOS/Android browser chrome orange */}
        <meta name="theme-color" content="#ff892b" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#ff892b" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>

      {/* Orange fallback behind the video */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-full bg-[#ff892b]`}>
        {/* Background video (behind everything) */}
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

        {/* Page content above video */}
        <div className="relative z-10">{children}</div>

        {/* Solid orange bottom bar (safe-area painter) */}
        <div
          className="fixed left-0 right-0 bottom-0 z-40 bg-[#ff892b] pointer-events-none"
          style={{ height: "calc(env(safe-area-inset-bottom) + 12px)" }}
        />
      </body>
    </html>
  );
}
