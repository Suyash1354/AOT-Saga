import React, { useEffect, useRef, useState } from "react";

const FIRST_BATCH = 6; // videos that must load before hiding the loader

const Main = ({ onVideoLoaded, onFirstBatchReady }) => {
  const videos = [
    { id: 1, src: "/Videos/Clip1.mp4" },
    { id: 2, src: "/Videos/Clip2.mp4" },
    { id: 3, src: "/Videos/Clip3.mp4" },
    { id: 4, src: "/Videos/Clip4.mp4" },
    { id: 5, src: "/Videos/Clip5.mp4" },
    { id: 6, src: "/Videos/Clip6.mp4" },
    { id: 7, src: "/Videos/Clip7.mp4" },
    { id: 8, src: "/Videos/Clip8.mp4" },
    { id: 9, src: "/Videos/Clip9.mp4" },
    { id: 10, src: "/Videos/Clip10.mp4" },
    { id: 11, src: "/Videos/Clip11.mp4" },
    { id: 12, src: "/Videos/Clip12.mp4" },
    { id: 13, src: "/Videos/Clip13.mp4" },
    { id: 14, src: "/Videos/Clip14.mp4" },
    { id: 15, src: "/Videos/Clip15.mp4" },
    { id: 16, src: "/Videos/Clip16.mp4" },
    { id: 17, src: "/Videos/Clip17.mp4" },
    { id: 18, src: "/Videos/Clip18.mp4" },
  ];

  const names = [
    "GUNTHER", "ELD", "OLUO", "PETRA", "SASHA", "ISABEL",
    "FURLAN", "MARCO", "MOBLIT", "ERWIN", "MIKE", "NANABA",
    "ILSE", "DIETER", "DITA", "LUKE", "GELGAR", "LEVI",
  ];

  // Track which lazy videos (index >= 6) are visible / should load
  const [visibleVideos, setVisibleVideos] = useState(
    () => new Set(videos.slice(0, FIRST_BATCH).map((v) => v.id))
  );

  // How many of the first-batch videos have fired onLoadedData
  const firstBatchLoaded = useRef(0);

  // Refs for lazy video elements (ids 7–18)
  const lazyRefs = useRef({});

  // ── IntersectionObserver for lazy videos ──────────────────────────────────
  useEffect(() => {
    const observers = [];

    videos.slice(FIRST_BATCH).forEach((video) => {
      const el = lazyRefs.current[video.id];
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleVideos((prev) => new Set([...prev, video.id]));
            obs.disconnect(); // load once, never unload
          }
        },
        { rootMargin: "200px" } // start loading 200px before it enters viewport
      );

      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []); // run once on mount

  // ── Handler for first-batch videos ────────────────────────────────────────
  const handleFirstBatchLoad = () => {
    firstBatchLoaded.current += 1;
    onVideoLoaded(firstBatchLoaded.current); // update loader progress

    if (firstBatchLoaded.current >= FIRST_BATCH) {
      onFirstBatchReady(); // hide loader
    }
  };

  // ── Chunk helpers ──────────────────────────────────────────────────────────
  const chunkVideos = [];
  const chunkNames = [];
  for (let i = 0; i < videos.length; i += 6) chunkVideos.push(videos.slice(i, i + 6));
  for (let i = 0; i < names.length; i += 6) chunkNames.push(names.slice(i, i + 6));

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className="main-section w-full bg-black">
      {chunkVideos.map((group, i) => (
        <section
          key={i}
          className="h-screen flex items-center justify-center"
        >
          <div className="flex gap-20">
            {/* LEFT */}
            <div className="flex flex-col gap-6">
              {group.slice(0, 3).map((video) => {
                const isEager = video.id <= FIRST_BATCH;
                const isVisible = visibleVideos.has(video.id);

                return (
                  <div
                    key={video.id}
                    className="lg:w-[22vw] lg:h-[30vh] md:w-[28vw] md:h-[22vh] w-[28vw] h-[16vh] bg-black"
                    ref={isEager ? null : (el) => { lazyRefs.current[video.id] = el; }}
                  >
                    {isVisible && (
                      <video
                        className="w-full h-full object-cover"
                        src={video.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        onLoadedData={isEager ? handleFirstBatchLoad : undefined}
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* CENTER NAMES */}
            <div className="flex flex-col items-center gap-4 lg:text-[2vw] md:text-[3vw] text-[3vw] justify-center text-gray-300 font-[Harmond-SemiBoldCondensed]">
              {chunkNames[i].map((name, index) => (
                <h1 key={index}>{name}</h1>
              ))}
            </div>

            {/* RIGHT */}
            <div className="flex flex-col gap-6">
              {group.slice(3, 6).map((video) => {
                const isEager = video.id <= FIRST_BATCH;
                const isVisible = visibleVideos.has(video.id);

                return (
                  <div
                    key={video.id}
                    className="lg:w-[22vw] lg:h-[30vh] md:w-[28vw] md:h-[22vh] w-[28vw] h-[16vh] bg-black"
                    ref={isEager ? null : (el) => { lazyRefs.current[video.id] = el; }}
                  >
                    {isVisible && (
                      <video
                        className="w-full h-full object-cover"
                        src={video.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        onLoadedData={isEager ? handleFirstBatchLoad : undefined}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Main;