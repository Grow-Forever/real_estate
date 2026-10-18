import React from 'react'
import { motion } from 'framer-motion'
import header_img from '../assets/header1_img.png'


const Header = () => {
  return (
    <div id ="Header" className=' min-h-screen 
     mb-4 bg-cover bg-center flex items-center
    w-full overflow-hidden' 
    style={{backgroundImage:`url(${header_img})`}}>
        <div className="absolute inset-0 bg-black/30"></div>

      
   <motion.div  
      initial={{opacity:0, y:100}}
      
      whileInView={{opacity:1, y:0}}
      transition={{duration:1.5}}
      viewport={{once:true}}
   
      className='container  text-center mx-auto 
      py-4 px-6 md:px-20 lg:px-32 text-white/80 z-10'>
        <h2 className='text-5xl
        sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold' > Explore homes that fit your home</h2>
      
      <div className='space-x-6 mt-16'>
        <a className='border border-white px-8 py-3 rounded-full' 
        href='#Projects'> Projects</a>
        <a className='bg-blue-500 px-8 py-3 rounded-full' 
        href='#Contact'> Contact us</a>
   </div>
   </motion.div>
    </div>
  )
}

export default Header
