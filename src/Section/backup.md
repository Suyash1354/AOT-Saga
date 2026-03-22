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
    "GUNTHER", "ELD", "OLUO", "PETRA", "SASHA", "ISABEL",
    "FURLAN", "MARCO", "MOBLIT", "ERWIN", "MIKE", "NANABA",
    "ILSE", "DIETER", "DITA", "LUKE", "GELGAR", "LEVI"
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
    <div className="w-full">
      {chunkVideos.map((group, i) => (
        <section
          key={i}
          className="h-screen bg-black flex items-center justify-center"
        >
          <div className="grid grid-cols-3 gap-12 items-center">

            {/* LEFT */}
            <div className="flex flex-col gap-6">
              {group.slice(0, 3).map((video) => (
                <video
                  key={video.id}
                  className="w-[300px] h-[160px] object-cover"
                  src={video.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ))}
            </div>

            {/* CENTER TEXT */}
            <div className="flex flex-col items-center gap-4 text-gray-300 italic">
              {chunkNames[i].map((name, index) => (
                <h1 key={index} className="tracking-widest">
                  {name}
                </h1>
              ))}
            </div>

            {/* RIGHT */}
            <div className="flex flex-col gap-6">
              {group.slice(3, 6).map((video) => (
                <video
                  key={video.id}
                  className="w-[300px] h-[160px] object-cover"
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

  

  const chunkvideo = [];

  for (let i = 0; i < videos.length; i += 6) {
    chunkvideo.push(videos.slice(i, i + 6));
  }

 

  return (
    <div className="w-full">
      {chunkvideo.map((group, i) => (
        <section className="h-screen flex items-center justify-center bg-amber-400">

          
          <div className="grid grid-cols-2 gap-x-100 gap-y-6">
            {group.map((video) => (
              <video
                key={video.id}
                className="w-[20vw] h-[30vh] object-cover"
                src={video.src}
                autoPlay
                loop
                muted
                playsInline
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Main;
