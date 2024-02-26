import "./Navbar.css"
import navlogo from "../../Assets/nav-logo.svg"
import navProfile from "../../Assets/nav-profile.svg"

const Navbar = () => {
  return (
    <div className='navbar'>
    <img src = {navlogo} className='nav-logo'></img>
    <img src={navProfile} className='nav-profile'></img>
    </div>
  )
}

export default Navbar