import './css/style.css'
import Navbar from './components/Navbar';
import PageLinks from './components/PageLinks';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Tours from './components/Tours';

function App() {

  return(//javascript part
    <main>{/* React part */}
        <Navbar></Navbar>
        <Hero/>
        <About/>
        <Services/>
        <Tours/>
        <Footer/>
    </main>
  );
}

export default App
