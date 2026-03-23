import { useEffect, useState } from "react";
import gsap from "gsap";

const Loader = ({ loadedCount, totalFirst, isLoaded }) => {
  const [hide, setHide] = useState(false);
  const progress = Math.round((loadedCount / totalFirst) * 100);

  useEffect(() => {
    if (isLoaded) {
      gsap.to(".loader", {
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        onComplete: () => setHide(true),
      });
    }
  }, [isLoaded]);

  if (hide) return null;

  return (
    <div className="loader fixed top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center gap-4 z-[9999]">

      {/* IMAGE + MASK */}
      <div
        style={{
          maskImage:
            "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0) 100%)",
          animation: "blink 1.5s ease-in-out infinite",
        }}
      >
        <img
          src="/images/survey-corps.jpg"
          alt="Survey Corps"
          className="w-[30vw] h-[30vh] object-contain"
        />
      </div>

      {/* PROGRESS TEXT */}
      <h1 className="text-white text-sm tracking-widest">
        {progress}%
      </h1>

      {/* PROGRESS BAR */}
      <div className="w-[200px] h-[2px] bg-gray-700 overflow-hidden">
        <div
          className="h-full bg-white transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <style>{`
        @keyframes blink {
          0%,100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Loader;