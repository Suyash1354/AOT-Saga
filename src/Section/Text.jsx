import React from 'react';

const Text = () => {
  const names = [
    "Gunther", "Eld", "Oluo", "Petra", "Sasha",
    "Isabel", "Furlan", "Marco", "Moblit", "Erwin",
    "Mike", "Nanaba", "Ilse", "Dieter", "Dita",
    "Luke", "Gelgar", "Levi"
  ];

  const chunkname = [];

  for (let i = 0; i < names.length; i += 5) {
    chunkname.push(names.slice(i, i + 5));
  }

  return (
    <div className="w-full">
      {chunkname.map((group, id) => (
        <section className="w-full h-screen flex flex-col justify-center items-center" key={id}>
          {group.map((text, index) => (
            <h1 key={index}>{text}</h1>
          ))}
        </section>
      ))}
    </div>
  );
};

export default Text;