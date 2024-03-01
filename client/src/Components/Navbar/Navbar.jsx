import React, { useContext, useState } from "react";
import './Navbar.css';
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar =()=>{
    const { totalItem } = useContext(ShopContext)

    const [menu,setMenu] = useState("shop")
    return(
        <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>Shop Booble</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style = {{textDecoration:'none'}}to='/'>Shop</Link>{menu==="shop"?<hr />:<></>} </li>
            <li onClick={()=>{setMenu("Anime")}}><Link style = {{textDecoration:'none'}} to='/anime'>Anime</Link>{menu==="Anime"?<hr />:<></>} </li>
            <li onClick={()=>{setMenu("Charchaters")}}><Link style = {{textDecoration:'none'}} to='/Charchaters'>Charchaters</Link>{menu==="Charchaters"?<hr />:<></>} </li>
            <li onClick={()=>{setMenu("Idols")}}><Link style = {{textDecoration:'none'}} to = '/Idols'>Idols</Link>{menu==="Idols"?<hr />:<></>} </li>
        </ul>
        <div className="nav-login-cart">
        {localStorage.getItem("auth-token")?<button onClick={()=>{localStorage.removeItem("auth-token");window.location.replace("/")}}>Logout</button>:<Link to= '/login'><button>Login</button></Link> }
        
        <Link to='/cart'> <img src={cart_icon} alt="" /> </Link>
        
        <div className="nav-cart-count"> {totalItem()} </div>

        </div>

        </div>
    )
}

export default Navbar