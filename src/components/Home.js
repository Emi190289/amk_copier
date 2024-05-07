import React from 'react'
import About from '../About';
import Footer from '../Footer';
import Menu from '../Menu';
import Header from '../Header';
import Noncontract from '../Noncontract';
import Services from '../Services';
import contact_img1 from '../assets/contact_picture.jpg'
import { useNavigate } from 'react-router-dom';
// import { FaWhatsapp } from "react-icons/fa";

const Home = () => {
  const navigate =useNavigate()
  const handleclick = ()=>{
    navigate('/contactus')
  }

  return (
    <div className="bg-black">
    <Header/>
    <Menu/>
    <About/>
    {/* <div className=' '>
      <a><FaWhatsapp className='text-white'/></a>
    </div> */}
    <div className='bg-[#039700] text-slate-100 text-center p-10 '>
          <p className='text-3xl font-bold  md:text-4xl' data-aos="fade-down" data-aos-duration="1000">WELCOME TO AMK COPIERS</p>
        <p className='text-base text-justify leading-8 md:py-6 lg:px-6 xl:px-16 font-medium mt-6  ' data-aos="fade-up" data-aos-duration="1500">Versatile enough to successfully service Canon, HP, Konica Minolta, Xerox MFP and LaserJet brands. Adept at quickly diagnosing a problem discussing options with customers and performing reliable regular maintenance tasks. Specializes in old and new copier technology.</p></div>
    <Services/>
    <Noncontract/>
    <section className='xl:flex xl:bg-slate-200 xl:p-20 '>
      <div className='bg-[#039700] text-slate-100 text-center p-10 xl:basis-1/2 xl:pt-20  xl:rounded-lg '>
        <p className='text-3xl font-bold xl:text-5xl' data-aos="fade-up" data-aos-duration="1000" >Get in touch with Us</p>
        <button className='hidden xl:border-4 xl:mt-10 xl:px-8 xl:py-4 xl:text-2xl xl:rounded-xl xl:font-semibold xl:inline' onClick={handleclick}> Contact</button></div>
      <div className='bg-slate-100 p-4 lg:pb-14 lg:px-10 xl:basis-1/2 xl:px-0 xl:pb-0 xl:pt-0 ' data-aos="fade-up" data-aos-duration="1000" >
        <img src={contact_img1} className=' md:h-96 md:w-full xl:rounded-lg'></img>
        </div>
    </section>
    <Footer/>

    </div>
  )
}

export default Home