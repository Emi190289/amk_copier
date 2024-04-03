import React from 'react'
import About from '../About';
import Footer from '../Footer';
import Menu from '../Menu';
import Header from '../Header';
import Noncontract from '../Noncontract';
import Services from '../Services';

const Home = () => {
  return (
    <div className="bg-black">
    <Header/>
    <Menu/>
    <About/>
    <Services/>
    <Noncontract/>
    <Footer/>

    </div>
  )
}

export default Home