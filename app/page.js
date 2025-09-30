'use client';

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Marquee from "react-fast-marquee";

const videos = [
  {
    title: "who do you wanna be",
    thumbnail: "/thumbnails/whodoyouwannabe.png",
    url: "https://www.youtube.com/watch?v=f403q9IA-ek",
    description: "who do you wanna be",
  },
  {
    title: "save it for someone who cares (live)",
    thumbnail: "/thumbnails/saveitforsomeonewhocares.png",
    url: "https://www.youtube.com/watch?v=2qGzGRb7U8I",
    description: "save it for someone who cares (live)",
  },
  {
    title: "warm in here",
    thumbnail: "/thumbnails/warminhere.png",
    url: "https://www.youtube.com/watch?v=O8vR1YT7LeQ",
    description: "warm in here",
  },
  {
    title: "saturday night",
    thumbnail: "/thumbnails/saturdaynight.png",
    url: "https://www.youtube.com/watch?v=JETMX31zbhQ",
    description: "saturday night",
  },
  {
    title: "sneaking out",
    thumbnail: "/thumbnails/sneakingout.png",
    url: "https://www.youtube.com/watch?v=xoLmtqo6MWA",
    description: "sneaking out",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#ff892b] text-[#0e730e] font-sans relative overflow-x-hidden">

      {/* ===== Background Video (covers whole page) ===== */}
      <video
  autoPlay
  loop
  muted
  playsInline
  poster="/images/bg-poster.jpg"
  aria-hidden="true"
  className="pointer-events-none select-none fixed inset-0 w-full h-full object-cover z-0 opacity-100"
>
  <source src="/videos/background_multi_1.webm" type="video/webm" />
  <source src="/videos/background_multi_1.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>


      {/* Everything else sits above the video */}
      <div className="relative z-10">
        {/* ✅ MARQUEE (transparent so video shows behind) */}
        <div className="fixed top-0 left-0 right-0 z-50">
          <Marquee
            gradient={false}
            speed={40}
            pauseOnHover={false}
            loop={0}
            className="bg-transparent text-[#0e730e] text-lg font-bold uppercase py-2"
          >
            {Array(3).fill([
              "NEW SINGLE ",
              <a
                key="who"
                href="https://lnk.dmsmusic.co/earthtimespeelburglauriejamesross_whodoyouwannabe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2e9dd6] underline"
              >
                WHO DO YOU WANNA BE
              </a>,
            ]).flat().map((item, i) => (
              <span key={i} className="mx-6 whitespace-nowrap">
                {item}
              </span>
            ))}
          </Marquee>
        </div>

        {/* Menu button */}
        {!menuOpen && (
          <div className="fixed top-[45px] right-4 z-50">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMenuOpen(true)}
              className="hover:bg-transparent focus:outline-none focus:ring-0"
            >
              <Menu className="text-[#0e730e]" />
            </Button>
          </div>
        )}

        {/* Header (transparent now) */}
        <section className="fixed top-[20px] left-0 right-0 text-center z-40 pt-10 pb-6 px-4">
          <a
            href="https://www.instagram.com/earthtime.earth/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img
              src="/earthtimelogo.png"
              alt="Earth Time logo"
              className="w-[300px] mb-3 sm:w-[250px] md:w-[300px] lg:w-[350px] mx-auto"
            />
          </a>
        </section>

        {/* Mobile menu (overlay keeps solid orange so it’s readable) */}
        {menuOpen && (
          <div className="fixed top-0 left-0 w-full h-[250px] bg-[#ff892b] z-50 flex flex-col items-center justify-center text-[#0e730e] font-bold space-y-2">
            <div className="absolute top-4 right-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMenuOpen(false)}
                className="hover:bg-transparent focus:outline-none focus:ring-0"
              >
                <X className="text-[#0e730e]" />
              </Button>
            </div>
            <a
              href="mailto:earthtimelove@gmail.com?subject=hey%20what's%20up"
              className="block py-2 text-center text-[#2e9dd6]"
            >
              contact
            </a>
            <a
              href="https://www.instagram.com/earthtime.earth/"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 text-center text-[#2e9dd6]"
            >
              insta
            </a>
            <a
              href="https://www.youtube.com/@earthtimeearth"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 text-center text-[#2e9dd6]"
            >
              youtube
            </a>
          </div>
        )}

        {/* Thumbnails — link straight to YouTube */}
        <section className="p-8 pt-[250px]" id="work">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-6 mx-auto px-4 sm:px-8 lg:px-32 justify-items-center">
            {videos.map((video, index) => (
              <a
                key={index}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <div className="cursor-pointer">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-[75%] mx-auto h-[210px] object-cover"
                  />
                  <p className="mt-2 text-sm text-center text-[#0e730e] font-bold">
                    {video.title}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Footer (transparent now) */}
        <footer id="contact" className="p-8 text-center text-sm">
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.instagram.com/earthtime.earth/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-bold text-[#2e9dd6]"
            >
              insta
            </a>
            <a
              href="https://www.youtube.com/@earthtimeearth"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-bold text-[#2e9dd6]"
            >
              youtube
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
