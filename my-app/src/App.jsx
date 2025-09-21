import {Navbar} from "./Components/Navbar"
import {Hero} from "./Components/Hero"
import {Projects} from "./Components/Projects"
import {Contact} from "./Components/Contact"

import './App.css'
import { useEffect, useState } from "react"

function App() {
  const [isLoaded , setIsLoaded]=useState(false)
  useEffect(()=>{
   setIsLoaded(true);
  }, [])
  
  
  return (
    <div className={`app ${isLoaded ? "loaded":""}`}>
      < Navbar/>
       < Hero/>
        < Projects/>
         < Contact/>
    <>
    <p> &copy;2025 AgbaraTech. All rights reserved.</p>
    </>
    </div>
    
  );
}

export default App
