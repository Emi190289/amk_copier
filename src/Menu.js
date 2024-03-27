import React from 'react'
import logo from './assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Menu = () => {
  return (
    <div class='bg-slate-100 flex items-center'>

       <div class=' basis-1/2 sm:basis-2/5'> <img src={logo} class='h-16 p-2 sm:w-32 sm:h-16 ml-6 sm:ml-28 xl:ml-52'></img></div>
      <div class='basis-1/2 sm:hidden'> <span class='bg-[#039700] rounded-full px-2  py-1 ml-24 bg-slate-100'><FontAwesomeIcon icon={faBars} /></span> </div>
      <div class='hidden sm:basis-3/5 sm:flex sm:text-xs sm:justify-evenly sm:items-center lg:ml-36 xl:ml-40'>
        <a>Home</a>
        <a>About Us</a>
        <a>Promotions</a>
        <a>Gallery</a>
        <a>Services</a>
        <a>Contact Us</a>
       </div>
    </div>
  )
}

export default Menu