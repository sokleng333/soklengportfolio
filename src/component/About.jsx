import React, { use } from 'react'
import { useEffect } from 'react';
import Lanyard from '../Lanyard.jsx'
import Aos from 'aos'
import 'aos/dist/aos.css';
const About = () => {
    useEffect(() => {
        Aos.init({ 
            easing: "ease-out",
            duration: 800,
            once: true
         });
    },[]);
  return (
    <div className='flex justify-center items-center'>
        
        <div className='flex hover:shadow-[0_0_25px_15px_rgba(59,130,246,0.5)] bg-white/15 backdrop-blur-2xl  transform hover:translate-y-2 transition-all duration-300 ease-linear   shadow-[0_12px_40px_rgba(0\,0\,0\,0.6)] w-[80%] h-[500px] justify-start items-start   '  data-aos="fade-down">
            <div className=' p-6'>
            <h1 className='text-blue-600 text-2xl font-bold text-start ' data-aos="fade-down">About Me</h1>
            <p className='text-white text-start mt-6 mb-6' data-aos="fade-down">I am a computer science student with a strong interest in web and application development. I am currently building my foundation in programming through C, C++, HTML, and CSS, and I enjoy understanding how systems work rather than just making things “look right.”
            I am particularly interested in becoming a full-stack developer, with the goal of creating practical websites and applications for real businesses, such as clothing or food-related platforms. I value logic, structure, and problem-solving, and I am comfortable learning through mistakes and debugging.</p>
            <div className='flex space-x-4 mt-4'>
            <div className='w-[200px] border-amber-50  rounded  flex flex-col items-start justify-center' data-aos="fade-right">
                <h4 className='text-white text-2xl font-bold '>3<span className='text-blue-600 text-2xl font-bold'>+</span></h4>
                <p className='text-white text-[15px]'>Project Finished</p>
                <p className='text-gray-300 text-xs'>Happy to build wanting to learn</p>
            </div>
            <div className='w-[200px] border-amber-50  rounded flex flex-col items-start justify-center' data-aos="fade-left">
                <h4 className='text-white text-2xl font-bold'>5<span className='text-blue-600 text-2xl font-bold'>+</span></h4>

                <p className='text-white text-[15px]'>On Going Task</p>
            </div>
            </div>
            </div>
           <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />

            
        </div>
        
    </div>
  )
}

export default About
