import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons'
import noncontract from './assets/noncontract.jpg'
import {useNavigate} from 'react-router-dom'
// import Noncontractpage from './components/Noncontractpage'
 

const Noncontract = () => {
  const navigate =useNavigate()
  const handleclick = ()=>{
    navigate('/noncontract')
  }

  return (
    <section className='bg-slate-100 pb-8 p-4  lg:flex xl:px-24'>
       <div class='lg:basis-1/2' data-aos="fade-up" data-aos-duration="1000"><p className='text-3xl font-bold text-center pt-10'>Non Contract Services</p>
        <div class='mt-10 '> <p>AMK Copier offers our customers several options for servicing and maintaining 
        their Canon and Xerox copiers. In some cases, you may prefer to employ our services on a per job basis.</p>
        <p className='text-2xl font-bold  pt-8'>Our Non-contract Services Include The Following:</p>
        <ul className='mt-4 text-left'>
          <li class='flex mt-2'>   <FontAwesomeIcon icon={faCheckDouble} size="lg" style={{color: "#039700",}} />  <p class='ml-2'>Preventive maintenance defined by your specific needs and requirements.</p></li>
          <li class='flex mt-2'>  <FontAwesomeIcon icon={faCheckDouble} size="lg" style={{color: "#039700",}} /> <p class='ml-2'>Professional Field Service Technicians and IT Support fully trained and equipped with the necessary tools to diagnose, repair and maintain your equipment.</p></li>
            <li className=' flex mt-2'><FontAwesomeIcon icon={faCheckDouble} size="lg" style={{color: "#039700",}} /> <p class='ml-2'>Detailed Field Service Reports documenting the work performed within 48 hours.</p></li>
            <li className='flex mt-2'><FontAwesomeIcon icon={faCheckDouble} size="lg" style={{color: "#039700",}} /> <p class='ml-2'>We offer local coverage for those customers whose service contracts has expired or no longer under service maintenance. You can have the option of signing a service maintenance contract after we have serviced your equipment. We don’t employ subcontractors as we have our own technical team, retaining full accountability for quality of service.</p></li>
        </ul>
      <div class='mt-4 pl-6 '> 
       <button class='bg-[#039700] border-2 px-4 py-2 rounded-md text-slate-100' onClick={handleclick}>Read More</button></div></div>
      </div> 
        <div class=' mt-10   lg:mt-14 lg:inline lg:basis-1/2 xl:h-full' data-aos="fade-right" data-aos-duration="1000" > 
            <img src={noncontract} class='md:h-96 md:w-full lg:h-96 lg:px-6 xl:pl-10 xl:pr-4 xl:h-full '></img>
        </div>
    </section>
  )
}

export default Noncontract