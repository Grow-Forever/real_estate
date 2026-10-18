import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Foooter from './components/Foooter'

const App = () => {
  return (
    <div className='w-full '>  
    {/* overflow-hidden */}
      <ToastContainer />

      <Navbar />
      <Header />
    
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Foooter />

    </div>
  )
}

export default App
