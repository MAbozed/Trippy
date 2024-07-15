import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/night.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
import serviceImg from '../assets/3.jpg'

function Service() {
  return (
    <>
      <Navbar />
      <Hero 
          cName = 'hero-mid'
          heroImg = {serviceImg}
          title = "Services"
          btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
