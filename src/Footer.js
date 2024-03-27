import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
// import { faWhatsapp } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <section class=''>
        <div class='bg-[#039700] text-slate-200 sm:flex lg:mx-10 lg:-mt-8 xl:mx-36'>
            <div class='p-4 text-center md:text-left md:pl-20 '>
                <p class='font-bold text-2xl'>Looking for a right copier?</p>
            <p class='text-xs'>We help you to make the right choice</p></div>
            <div class="pl-24 pb-4 sm:pt-5 md:pl-40"><button class='bg-slate-200 text-[#039700] p-2 px-4  text-sm'>Explore More   -> </button></div>
        </div>
        <div class='lg:flex lg:pl-20 xl:pl-36' >
            <div class='text-slate-200 m-2 lg:basis-1/3'>
                <p class='font-bold text-xl  pt-4'>About Us</p>
            <p class='mt-4   text-sm leading-6 lg:leading-5 '>Versatile enough to successfully service Canon, HP, Konica Minolta, Xerox MFP and LaserJet brands. Adept at quickly diagnosing a problem discussing options with customers and performing reliable regular maintenance tasks. Specializes in old and new copier technology.</p>
           <div class='flex mt-2'>
           <a href='https://www.instagram.com/amkcopiersfzllc?igsh=dGszMTF4azZoYjFw'> <i class='text-3xl  '><FaInstagram /></i></a>
           <a href='https://www.facebook.com/amkcopiers?mibextid=ZbWKwL' class='ml-2'> <i class='text-3xl text-[#039700]'><FaFacebook /></i></a>
           <a href='https://www.linkedin.com/company/amk-copiers/' class='ml-2'> <i class='text-3xl  '><FaLinkedin /></i></a></div>
            </div>
        
        <div class='text-slate-200 m-2 lg:basis-1/3'>
            <p class='font-bold text-xl  pt-4'>Useful Links</p>
           <div class='  mt-3 text-sm leading-7'>
             <a><FontAwesomeIcon icon={faTag} size="lg" style={{color: "#039700",}} /> Home</a>
            <a class='block'><FontAwesomeIcon icon={faTag} size="lg" style={{color: "#039700",}} /> About Us</a>
            <a class='block'><FontAwesomeIcon icon={faTag} size="lg" style={{color: "#039700",}} /> Promotions</a>
            <a class='block'><FontAwesomeIcon icon={faTag} size="lg" style={{color: "#039700",}} /> Gallery</a>
            <a class='block'><FontAwesomeIcon icon={faTag} size="lg" style={{color: "#039700",}} /> Services</a>
            <a class='block'><FontAwesomeIcon icon={faTag} size="lg" style={{color: "#039700",}} /> Contact Us</a></div>
        </div>
        <div class='text-slate-200  m-2 lg:basis-1/3'>
            <p class='font-bold text-xl  pt-4'>Contact Us</p>
           <div class='mt-3'> 
            <FontAwesomeIcon icon={faLocationDot} size="lg" style={{color: "#039700",}} /> 
            <span class="ml-2 text-justify"> AMK Copiers FZ-LLC </span>
            <p class="ml-7 ">FAMC1984,</p>
            <p class="ml-7 "> Al Shohada Road,</p>
            <p class="ml-7 "> AL Hamra Industrial Zone-FZ,</p>
            <p class="ml-7 "> Ras Al Khaimah, </p>
            <p class="ml-7 ">  United Arab Emirates.</p></div>
            <div class='mt-2'> <FontAwesomeIcon icon={faPhone} size="lg" style={{color: "#039700",}} /> <span class='ml-2'>+971 562678637</span></div>
            <div class='mt-2'><FontAwesomeIcon icon={faEnvelope} size="lg" style={{color: "#039700",}} />
            <span class='ml-2 '>Sales@amkcopiers.ae</span>
            <p class='ml-7 '>Service@amkcopiers.ae</p></div>
            
        </div></div>
        <div class='bg-slate-800 text-white text-center p-3'>© All rights reserved </div>
    </section>
  )
}

export default Footer