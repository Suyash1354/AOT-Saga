import React from "react";
import Main from "./Section/Main";
import First from "./Section/First";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import About from "./Section/About";

gsap.registerPlugin(ScrollTrigger, useGSAP);


const App = () => {
  useGSAP(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".first-section",
      start: "top top",
      end: "bottom top",
      markers:true,
      scrub: true,
      pin: true,
      pinSpacing: false, // 
    },
  });

  tl.to(".first-text", {
    opacity: 0,
    ease: "power4.out",
  });
}, []);
  return (
    <div className="w-full h-screen bg-black">
      <First />
      <Main />
      <About/>
    </div>
  );
};

export default App;
