import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import logImg from "../assets/1.jpg"
import LogIn from "../components/LogIn"

const Log = () => {
  return (
    <>
        <Navbar />
        <Hero 
          cName = 'hero-mid'
          heroImg = {logImg}
          title = "Log In"
          btnClass="hide"
      />
        <LogIn />
        <Footer />
    </>
  )
}

export default Log