import { useEffect, useState } from "react"

const Loader = () => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
  const timer = setTimeout(() => {
    document.body.style.overflow = "auto" // unlock scroll
    setVisible(false)
  }, 3000)

  return () => clearTimeout(timer)
}, [])
  if (!visible) return null

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center gap-4 z-[9999]">
      
      <div style={{
        maskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0) 100%)",
        WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0) 100%)",
        animation: "blink 1.5s ease-in-out infinite"
      }}>
        <img
          src="/images/survey-corps.jpg"
          alt="Survey Corps"
          className="w-[30vw] h-[30vh] object-contain"
        />
      </div>

      <style>{`
        @keyframes blink {
          0%,100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  )
}

export default Loader