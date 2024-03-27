// import './App.css';
import About from './About';
import Footer from './Footer';
import Menu from './Menu';
import Header from './Header';
import Noncontract from './Noncontract';
import Services from './Services';


function App() {
  return (
    <div className="bg-black">
    <Header/>
    <Menu/>
    <About/>
    <Services/>
    {/* <Noncontract/> */}
    <Footer/>

    </div>
  );
}

export default App;
