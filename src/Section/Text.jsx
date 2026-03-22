import React from 'react'

const Text = () => {
    const names = [
  "Gunther",
  "Eld",
  "Oluo",
  "Petra",
  "Sasha",
  "Isabel",
  "Furlan",
  "Marco",
  "Moblit",
  "Erwin",
  "Mike",
  "Nanaba",
  "Ilse",
  "Dieter",
  "Dita",
  "Luke",
  "Gelgar",
  "Levi"
];

 const chunkname = []

  for(let i = 0 ; i<names.length; i +=5){

    chunkname.push(names.slice(i, i+5))

  }
  return (
    <div>Text</div>
  )
}

export default Text