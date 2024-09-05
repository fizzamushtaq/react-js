
import { useEffect, useState } from 'react'
import './App.css'
import { ThemePovider } from './Contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/card'

function App() {
  const [ThemeMode,setThemeMode] = useState("Light")

  const Lighttheme = () =>{
    setThemeMode("Light")
  }
  const Darktheme = () =>{
    setThemeMode("dark")
  }
 
  // Actually change in theme 

  useEffect (() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(ThemeMode)

  },[ThemeMode]
  )
  return (
   
    <ThemePovider value={{ThemeMode, Lighttheme , Darktheme}}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                      <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                      <Card/>
                    </div>
                </div>
            </div>
    
    </ThemePovider>
  )
}

export default App
