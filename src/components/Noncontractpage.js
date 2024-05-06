import React from 'react'
import Header from '../Header'
import Menu from '../Menu'
import Footer from '../Footer'
import noncontractpage from '../assets/noncontractpage.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons'
import noncontractpage2 from '../assets/noncontractpage2.jpg'
import noncontractpage1 from '../assets/noncontractpage1.jpg'

const Noncontractpage = () => {
  return (
    <div>
      <Header />
      <Menu />
      <div className=''>
        <img className='sm:w-full md:h-96 lg:h-[32rem] xl:h-[36rem]' src={noncontractpage}></img>
        <div className='bg-[#039700] text-slate-100 text-center p-8 '>
        <p className='text-3xl font-bold  md:text-4xl' data-aos="fade-down" data-aos-duration="1000">WELCOME TO AMK COPIER FZ-LLC</p>
        <p className='text-base text-justify leading-8 md:py-6 lg:px-6 xl:px-16 font-medium mt-6'  data-aos="fade-up" data-aos-duration="1500" >Versatile enough to successfully service Canon, HP, Konica Minolta, Xerox MFP and LaserJet brands. Adept at quickly diagnosing a problem discussing options with customers and performing reliable regular maintenance tasks. Specializes in old and new copier technology.</p></div>
        </div>
    <section className=' bg-slate-100 lg:pb-10'> 
   
    <div className='md:flex xl:px-28 '> 
     <div className='bg-slate-100 pb-3 p-4 md:basis-1/2 lg:pb-16 ' data-aos="fade-up" data-aos-duration="1000"> 
       <p className='text-2xl font-bold  pt-8 '>Our Non-contract Services Include The Following:</p>
        <ul className='mt-4 text-left'>
          <li className='flex mt-2'>   <FontAwesomeIcon icon={faCheckDouble} size="lg" style={{color: "#039700",}} />  <p className='ml-2'>Preventive maintenance defined by your specific needs and requirements.</p></li>
          <li className='flex mt-2'>  <FontAwesomeIcon icon={faCheckDouble} size="lg" style={{color: "#039700",}} /> <p className='ml-2'>Professional Field Service Technicians and IT Support fully trained and equipped with the necessary tools to diagnose, repair and maintain your equipment.</p></li>
            <li className=' flex mt-2'><FontAwesomeIcon icon={faCheckDouble} size="lg" style={{color: "#039700",}} /> <p className='ml-2'>Detailed Field Service Reports documenting the work performed within 48 hours.</p></li>
            <li className='flex mt-2'><FontAwesomeIcon icon={faCheckDouble} size="lg" style={{color: "#039700",}} /> <p className='ml-2'>We offer local coverage for those customers whose service contracts has expired or no longer under service maintenance. You can have the option of signing a service maintenance contract after we have serviced your equipment. We don’t employ subcontractors as we have our own technical team, retaining full accountability for quality of service.</p></li>
            <li className='flex mt-2'><FontAwesomeIcon icon={faCheckDouble} size="lg" style={{color: "#039700",}} /> <p className='ml-2'>Guaranteed response time to meet your uptime needs.</p></li>
            <li className='flex mt-2'><FontAwesomeIcon icon={faCheckDouble} size="lg" style={{color: "#039700",}} /> <p className='ml-2'>Local inventory of replacement parts such as toners, drums, rollers, lamps, pickup/separation/feed tires etc.</p></li>
        </ul>
        <p className='font-semibold mt-2 '>CALL OUR SERVICE HOTLINE AT +971 562678637 TO ENQUIRE ON THE CANON AND XEROX COPIER MODELS THAT WE SERVICE.</p>
        </div>
        <div className='bg-slate-100 p-4 md:basis-1/2 md:pt-16' data-aos="fade-left" data-aos-easing="ease-in-sine">
          <img className='rounded  sm:h-80 sm:w-screen md:h-96 lg:h-96 xl:w-full' src={noncontractpage1}></img>
          </div>
        </div>
      
        </section>
     
      <Footer />

    </div>
  )
}

export default Noncontractpage

