import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { ShopContext } from "../../context/ShopContext";
import shopping_bag_icon from "../../assets/shopping_bag_icon.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link style={{ textDecoration: "none" }} to={"/"}>
          <p>Examen Store</p>
          {menu === "shop" ? <></> : <></>}{" "}
        </Link>
      </div>

      <ul className="navbar-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
            Shop
          </Link>{" "}
          {menu === "shop" ? <hr /> : <></>}{" "}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/mens">
            Mens
          </Link>{" "}
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to="/womens"
          >
            Womens
          </Link>{" "}
          {menu === "womens" ? <hr /> : <></>}
        </li>
      </ul>

      <div className="navbar-searchBar-cart">
        <form>
          <input
            type="text"
            id="searchBar"
            name="searchBar"
            placeholder={"search"}
          />
        </form>

        <Link to="/cart">
          <img src={shopping_bag_icon} alt="Cart" />
        </Link>
        <div className="navbar-cart-counter">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
