import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Earth Time",
  description: "who do you wanna be?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
    <head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#ff892b" />
  <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#ff892b" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
</head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      >
        {children}
      </body>
    </html>
  );
}
