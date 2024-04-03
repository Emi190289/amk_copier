import React from 'react'
import Header from '../Header'
import Menu from '../Menu'
import Footer from '../Footer'
import serviceparts from '../assets/serviceparts.jpg'

const Servicespage = () => {
  return (
    <div>
      <Header />
      <Menu />
      <img src={serviceparts} class='h-48'></img>
      <div className='bg-slate-100'>
      <p className='text-center font-semibold text-2xl p-4'>Gallery of Services/Parts</p></div>
      <Footer />
    </div>
  )
}

export default Servicespage