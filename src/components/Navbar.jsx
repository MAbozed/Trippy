import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import { useState } from "react";

// Set state
// Make Handleclick Function
const Navbar = () => {
  const [mobileMenuActive , setMobileMenuActive] = useState(false)
  function handelMenu() {
    setMobileMenuActive((prevState) => !prevState);
  }

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Trippy</h1>
      <div className="menu-icons">
        <i className={mobileMenuActive ? 'fas fa-times' : 'fas fa-bars'} onClick ={handelMenu}></i>
        {/* <i className="fas fa-times"></i> */}
      </div>
      <ul className={mobileMenuActive ? 'navbar-menu active' : 'navbar-menu'}>
        {MenuItems.map((item,index) => {
          return(
          <li key={index}>
            <Link to={item.url} className= {item.cName}>
              <i className={item.icon}></i>{item.title}
            </Link>
          </li>)
        })}
        <button><Link to='/signup' className="btn-sign">Sign Up</Link></button>
      </ul>
    </nav>
  )
}

export default Navbar
