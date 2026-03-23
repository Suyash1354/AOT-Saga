import React, { useEffect, useRef } from "react";
import Main from "./Section/Main";
import First from "./Section/First";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import About from "./Section/About";
import Loader from "./component/Loader";

gsap.registerPlugin(ScrollTrigger, useGSAP);


const App = () => {
  const audioRef = useRef(null)

useEffect(() => {
  const handleFirstClick = () => {
    console.log("clicked")
    audioRef.current.play()
    document.removeEventListener("click", handleFirstClick)
  }

  document.addEventListener("click", handleFirstClick)

  return () => {
    document.removeEventListener("click", handleFirstClick)
  }
}, [])
  useGSAP(() => {

    gsap.from(".first-section",{
      opacity:0,
      duration:4,
      ease:"power3.inOut"
    })
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
    duration:1,
    ease: "power4.out",
  });
  tl.to(".second-text", {
    opacity: 0,
    ease: "power4.out",
  },"<");
}, []);
  return (
    <div className="w-full h-screen bg-black">
       <audio ref={audioRef} src="/Bg-Audio.mp3" loop />
      <First />
      <Main />
      <About/>
    </div>
  );
};

export default App;
