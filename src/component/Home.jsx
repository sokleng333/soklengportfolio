import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import '../cursor.css' 
 import sokleng from '../assets/image.png'
import ProfileCard from '../ProfileCard'
const Home = () => {
  const typref = useRef(null)

  useEffect(() => {
    const typed = new Typed(typref.current, {
      strings: ['A Web Developer', 'A Graphic Designer', ],
      typeSpeed: 35,      // slower typing
      backSpeed: 20,      // smooth delete
      backDelay: 1200,    // pause before deleting
      startDelay: 300,    // pause before typing
      loop: true,
      showCursor: true,
      cursorChar: '|',
      smartBackspace: true,
    })

    return () => typed.destroy()
  }, [])

  return (
    <section className='relative flex w-full h-screen items-center justify-center overflow-hidden ' data-aos="fade-up">
      <div className='w-1/2 h-full flex flex-col justify-center items-start gap-4 px-8'>
      <h1 className="leading-snug text-3xl font-bold text-blue-200">
      Hello, I am Sokleng <br />
        I'm{" "}
    <span className="inline-block min-w-[14ch] whitespace-nowrap text-blue-400">
    <span ref={typref}></span>
  </span>
    </h1>
      <p className='text-white text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero atque veniam saepe porro, fugiat vitae incidunt iure fugit sunt, exercitationem quidem dolore debitis rem nostrum quod ea explicabo alias similique!</p>
      </div>
        
<ProfileCard className='absolute inset-0 z-0 '
  name="Hout Sokleng"
  title="Web Developer"
  handle="Frontend"
  status="Online"
  contactText="Contact Me"
  avatarUrl={sokleng}
  showUserInfo={false}
  enableTilt={true}
  enableMobileTilt={false}
  onContactClick={() => console.log('Contact clicked')}
  showIcon
  showBehindGlow
  behindGlowColor="rgba(125, 190, 255, 0.67)"
  customInnerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
/>
    </section>
  )
}

export default Home
