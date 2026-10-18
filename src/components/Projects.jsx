import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { projectsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Projects = () => {
  
 
  return (
    <motion.div
    initial={{opacity:0, x:-200}}
      
      whileInView={{opacity:1, x:0}}
      transition={{duration:1.5}}
      viewport={{once:true}}
    className='mx-auto py-4 pt-20 md:px-10 lg:px-32
    my-20 w-full overflow-hidden' id='Projects'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'> Projects 
        <span className='font-light underline underline-offset-4 decoration-2 under'> Completed</span></h1>
      <p className='text-center mx-auto text-gray-800 max-w-80 '> Crafting Spaces, Building Legacied -Explore Our Portfolio</p>

      {/* Slider Buttons here */}

  
    {/* Project Slider Container here */}
    <div className='overflow-hidden '>
        <div className='flex gap-4 
        transition-transform duration-500 ease-in-out' 
           
 >
          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center mx-auto sm:px-0'>
           {projectsData.map((p,i)=>
            <div className='relative  shrink-0 w-full ' key={i}>
                <img src={p.image} alt='' className=' max-w-80 sm:max-w-100 mx-auto  h-auto mb-15 border rounded-2xl' />
            <div className='absolute left-0 right-0 bottom-5 flex text-center justify-center'>
                <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>

                  <h2 className='text-xl font-semibold text-gray-800'> 
                    {p.title}</h2>
                  <p className='text-gray-500 text-sm'>
                    {p.price} <span> | </span> {p.location}
                  </p>


                </div>
                </div>
                </div>

            
            )}
            </div>


        </div>
    </div>

    <div>
        
    </div>
    </motion.div>
  )
}

export default Projects
