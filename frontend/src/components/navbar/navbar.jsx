import React, { useState } from "react";
import { Link } from "react-router-dom"
import './navbar.css';
{/* import logo from '../assets/logo*/}


const Navbar = () => {

    const [menu,setMenu] = useState("shop");

    return (

        <div className='navbar'>

            <div className='navbar-logo'>
                <img src={"null"} alt="" /> {/* Logo image */}
                <p>Butik</p>
            </div>

            <ul className="navbar-menu">
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none', color: 'inherit'}} to='/'>Shop</Link> {menu==="shop"?<hr/>:<></>} </li>
                <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration: 'none', color: 'inherit'}} to='/mens'>Mens</Link> {menu==="mens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration: 'none', color: 'inherit'}} to='/womens'>Womens</Link> {menu==="womens"?<hr/>:<></>}</li>
            </ul>

            <div className="navbar-searchBar-cart">
                <form>
                    <input type="text" id="searchBar" name="searchBar" placeholder={"search"} />
                </form>

                {/* Shopping Cart logo */}
                <Link to='/cart'><button>Cart</button></Link>
                <div className="navbar-cart-counter">0</div>
            </div>

        </div>
    )
}

export default Navbar;