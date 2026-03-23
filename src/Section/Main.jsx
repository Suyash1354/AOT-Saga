import React from "react";

const Main = () => {
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
    "GUNTHER",
    "ELD",
    "OLUO",
    "PETRA",
    "SASHA",
    "ISABEL",
    "FURLAN",
    "MARCO",
    "MOBLIT",
    "ERWIN",
    "MIKE",
    "NANABA",
    "ILSE",
    "DIETER",
    "DITA",
    "LUKE",
    "GELGAR",
    "LEVI",
  ];

  // chunk into groups of 6
  const chunkVideos = [];
  const chunkNames = [];

  for (let i = 0; i < videos.length; i += 6) {
    chunkVideos.push(videos.slice(i, i + 6));
  }

  for (let i = 0; i < names.length; i += 6) {
    chunkNames.push(names.slice(i, i + 6));
  }

  return (
    <div className="main-section w-full bg-[black]">
      {chunkVideos.map((group, i) => (
        <section
          key={i}
          className="h-screen  flex items-center justify-center"
        >
          <div className="flex gap-20 ">
            {/* LEFT SIDE */}
            <div className="flex flex-col gap-6">
              {group.slice(0, 3).map((video) => (
                <video
                  key={video.id}
                  className="lg:w-[22VW] lg:h-[30vh]  md:w-[28vw] md:h-[22vh]  w-[28vw] h-[16vh]  object-cover"
                  src={video.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ))}
            </div>

           <div className="flex flex-col items-center gap-4 lg:text-[2vw] md:text-[3vw] text-[3vw] justify-center text-gray-300 font-[Harmond-SemiBoldCondensed]">
              {chunkNames[i].map((name, index) => (
                <h1 key={index}>{name}</h1>
              ))}
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col gap-6">
              {group.slice(3, 6).map((video) => (
                <video
                  key={video.id}
                  className="lg:w-[22VW] lg:h-[30vh] md:w-[28vw] md:h-[22vh] w-[28vw] h-[16vh] object-cover"
                  src={video.src}
                  autoPlay
                  loop
                  muted
                  playsInline
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
