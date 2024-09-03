import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter, setcounter] = useState(15)
  // let counter = 15
  const addval =  () => {
  //  console.log("clicked", counter);
   counter = counter + 1
   setcounter(counter)
  }
   const RemoveVal =() =>{
    setcounter(counter - 1)
   }
  return (
    <>
      
      <h1>Vite + React with fiza mushtaq</h1>
      <h2>Counter Value is {counter}</h2>
      <button
      onClick={addval}>Add Value</button>
      <button onClick={RemoveVal}>Remove Value</button>
     
    </>
  )
}

export default App
