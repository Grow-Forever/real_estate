import React from 'react'
import { testimonialsData } from '../assets/assets'
import {motion} from 'framer-motion'

const Testimonials = () => {

  return (
    <motion.div
    initial={{opacity:0, y:200}}
      
      whileInView={{opacity:1, y:0}}
      transition={{duration:1.5}}
      viewport={{once:true}}
    className='container mx-auto py-2 lg:px-32
    w-full overflow-hidden' id="Testimonials">
      <h1 className='text-2xl sm:text-4xl font-bold mb-2
       text-center'> Customer 
       <span className='underline underline-offset-2 decoration-1 under font-light'> Testimonials</span></h1>
      <p className='text-center text-gray-500 mb-12 max-w-80
      mx-auto'>
        Real Stories from Those Who Found Home with Us
      </p>
      <div className='flex flex-wrap justify-center gap-8'>
        {testimonialsData.map((t,i)=>(
            <div className='mac-w-[340px] border shadow-lg rounded-xl px-4 sm:px-8
            text-center py-8' key={i}> 
                <img className='w-20 h-20 rounded-full mx-auto' src={t.image} />
                <h2 className='text-lg text-gray-700 font-medium'> {t.name}</h2>
                <p className='text-gray-500 mb-4 text-sm'> {t.title}</p>
                <p className='text-sm max-w-70 text-gray-400 '>{t.text}</p>
                </div>
        )
        )}
      </div>
    </motion.div>
  )
}

export default Testimonials
