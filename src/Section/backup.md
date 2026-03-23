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






import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const About = () => {
    const characters = [
        { name: "Eren", img: "/images/Eren.webp" },
        { name: "Mikasa", img: "/images/Mikasa.webp" },
        { name: "Armin", img: "/images/Armin.webp" },
        { name: "Erwin", img: "/images/Erwin.webp" },
        { name: "Levi", img: "/images/Levi.webp" },
        { name: "Hange", img: "/images/Hange.webp" },
    ];

    const names = ["EREN", "MIKASA", "ARMIN", "ERWIN", "LEVI", "HANGE"];

    const surveyRef = useRef(null);
    const textRefs = useRef([]);
    let currentActive = useRef(null);

    const handleMouseEnter = (index) => {
        // Slide "SURVEY" up and out
        gsap.to(surveyRef.current, {
            y: "-100%",
            duration: 0.5,
            ease: "power3.inOut",
        });

        // If another name was visible, send it back down immediately
        if (currentActive.current !== null && currentActive.current !== index) {
            gsap.set(textRefs.current[currentActive.current], { y: "100%" });
        }

        // Slide the hovered name up from bottom
        gsap.fromTo(
            textRefs.current[index],
            { y: "100%" },
            { y: "0%", duration: 0.5, ease: "power3.inOut" }
        );

        currentActive.current = index;
    };

    const handleMouseLeave = () => {
        const activeIndex = currentActive.current;

        // Slide active name back down
        if (activeIndex !== null) {
            gsap.to(textRefs.current[activeIndex], {
                y: "100%",
                duration: 0.5,
                ease: "power3.inOut",
            });
        }

        // Slide "SURVEY" back in from bottom
        gsap.to(surveyRef.current, {
            y: "0%",
            duration: 0.5,
            ease: "power3.inOut",
        });

        currentActive.current = null;
    };

    return (
        <section className="w-full h-screen bg-black">
            <div className="Container w-full h-screen flex flex-col justify-center items-center">
                <div className="Images w-full h-[50%] z-50 flex justify-center items-center gap-[1vw]">
                    {characters.map((image, id) => (
                        <img
                            key={id}
                            src={image.img}
                            alt="AOT"
                            className="lg:w-20 lg:h-20 rounded-[10px] object-cover cursor-pointer"
                            onMouseEnter={() => handleMouseEnter(id)}
                            onMouseLeave={handleMouseLeave}
                        />
                    ))}
                </div>

                {/* Text mask container */}
                <div className="Text relative w-full flex justify-center font-[round8-four] text-[20vw] z-20 overflow-hidden h-[25vw]">
                    
                    {/* Default SURVEY text */}
                    <h1
                        ref={surveyRef}
                        className="text-white w-full text-center absolute bottom-0 translate-y-0"
                    >
                        SURVEY
                    </h1>

                    {/* Character names - each starts below (hidden) */}
                    {names.map((name, id) => (
                        <h1
                            key={id}
                            ref={(el) => (textRefs.current[id] = el)}
                            className="text-amber-300 w-full text-center absolute bottom-0 translate-y-full"
                        >
                            {name}
                        </h1>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;