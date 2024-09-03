import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200' 
    style={{backgroundColor: color}} > 
      <div className=' fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className=' flex flex-wrap justify-center gap-2 shadow-lg bg-white px-3 py-2 rounded-3xl'>
      <button
       onClick={()=> setColor("Red")}
       className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "Red"}}>
       Red
      </button>
      </div>
      <div className=' flex flex-wrap justify-center gap-2 shadow-lg bg-white px-3 py-2 rounded-3xl'>
      <button 
       onClick={()=> setColor("Purple")}
      className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "purple"}}>
       Purple
      </button>
      </div>
      <div className=' flex flex-wrap justify-center gap-2 shadow-lg bg-white px-3 py-2 rounded-3xl'>
      <button
       onClick={()=> setColor("Green")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "Green"}}>
       Green
      </button>
      </div>
      <div 
       onClick={()=> setColor("Black")}
      className=' flex flex-wrap justify-center gap-2 shadow-lg bg-white px-3 py-2 rounded-3xl'>
      <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "black"}}>
       Black
      </button>
      </div>
      </div>
    </div>
  )
}

export default App
