import React from 'react'
import Header from '../Header'
import Menu from '../Menu'
import Footer from '../Footer'
import contact from '../assets/contact.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FaWhatsapp } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div>
      <Header />
      <Menu />
    <div >  
      <img class='sm:w-full md:h-80 lg:h-[28rem] xl:h-[36rem]' src={contact}></img></div>
      <div className='bg-[#039700] text-slate-100 text-center p-8 '>
      <p className='text-3xl font-bold  md:text-4xl' data-aos="fade-down" data-aos-duration="1000">WELCOME TO AMK COPIER FZ-LLC</p>
        <p className='text-base text-justify leading-8 md:py-6 lg:px-6 xl:px-16 font-medium mt-6'  data-aos="fade-up" data-aos-duration="1500" >Versatile enough to successfully service Canon, HP, Konica Minolta, Xerox MFP and LaserJet brands. Adept at quickly diagnosing a problem discussing options with customers and performing reliable regular maintenance tasks. Specializes in old and new copier technology.</p></div>
        
     
     <section class='bg-slate-200 py-12  px-4 md:flex xl:px-40 xl:py-20'>
       <div className='bg-[#039700] text-slate-100  rounded py-10 px-8 leading-10 md:basis-1/2' data-aos="fade-up" data-aos-duration="500">
        <p class='font-bold text-3xl '>Let's Get In Touch</p>
       <div class='mt-10 leading-8'> 
        <FontAwesomeIcon icon={faLocationDot} size="lg" /> 
            <span className="ml-2 text-justify text-xl font-semibold lg:text-2xl"> AMK Copiers FZ-LLC </span>
            <p className="ml-7 lg:text-xl">FAMC1984,</p>
            <p className="ml-7 lg:text-xl"> Al Shohada Road,</p>
            <p className="ml-7 lg:text-xl"> AL Hamra Industrial Zone-FZ,</p>
            <p className="ml-7 lg:text-xl"> Ras Al Khaimah, </p>
            <p className="ml-7 lg:text-xl">  United Arab Emirates.</p></div>
            <div className='mt-2 '> <FontAwesomeIcon icon={faPhone} size="lg"  /> <span className='ml-1 font-semibold text-2xl'>+971 562678637</span></div>
            <div className='mt-2'><FontAwesomeIcon icon={faEnvelope} size="lg" />
            <span className='ml-2 font-semibold text-xl lg:ml-4'>Sales@amkcopiers.ae</span></div>
            <div className='mt-2'><FontAwesomeIcon icon={faEnvelope} size="lg" />
            <span className='ml-2 font-semibold text-xl lg:ml-4'>Service@amkcopiers.ae</span></div>
            <div className='mt-2'><FaWhatsapp class='inline text-xl' /><span className='ml-2 font-semibold text-2xl '>+971 562678637</span></div>
      </div>
      <div className=' bg-white  py-10 px-8 pb-16 md:basis-1/2' data-aos="fade-up" data-aos-duration="1000">
        <p className='font-bold text-3xl'>Please fill the form below for more details</p>
       <div class='my-8 leading-10'>
         <input class='border-b-2 w-full mt-6 pb-5 focus:outline-none' type="text" placeholder='Name' ></input>
        <input class='border-b-2 w-full mt-6 pb-5 focus:outline-none' type="email" placeholder='Email'></input>
        <input class='border-b-2 w-full mt-6 pb-5 focus:outline-none' type="text" placeholder='Message'></input> </div>
        <div class='md:text-center'><button class='px-4 border-2 py-3 rounded-lg bg-black text-slate-100 font-semibold '>SEND US A MESSAGE</button></div>
      </div>
      </section>

      {/* <section class=''> */}
        <div class='w-full lg:pb-10 bg-slate-200'>
        <iframe class='w-full ' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.3697636078514!2d55.79474747490547!3d25.659034612840834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5e113568e5445%3A0xcd8bdea54063ce91!2sAMK%20Copiers%20FZ-LLC!5e0!3m2!1sen!2sae!4v1711971186257!5m2!1sen!2sae" 
      width="600"
       height="450" 
      //  style="border:0;" 
       allowfullscreen="" 
       loading="lazy" 
       referrerpolicy="no-referrer-when-downgrade"></iframe></div>
       {/* </section> */}
      <Footer />
    </div>
  )
}

export default ContactUs