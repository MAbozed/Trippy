import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import SignUp from "../components/SignUp"
import signImg from "../assets/2.jpg"


const Sign = () => {
  return (
    <>
        <Navbar />
        <Hero 
          cName = 'hero-mid'
          heroImg = {signImg}
          title = "Sign Up"
          btnClass="hide"
      />
        <SignUp />
        <Footer />
    </>
  )
}

export default Sign