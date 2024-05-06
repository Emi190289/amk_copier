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
        <div className=' xl:h-[36rem]' ><img src={main} className='sm:w-full sm:h-72 md:h-[32rem] lg:h-[40rem] xl:h-full '></img></div>
        <div className='bg-[#039700] text-slate-100 text-center p-8 '>
          <p className='text-3xl font-bold  md:text-4xl' data-aos="fade-down" data-aos-duration="1000">WELCOME TO AMK COPIER FZ-LLC</p>
        <p className='text-base text-justify leading-8 md:py-6 lg:px-6 xl:px-16 font-medium mt-6'  data-aos="fade-up" data-aos-duration="1500" >Versatile enough to successfully service Canon, HP, Konica Minolta, Xerox MFP and LaserJet brands. Adept at quickly diagnosing a problem discussing options with customers and performing reliable regular maintenance tasks. Specializes in old and new copier technology.</p></div>
        
        <section className='bg-slate-100 lg:pb-10' >
          <div className=' p-4 md:flex lg:px-24 xl:px-60'>  
            <div className='sm:ml-20 md:m-0 md:basis-1/2' data-aos="fade-right" data-aos-duration="1000"><img className='sm:h-96 sm:w-96 ' src={aboutus} alt="About Us"></img>  </div>
          <div className='mt-2 md:basis-1/2 md:mt-16' data-aos="fade-up" data-aos-duration="1000"><button className=' border-green-200 border-2 text-[#039700] bg-green-100 rounded-xl text-xs px-3 py-1'>About Us</button>
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