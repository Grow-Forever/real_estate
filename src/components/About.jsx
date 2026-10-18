import React from 'react'
import { assets } from '../assets/assets'
import {motion} from 'framer-motion'

const About = () => {
  return (
    <motion.div 
    initial={{opacity:0, x:200}}
      
      whileInView={{opacity:1, x:0}}
      transition={{duration:1.5}}
      viewport={{once:true}}
    className='flex flex-col
     items-center justify-center container mx-auto
    p-5  md:px-20 lg:px-32 w-full overflow-hidden' id='About'>

          <h1 className='text-2xl sm:text-4xl font-bold mb-2'>
             About 
             <span className='underline underline-offset-4 
             font-light decoration-2 under'> Our Brand</span></h1>
          <p className='text-gray-500 max-w-80 text-center mb-8'>
             Passionate About Properties, Dedicated to your vision</p>
             {/* Image at left start here */}
             <div className='flex flex-col md:flex-row items-center
               md:items-start md:gap-20'>

                <img className='w-full sm:w-1/2 max-w-lg' 
                src={assets.brand_img} alt='' />

                {/* content at right side starts here */}
                <div className='flex flex-col items-center md:items-start mt-10
                text-gray-600 w-full '>
                    <div className='grid grid-cols-2 gap-6 md:gap-10
                     w-full 2xl 2xl:pr-28'>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'> 10+</p>
                            <p> Years of Excellence</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'> 10+</p>
                            <p> Projects Completed</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'> 10+</p>
                            <p> Mn. Sq. ft. Delivered</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'> 10+</p>
                            <p> Ongoing Projects</p>
                        </div>
                                       
                      
                    </div>
                    <p className='my-10 max-w-lg'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, aspernatur velit. Debitis eaque exercitationem sint quia, impedit vel quod ipsam quas vitae qui. Facere, placeat? Omnis quo sed saepe commodi!
                    Aut reprehenderit illo quibusdam incidunt rem amet officiis quae dolorem laboriosam totam id culpa eos, accusantium pariatur earum sint aliquam quaerat ipsum deserunt, corrupti autem eaque eum placeat. Deserunt, harum!</p>
                    <button className='bg-blue-600 text-white px-6 py-2 rounded-xl'> Learn More</button>
                </div>
               </div> 


    </motion.div>
  )
}

export default About
