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
    <section className=''>
        <div className='bg-[#039700] text-slate-200 sm:flex lg:mx-10 lg:-mt-8 xl:mx-36'>
            <div className='p-4 text-center md:text-left md:pl-20 '>
                <p className='font-bold text-2xl'>Looking for a right copier?</p>
            <p className='text-xs'>We help you to make the right choice</p></div>
            <div className="pl-24 pb-4 sm:pt-5 md:pl-40"><button className='bg-slate-200 text-[#039700] p-2 px-4  text-sm'>Explore More   -> </button></div>
        </div>
        <div className='lg:flex lg:pl-20 xl:pl-36' >
            <div className='text-slate-200 m-2 lg:basis-1/3'>
                <p className='font-bold text-xl  pt-4'>About Us</p>
            <p className='mt-4   text-sm leading-6 lg:leading-5 '>Versatile enough to successfully service Canon, HP, Konica Minolta, Xerox MFP and LaserJet brands. Adept at quickly diagnosing a problem discussing options with customers and performing reliable regular maintenance tasks. Specializes in old and new copier technology.</p>
           <div className='flex mt-2'>
           <a href='https://www.instagram.com/amkcopiersfzllc?igsh=dGszMTF4azZoYjFw'> <i className='text-3xl  '><FaInstagram /></i></a>
           <a href='https://www.facebook.com/amkcopiers?mibextid=ZbWKwL' className='ml-2'> <i className='text-3xl text-[#039700]'><FaFacebook /></i></a>
           <a href='https://www.linkedin.com/company/amk-copiers/' className='ml-2'> <i className='text-3xl  '><FaLinkedin /></i></a></div>
            </div>
        
        <div className='text-slate-200 m-2 lg:basis-1/3'>
            <p className='font-bold text-xl  pt-4'>Useful Links</p>
           <div className='  mt-3 text-sm leading-7'>
             <a><FontAwesomeIcon icon={faTag} size="lg" style={{color: "#039700",}} /> Home</a>
            <a className='block'><FontAwesomeIcon icon={faTag} size="lg" style={{color: "#039700",}} /> About Us</a>
            <a className='block'><FontAwesomeIcon icon={faTag} size="lg" style={{color: "#039700",}} /> Promotions</a>
            <a className='block'><FontAwesomeIcon icon={faTag} size="lg" style={{color: "#039700",}} /> Gallery</a>
            <a className='block'><FontAwesomeIcon icon={faTag} size="lg" style={{color: "#039700",}} /> Services</a>
            <a className='block'><FontAwesomeIcon icon={faTag} size="lg" style={{color: "#039700",}} /> Contact Us</a></div>
        </div>
        <div className='text-slate-200  m-2 lg:basis-1/3'>
            <p className='font-bold text-xl  pt-4'>Contact Us</p>
           <div className='mt-3'> 
            <FontAwesomeIcon icon={faLocationDot} size="lg" style={{color: "#039700",}} /> 
            <span className="ml-2 text-justify"> AMK Copiers FZ-LLC </span>
            <p className="ml-7 ">FAMC1984,</p>
            <p className="ml-7 "> Al Shohada Road,</p>
            <p className="ml-7 "> AL Hamra Industrial Zone-FZ,</p>
            <p className="ml-7 "> Ras Al Khaimah, </p>
            <p className="ml-7 ">  United Arab Emirates.</p></div>
            <div className='mt-2'> <FontAwesomeIcon icon={faPhone} size="lg" style={{color: "#039700",}} /> <span className='ml-2'>+971 562678637</span></div>
            <div className='mt-2'><FontAwesomeIcon icon={faEnvelope} size="lg" style={{color: "#039700",}} />
            <span className='ml-2 '>Sales@amkcopiers.ae</span>
            <p className='ml-7 '>Service@amkcopiers.ae</p></div>
            
        </div></div>
        <div className='bg-slate-800 text-white text-center p-3'>© All rights reserved </div>
    </section>
  )
}

export default Footer