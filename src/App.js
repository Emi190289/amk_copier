// import './App.css';
// import About from './About';
// import Footer from './Footer';
// import Menu from './Menu';
// import Header from './Header';
// import Noncontract from './Noncontract';
// import Services from './Services';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Promotions from './components/Promotions';
import Servicespage from './components/Servicespage';
import ContactUs from './components/ContactUs'
import Noncontractpage from './components/Noncontractpage';


function App() {
  return (
    <div className="bg-black">
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/about' element={<AboutUs />}></Route>
        <Route path='/promotions' element={<Promotions />}></Route>
        <Route path='/noncontract' element={<Noncontractpage />}></Route>
        <Route path='/servicespage' element={<Servicespage />}></Route>
        <Route path='/contactus' element={<ContactUs />}></Route>
      </Routes>
    {/* <Header/>
    <Menu/>
    <About/>
    <Services/>
    <Noncontract/>
    <Footer/> */}

    </div>
  );
}

export default App;
