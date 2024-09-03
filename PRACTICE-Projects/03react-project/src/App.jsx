import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './assets/components/card'


function App() {
  const [count, setCount] = useState(0)
  // let Object1 = {
  //   username : "hi",
  //   age: 21
  // }
  return (
    <>
    <h1 className=' text-white p-4'>Taillwind  CSS + React</h1>
    <br />
   < Card  username= "Welcom to our Website" />
 
 </>
  )
}


export default App
