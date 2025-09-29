'use client';

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
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
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <main className="min-h-screen bg-[#ff892b] text-[#0e730e] font-sans relative overflow-x-hidden">

      {/* ✅ MARQUEE */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Marquee
          gradient={false}
          speed={40}
          pauseOnHover={false}
          loop={0}
          className="bg-[#ff892b] text-[#0e730e] text-lg font-bold uppercase py-2"
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

      <section className="fixed top-[20px] left-0 right-0 bg-[#ff892b] text-center z-40 pt-10 pb-6 px-4">
      <a
  href="https://www.instagram.com/earthtime.earth/"
  target="_blank"
  rel="noopener noreferrer"
  className="block"
>
  <motion.img
    src="/earthtimelogo.png"
    alt="Earth Time logo"
    className="w-[300px] mb-3 sm:w-[250px] md:w-[300px] lg:w-[350px] mx-auto"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  />
</a>

       <div className="space-x-4">

</div>
      </section>

      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-[250px] bg-[#ff892b] z-50 flex flex-col items-center justify-center text-[#0e730e] font-bold space-y-2">
          <div className="absolute top-4 right-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMenuOpen(!menuOpen)}
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

      <section className="p-8 pt-[250px]" id="work">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-6 mx-auto px-4 sm:px-8 lg:px-32">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              className="cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedVideo(video)}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-[75%] mx-auto h-[210px] object-cover"
              />
              <p className="mt-2 text-sm text-center text-[#0e730e] font-bold">
                {video.title}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 backdrop-blur-sm bg-black/10 transition-all duration-300 ease-in-out flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              className="bg-[#ff892b] p-2 rounded-lg overflow-hidden max-w-3xl w-full relative text-[#0e730e]"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end">
                <Button variant="ghost" size="icon" onClick={() => setSelectedVideo(null)}>
                  <X className="text-[#0e730e]" />
                </Button>
              </div>
              <div className="aspect-video mb-4">
                {(() => {
                  const { url } = selectedVideo;
                  let embedUrl = "";

                  if (url.includes("youtu.be")) {
                    const id = url.split("youtu.be/")[1].split("?")[0];
                    embedUrl = `https://www.youtube.com/embed/${id}`;
                  } else if (url.includes("youtube.com/shorts")) {
                    const id = url.split("shorts/")[1].split("?")[0];
                    embedUrl = `https://www.youtube.com/embed/${id}`;
                  } else if (url.includes("youtube.com/watch")) {
                    const id = new URL(url).searchParams.get("v");
                    embedUrl = `https://www.youtube.com/embed/${id}`;
                  } else if (url.includes("tiktok.com")) {
                    const id = url.split("/video/")[1].split("?")[0];
                    embedUrl = `https://www.tiktok.com/embed/${id}`;
                  }

                  return (
                    <iframe
                      src={embedUrl}
                      title={selectedVideo.title}
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  );
                })()}
              </div>

              {selectedVideo.description && (
                <p className="text-center text-sm text-[#0e730e] font-semibold mb-2">
                  {selectedVideo.description}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer id="contact" className="p-8 text-center text-sm bg-[#ff892b]">
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
    </main>
  );
}
