import React from 'react'
import About from '../About'
import Header from '../Header'
import Menu from '../Menu'
import Footer from '../Footer'
import aboutus from '../assets/aboutus.png'
import main from '../assets/aboutusmain.jpg'

const AboutUs = () => {
  return (
    <div>
        <Header/>
        <Menu/>
        <div class=''><img src={main} className='sm:w-full sm:h-72 md:h-80 lg:h-96 xl:h- '></img></div>
        <div className='bg-[#039700] text-slate-100 text-center p-6'>
          <p className='text-2xl font-bold '>WELCOME TO AMK COPIER FZ-LLC</p>
        <p className='text-sm font-medium mt-2 leading-6'>Versatile enough to successfully service Canon, HP, Konica Minolta, Xerox MFP and LaserJet brands. Adept at quickly diagnosing a problem discussing options with customers and performing reliable regular maintenance tasks. Specializes in old and new copier technology.</p></div>
        <section className='bg-slate-100 lg:pb-10'>
          <div className=' p-4 md:flex lg:px-24 xl:px-60'>  
            <div className='sm:ml-20 md:m-0 md:basis-1/2'><img class='sm:h-96 sm:w-96 ' src={aboutus} alt="About Us"></img>  </div>
          <div className='mt-2 md:basis-1/2 md:mt-16'><button className=' border-green-200 border-2 text-[#039700] bg-green-100 rounded-xl text-xs px-3 py-1'>About Us</button>
          <p className='font-bold text-2xl mt-4'>The Leading Copier Solutions Provider</p>
          <p className='mt-2 text-base'>AMK Copiers Versatile enough to successfully service Canon, HP, Konica Minolta, Xerox MFP and LaserJet brands. Adept at quickly diagnosing a problem discussing options with customers and performing reliable regular maintenance tasks. Specializes in old and new copier technology.</p>
          
          </div>
          </div>        
        </section>
        <Footer/>
   </div>
  )
}

export default AboutUs