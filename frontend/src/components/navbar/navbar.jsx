import React from "react";
import './navbar.css';
{/* import logo from '../assets/logo*/}


const Navbar = () => {
    return (

        <div className='navbar'>

            <div className='navbar-logo'>
                <img src={"null"} alt="" /> {/* Logo image */}
                <p>Butik</p>
            </div>

            <ul className="navbar-menu">
                <li>Shop <hr/></li>
                <li>Men</li>
                <li>Women</li>
            </ul>

            <div className="navbar-searchBar-cart">
                <form>
                    <input type="text" id="searchBar" name="searchBar" placeholder={"search"} />
                </form>

                {/* Font awesome shopping bag icon */}
                <div className="navbar-cart-counter">0</div>
            </div>

        </div>
    )
}

export default Navbar;