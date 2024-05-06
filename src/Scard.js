import React, { useState } from 'react'
import mail from './assets/1.png'


const Scard = () => {
    const [data1,setData1]=useState([
        {   id:1,
            image1:"1",
            heading:"FREE Consultations",
            text:"We provide simple and clear consultation to help you decide on the machines.Sense is more important, words are just a tool"
         },
         { id:2,
           image1:'2',
           heading:"Installation Provided",
           text:"We will provide full on-site installation & training for key operators and general users free of charge"
       },
       { id:3,
        image1:'3',
        heading:"Highest Quality Machines",
        text:"We strive to offer you the widest choice of highest quality machines from the thousands of products available"
    },
    { id:4,
        image1:'4',
        heading:"Service Center",
        text:"We have experienced Service Technicians to resolve your copier issues"
    },
    { id:5,
        image1:'5',
        heading:"Copier Service/Repairing",
        text:"We are here to help ensure that your machines are up and running as quickly as possible"
    },
    { id:6,
        image1:'6',
        heading:"Info Center 24/7",
        text:"All messages submitted to us will be monitored closely by us personally"
    }
           ])
  return (
    <>
    <h2 className='text-4xl font-bold text-center pt-16 ' data-aos="zoom-in" data-aos-duration="1000">Check Out Our Services</h2>
    <div className='mt-4 pb-12 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 xl:px-20 xl:pb-16 xl:mt-6 '>
        {data1.map((dataa)=> {
            return(
            <div className='text-center pt-12 flex-col items-center justify-center mx-4 md:mx-4 lg:mx-8' data-aos="fade-up" data-aos-duration="2000">
                
          <div className='flex justify-center   mb-4 ' > <img className="w-12 h-12 " src={require(`./assets/${dataa.image1}.png`)}></img></div>
            <p className='text-2xl mb-2  font-bold '>{dataa.heading}</p>
           <p className='mt-6 leading-7'>{dataa.text}</p></div>
)})}
</div>
   </>
  )
}

export default Scard