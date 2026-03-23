import React, { useRef } from "react";

const TOTAL = 18;

const Main = ({ onVideoLoaded, onAllReady }) => {
  const videos = [
    { id: 1, src: "/Videos/Clip1.webm" },
    { id: 2, src: "/Videos/Clip2.webm" },
    { id: 3, src: "/Videos/Clip3.webm" },
    { id: 4, src: "/Videos/Clip4.webm" },
    { id: 5, src: "/Videos/Clip5.webm" },
    { id: 6, src: "/Videos/Clip6.webm" },
    { id: 7, src: "/Videos/Clip7.webm" },
    { id: 8, src: "/Videos/Clip8.webm" },
    { id: 9, src: "/Videos/Clip9.webm" },
    { id: 10, src: "/Videos/Clip10.webm" },
    { id: 11, src: "/Videos/Clip11.webm" },
    { id: 12, src: "/Videos/Clip12.webm" },
    { id: 13, src: "/Videos/Clip13.webm" },
    { id: 14, src: "/Videos/Clip14.webm" },
    { id: 15, src: "/Videos/Clip15.webm" },
    { id: 16, src: "/Videos/Clip16.webm" },
    { id: 17, src: "/Videos/Clip17.webm" },
    { id: 18, src: "/Videos/Clip18.webm" },
  ];

  const names = [
    "GUNTHER", "ELD", "OLUO", "PETRA", "SASHA", "ISABEL",
    "FURLAN", "MARCO", "MOBLIT", "ERWIN", "MIKE", "NANABA",
    "ILSE", "DIETER", "DITA", "LUKE", "GELGAR", "LEVI",
  ];

  const loadedCount = useRef(0);

  const handleLoaded = () => {
    loadedCount.current += 1;
    onVideoLoaded(loadedCount.current);
    if (loadedCount.current >= TOTAL) {
      onAllReady();
    }
  };

  const chunkVideos = [];
  const chunkNames = [];
  for (let i = 0; i < videos.length; i += 6) chunkVideos.push(videos.slice(i, i + 6));
  for (let i = 0; i < names.length; i += 6) chunkNames.push(names.slice(i, i + 6));

  return (
    <div className="main-section w-full bg-black">
      {chunkVideos.map((group, i) => (
        <section key={i} className="h-screen flex items-center justify-center">
          <div className="flex gap-20">
            <div className="flex flex-col gap-6">
              {group.slice(0, 3).map((video) => (
                <video
                  key={video.id}
                  className="lg:w-[30vw] lg:h-[30vh] md:w-[28vw] md:h-[22vh] w-[28vw] h-[16vh] object-cover"
                  src={video.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  onLoadedData={handleLoaded}
                />
              ))}
            </div>

            <div className="flex flex-col items-center gap-4 lg:text-[2vw] md:text-[3vw] text-[3vw] justify-center text-gray-300 font-[Harmond-SemiBoldCondensed]">
              {chunkNames[i].map((name, index) => (
                <h1 key={index}>{name}</h1>
              ))}
            </div>

            <div className="flex flex-col gap-6">
              {group.slice(3, 6).map((video) => (
                <video
                  key={video.id}
                  className="lg:w-[30vw] lg:h-[30vh] md:w-[28vw] md:h-[22vh] w-[28vw] h-[16vh] object-cover"
                  src={video.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  onLoadedData={handleLoaded}
                />
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Main;