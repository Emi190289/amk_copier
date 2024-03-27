import React from 'react'
import about_image from './assets/about_image.png'
import path from './assets/path.png'

const About = () => {
  return (
    <section class='bg-slate-200 leading-8 md:flex md:leading-4 md:items-center md:pl-10 lg:pl-16'>
        <div class='pl-2 pt-2 md:basis-1/2'>
            <div class='text-center md:text-left'>
                <img src={path} alt='path for best' class='inline'></img>
                <p class='inline ml-2 text-sm'>Best Copier Solution</p>
            </div>
            <h1 class='font-bold text-center md:text-xl md:text-left'>Find Your Right Copier with us</h1>
            <p class='text-sm my-3 text-center leading-8 md:leading-4 md:text-left'>Connect to Get Effective and Instant Canon, HP, Konica Minolta, Xerox MFP and LaserJet brands Services.</p>
            <div class='text-center my-4 md:my-0 md:text-left'><button class='rounded-md text-lg border bg-[#039700] text-slate-200 px-2'>Services</button></div>
        </div>
        <div class='md:basis-1/2 '>
            <img src={about_image} alt='about info ' ></img>
        </div>
        
    </section>
  )
}

export default About