import React from 'react'
const Navbar = () => {
  return (
    <>
    <div className='flex w-full'>
         <h3 className='z-40 w-[40%] m-4 font-bold text-2xl text-blue-700 '>Portfolio</h3>
        <nav className=' font-bold rounded-2xl text-white bg-white/15
        backdrop-blur-2xl  border border-white/30 shadow-[0_12px_40px_rgba(0\,0\,0\,0.6)] 
        h-10 m-3 w-[400px] flex justify-center items-center space-x-10  z-10 list-none  '>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
            <li>feature</li>
        </nav>
        
    </div>
    </>
  )
}

export default Navbar
