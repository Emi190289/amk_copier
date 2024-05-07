import React, { useState } from 'react'
import logo from './assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter,  Routes,  Route} from "react-router-dom";
import AboutUs from './components/AboutUs'
import {Link} from 'react-router-dom'


const Menu = () => {
  const [icon,setIcon] = useState(false)
  const handleClick = () => {
    setIcon(!icon)
  }
  return (
   <section>
    <div className='bg-slate-100 flex items-center '>

       <div className=' basis-1/2 md:basis-2/5'> <img src={logo} className='absolute h-16 top-16 p-2 ml-6 sm:top-10 sm:left-10 md:static  md:h-20 lg:h-24 lg:ml-28   xl:ml-52'></img></div>
      
     <div className='basis-1/2 md:hidden'> <div className='px-4 py-5 ml-24 sm:ml-52 md:hidden' onClick={handleClick} > 
       {icon ? <span className=' bg-slate-100' ><FontAwesomeIcon icon={faRectangleXmark} size="lg" style={{color: "#039700",}} /> </span>: 
       <span className='  bg-slate-100' > <FontAwesomeIcon icon={faBars} size="lg" style={{color: "#039700",}}/></span> }  
        </div>
        <div className= {icon ? 'inline text-right ' : 'hidden'}  >
        <Link className='block pr-5 text-sm font-semibold hover:text-[#039700]' to='/'>Home</Link>
        <Link className='block pr-5 text-sm font-semibold mt-2 hover:text-[#039700]' to='/about'>About Us</Link>
        <Link className='block pr-5 text-sm font-semibold mt-2 hover:text-[#039700]' to='/contract'>Contract Services</Link>
        <Link className='block pr-4 text-sm font-semibold mt-2 hover:text-[#039700]' to='/noncontract'>Non-Contract Services</Link>
        <Link className='block pr-5 text-sm font-semibold mt-2' to='/servicespage'>Services/Parts</Link>
        <Link className='block pr-5 text-sm font-semibold mt-2 pb-2 hover:text-[#039700]' to='/contactus'>Contact Us</Link>
        </div>
        </div>

      <div className='hidden md:basis-3/4 md:flex md:text-xs md:justify-evenly md:items-center md:ml-16 lg:ml-48  xl:ml-52'>
        <Link className=' font-semibold hover:text-[#039700] active:text-[#039700] ' to='/'>Home</Link>
        <Link className='font-semibold hover:text-[#039700] active:text-[#039700] ' to='/about'>About Us</Link>
        <Link className='font-semibold hover:text-[#039700] active:text-[#039700] ' to='/contract'>Contract Services</Link>
        <Link className='font-semibold hover:text-[#039700] active:text-[#039700] ' to='/noncontract'>Non-Contract Services</Link>
        <Link className='font-semibold hover:text-[#039700] active:text-[#039700] ' to='/servicespage'>Services/Parts</Link>
        <Link className='font-semibold hover:text-[#039700] active:text-[#039700] ' to='/contactus'>Contact Us</Link>
        </div>
        </div> 
         </section>
   
  )
}

export default Menu