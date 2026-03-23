import React, { useEffect, useRef, useState } from "react";
import Main from "./Section/Main";
import First from "./Section/First";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import About from "./Section/About";
import Loader from "./component/Loader";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const FIRST_BATCH = 6;

const App = () => {
  const audioRef = useRef(null);

  // Loader state
  const [loadedCount, setLoadedCount] = useState(0);   // how many of first 6 loaded
  const [isLoaded, setIsLoaded] = useState(false);      // first 6 all ready?

  // Play audio on first click
  useEffect(() => {
    const handleFirstClick = () => {
      audioRef.current?.play();
      document.removeEventListener("click", handleFirstClick);
    };
    document.addEventListener("click", handleFirstClick);
    return () => document.removeEventListener("click", handleFirstClick);
  }, []);

  // GSAP scroll animation (unchanged)
  useGSAP(() => {
    gsap.from(".first-section", {
      opacity: 0,
      duration: 4,
      ease: "power3.inOut",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".first-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
    });

    tl.to(".first-text", { opacity: 0, duration: 1, ease: "power4.out" });
    tl.to(".second-text", { opacity: 0, ease: "power4.out" }, "<");
  }, []);

  return (
    <div className="w-full h-screen bg-black">
      {/* Loader — visible until first 6 videos fire onLoadedData */}
      <Loader
        loadedCount={loadedCount}
        totalFirst={FIRST_BATCH}
        isLoaded={isLoaded}
      />

      <audio ref={audioRef} src="/Bg-Audio.mp3" loop />

      <First />
      <Main
        onVideoLoaded={(count) => setLoadedCount(count)}
        onFirstBatchReady={() => setIsLoaded(true)}
      />
      <About />
    </div>
  );
};

export default App;