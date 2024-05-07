import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'

// import { faWhatsapp } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/servicespage')
    }
  return (
    <section className=''>
        <div className='bg-[#039700] text-slate-200 grid justify-items-center  md:grid-cols-2 lg:-mt-8 lg:mx-10  xl:mx-36'>
            <div className=' my-2 md:text-left md:pl-20 '>
                <p className='font-bold text-2xl'>Looking for a right copier?</p>
            <p className='text-center text-xs'>We help you to make the right choice</p></div>
            <div className="my-4 "><button className='bg-slate-200 text-[#039700] p-2 px-4  text-sm' onClick={handleClick}>Explore More   -> </button></div>
        </div>
        <div className='lg:flex lg:pl-20 xl:pl-36' >
            <div className='text-slate-200 m-2 lg:basis-1/3 ' data-aos="fade-down" data-aos-duration="3000">
                <p className='font-bold text-xl  pt-4'>About Us</p>
            <p className='mt-4   text-sm leading-6 lg:leading-5 '>Versatile enough to successfully service Canon, HP, Konica Minolta, Xerox MFP and LaserJet brands. Adept at quickly diagnosing a problem discussing options with customers and performing reliable regular maintenance tasks. Specializes in old and new copier technology.</p>
           <div className='flex mt-2'>
           <a href='https://www.instagram.com/amkcopiersfzllc?igsh=dGszMTF4azZoYjFw'> <i className='text-3xl  '><FaInstagram /></i></a>
           <a href='https://www.facebook.com/amkcopiers?mibextid=ZbWKwL' className='ml-2'> <i className='text-3xl text-[#039700]'><FaFacebook /></i></a>
           <a href='https://www.linkedin.com/company/amk-copiers/' className='ml-2'> <i className='text-3xl  '><FaLinkedin /></i></a></div>
            </div>
        
        <div className='text-slate-200 m-2 lg:basis-1/3  ' data-aos="fade-down" data-aos-duration="2000">
            <p className='font-bold text-xl  pt-4'>Useful Links</p>
           <div className='  mt-3 text-sm leading-7'>
             <Link to='/'> <FontAwesomeIcon icon={faTag} size="lg" style={{color: "#039700",}} /> Home</Link>
            <Link className='block' to='/about'><FontAwesomeIcon icon={faTag} size="lg" style={{color: "#039700",}}  /> About Us</Link>
            <Link className='block' to='/contract' ><FontAwesomeIcon icon={faTag} size="lg" style={{color: "#039700",}}/> Contract Services</Link>
            <Link className='block' to='/noncontract'><FontAwesomeIcon icon={faTag} size="lg" style={{color: "#039700",}} /> Non-Contract Services</Link>
            <Link className='block' to='/servicespage'><FontAwesomeIcon icon={faTag} size="lg" style={{color: "#039700",}} /> Services/Parts</Link>
            <Link className='block'  to='/contactus'><FontAwesomeIcon icon={faTag} size="lg" style={{color: "#039700",}} /> Contact Us</Link></div>
        </div>
        <div className='text-slate-200  m-2 lg:basis-1/3 ' data-aos="fade-down" data-aos-duration="1000">
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
        <div className='bg-slate-800 text-white text-center p-3' >© All rights reserved</div> 
    </section>
  )
}

export default Footer