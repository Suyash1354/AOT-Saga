import React, { useEffect, useRef, useState } from "react";
import Main from "./Section/Main";
import First from "./Section/First";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import About from "./Section/About";
import Loader from "./component/Loader";

gsap.registerPlugin(ScrollTrigger);

const TOTAL = 18;

const App = () => {
  const audioRef = useRef(null);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    const handleFirstClick = () => {
      audioRef.current?.play();
      document.removeEventListener("click", handleFirstClick);
    };
    document.addEventListener("click", handleFirstClick);
    return () => document.removeEventListener("click", handleFirstClick);
  }, []);


  useEffect(() => {
    if (!isLoaded) return;

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
  }, [isLoaded]); 

  return (
    <div className="w-full h-screen bg-black">
      <Loader
        loadedCount={loadedCount}
        totalFirst={TOTAL}
        isLoaded={isLoaded}
      />

      <audio ref={audioRef} src="/Bg-Audio.mp3" loop />

      <First />
      <Main
        onVideoLoaded={(count) => setLoadedCount(count)}
        onAllReady={() => setIsLoaded(true)}
      />
      <About />
    </div>
  );
};

export default App;