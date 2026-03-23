import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const About = () => {
  const characters = [
    { name: "Eren ", img: "/images/Eren.webp" },
    { name: "Mikasa ", img: "/images/Mikasa.webp" },
    { name: "Armin ", img: "/images/Armin.webp" },
    { name: "Erwin ", img: "/images/Erwin.webp" },
    { name: "Levi ", img: "/images/Levi.webp" },
    { name: "Hange ", img: "/images/Hange.webp" },
  ];

  const names = [
    { text: "EREN YEAGER", size: "20vw" },
    { text: "MIKASA ACKERMAN", size: "14vw" },
    { text: "ARMIN ARLERT", size: "20vw" },
    { text: "ERWIN SMITH", size: "20vw" },
    { text: "LEVI ACKERMAN", size: "20vw" },
    { text: "HANGE zoë", size: "20vw" },
  ];

  const surveyRef = useRef(null);
  const textRefs = useRef([]);
  const imageRef = useRef([]);
  const currentActive = useRef(null);

  const handelMouseEnter = (index) => {
    gsap.to(surveyRef.current, {
      y: "-100%",
      duration: 1,
      ease: "power3.inOut",
    });

    gsap.to(textRefs.current[index], { y: "0%" }); // first bring the h1 up
    const letters = textRefs.current[index].querySelectorAll("span");
    gsap.fromTo(
      letters,
      { y: "100%" },
      {
        y: "20%",
        duration: 0.6,
        ease: "power3.inOut",
        stagger: {
          each: 0.04,
          from: "center",
        },
      },
    );

    currentActive.current = index;

    gsap.to(imageRef.current[index], {
      scale: 1.2,
      duration: 0.8,
      ease: "expo.inOut",
      filter: "grayscale(0%)",
    });
  };

  const handelMouseLeave = () => {
    gsap.to(surveyRef.current, {
      y: "-0%",
      duration: 1,
      ease: "power3.inOut",
    });

    gsap.to(textRefs.current[currentActive.current], {
      y: "100%",
      duration: 1,
      ease: "power3.inOut",
    });

    gsap.to(imageRef.current[currentActive.current], {
      scale: 1,
      duration: 0.8,
      ease: "expo.inOut",
      filter: "grayscale(100%)",
    });
  };
  return (
    <section className="w-full h-screen bg-black ">
      <div className="Container w-full h-screen flex flex-col justify-center items-center ">
        <div className="Images lg:w-full lg:h-[40%] z-50 flex justify-center items-center gap-[1vw]     ">
          {characters.map((image, id) => (
            <img
              ref={(el) => (imageRef.current[id] = el)}
              key={id}
              src={image.img}
              alt="AOT"
              className="lg:w-25 lg:h-25 rounded-[10px] object-cover cursor-pointer grayscale sm:w-[10vw] sm:h-[8vh] w-[12vw] h-[6vh]"
              onMouseEnter={() => handelMouseEnter(id)}
              onMouseLeave={handelMouseLeave}
            />
          ))}
        </div>

        <div className="w-full h-[40vh] relative text-white font-[round8-four] text-[20vw] text-center  overflow-hidden flex justify-center">
          <h1 ref={surveyRef} className=" absolute  w-full  ">
            SURVEY COPS
          </h1>
          {names.map((name, id) => (
            <h1
              ref={(el) => (textRefs.current[id] = el)}
              key={id}
              style={{ fontSize: name.size }}
              className="absolute translate-y-full bottom-0 text-[#F93434] uppercase flex justify-center"
            >
              {name.text.split("").map((letter, i) => (
                <span key={i} className="inline-block">
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </h1>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
