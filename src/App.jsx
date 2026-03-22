import React from 'react'
import Main from './Section/Main'
import First from './Section/First'
import { useGSAP } from '@gsap/react'

const App = () => {
  
  useGSAP(()=>{

    

  },[])
  return (
    <div className='w-full h-screen overflow-hidden bg-black'>
      <First/>
      <Main/>
      
    </div>
  )
}

export default App