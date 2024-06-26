import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <header className=' py-2 text-center text-slate-200 sm:flex sm:items-center sm:justify-center '> 
           <div className=' '><FontAwesomeIcon icon={faPhone} />
            <p className='inline m-4' >+971 562678637</p></div>
            <div className=' '><FontAwesomeIcon icon={faEnvelope} />
            <p className='inline m-4'>Sales@amkcopiers.ae</p></div>
    </header>
  )
}

export default Header