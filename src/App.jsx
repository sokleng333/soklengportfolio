import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Herosection from './component/Herosection.jsx'
import Navbar from './component/Navbar.jsx'
import  Home  from './component/Home.jsx'
import About from './component/About.jsx'
import Project from './component/Project.jsx'
function App() {
  return (
    <>
    
   <div className="relative w-full h-screen overflow-hidden">
    <div className='absolute inset-0 w-full h-full overflow-hidden'>
      <Herosection className='h-full' />
    </div>

    <div className='absolute inset-0 z-10 flex flex-col h-full'>
      <Navbar />
      <Home className='flex-1 overflow-hidden' />
    </div>
   
   
</div>
<About/>
<Project/>
</>


  )
}

export default App
