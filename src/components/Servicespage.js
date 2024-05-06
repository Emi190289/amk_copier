import React from 'react'
import Header from '../Header'
import Menu from '../Menu'
import Footer from '../Footer'
import serviceparts from '../assets/serviceparts.jpg'
import gallery_1 from '../assets/gallery_1.jpeg'
import gallery_2 from '../assets/gallery_2.jpeg'
import gallery_3 from '../assets/gallery_3.jpeg'
import gallery_4 from '../assets/gallery_4.jpeg'
import gallery_5 from '../assets/gallery_5.jpeg'
import gallery_6 from '../assets/gallery_6.jpeg'
import gallery_7 from '../assets/gallery_7.jpeg'

const Servicespage = () => {
  return (
    <div>
      <Header />
      <Menu />
      
      <img src={serviceparts} class='h-72 sm:w-full md:h-96 lg:h-[32rem] xl:h-[36rem]'></img>
      <div className='bg-[#039700] text-slate-100 text-center p-10 '>
          <p className='text-3xl font-bold  md:text-4xl' data-aos="fade-down" data-aos-duration="1000">WELCOME TO AMK COPIER FZ-LLC</p>
        <p className='text-base text-justify leading-8 md:py-6 lg:px-6 xl:px-16 font-medium mt-6  ' data-aos="fade-up" data-aos-duration="1500">Versatile enough to successfully service Canon, HP, Konica Minolta, Xerox MFP and LaserJet brands. Adept at quickly diagnosing a problem discussing options with customers and performing reliable regular maintenance tasks. Specializes in old and new copier technology.</p></div>
      <div className='bg-slate-100'>
      <p className='text-center font-bold text-3xl lg:text-4xl p-12'data-aos="fade-down" data-aos-duration="1000">GALLERY OF SERVICE/PARTS</p>
      <div class='pb-20 grid p-8 gap-8 md:grid-cols-2 xl:grid-cols-3 xl:px-12 '>
        <img src={gallery_1} class='h-96 w-full md:h-96 xl:h-[32rem]' data-aos="fade-up" data-aos-duration="2000"></img>
        <img src={gallery_2} class='h-96 w-full md:h-96 xl:h-[32rem]' data-aos="fade-up" data-aos-duration="1500"></img>
        <img src={gallery_3} class='h-96 w-full md:h-96 xl:h-[32rem]' data-aos="fade-up" data-aos-duration="1000"></img>
        <img src={gallery_4} class='h-96 w-full md:h-96 xl:h-[32rem]' data-aos="fade-up" data-aos-duration="2000"></img>
        <img src={gallery_5} class='h-96 w-full md:h-96 xl:h-[32rem]' data-aos="fade-up" data-aos-duration="1500"></img>
        {/* <img src={gallery_6} class='h-96 w-full '></img> */}
        <img src={gallery_7} class='h-96 w-full md:h-96 xl:h-[32rem]' data-aos="fade-up" data-aos-duration="1000"></img>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default Servicespage