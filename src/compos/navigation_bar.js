import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ShoppingCart } from "phosphor-react";
import "./navigation_bar.css";

import cart_icon from "../assets/cart.png"

export const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    return (
        <div className="navbar">
            <div className="links">
                <Link to="/"> Shop </Link>
                <Link to="/cart"> <ShoppingCart size={32} /> </Link>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link to='/'> Shop </Link>{menu==="shop"?<h/>:<></>}</li>
                <li onClick={()=>{setMenu("equipment")}}> <Link to='/equipment'> Equipment </Link>{menu==="equipment"?<h/>:<></>} </li>
                <li onClick={()=>{setMenu("clothes")}}> <Link to='/clothes'> Clothes </Link>{menu==="clothes"?<h/>:<></>} </li>
                <li onClick={()=>{setMenu("mainpage")}}> <Link to='/start'> Main </Link>{menu==="main"?<h/>:<></>} </li>
            </ul>
           <div className="nav-login-cart">
                <button onClick={()=>{setMenu("login")}}><Link to='/login_signup'>Login </Link>{menu==="login_signup"?<h/>:<></>}</button>
{/*                 <img src={cart_icon} alt="" /> */}
{/*                 <div className="nav-count-cart">0</div> */}
           </div>
        </div>
    );
};

export default Navbar;