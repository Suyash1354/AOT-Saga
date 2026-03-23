import React from "react";

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

    return (
        <section className="w-full h-screen bg-black ">
            <div className="Container w-full h-screen flex flex-col justify-center items-center ">
                <div className="Images w-full h-[50%] z-50 flex justify-center items-center gap-[1vw] bg-amber-400  ">
                    {characters.map((image, id) => (
                        <img
                            key={id}
                            src={image.img}
                            alt="AOT"
                            className="lg:w-20 lg:h-20 rounded-[10px] object-cover"
                        />
                    ))}
                </div>

                <div className="Text text-white w-full h-screen flex  justify-center font-[round8-four] text-[20vw] z-20 ">
                  <h1 className="">Suyash</h1>
                </div>
            </div>
        </section>
    );
};

export default About;
