import React, { useContext } from "react";
import "./cartItems.css";
import { ShopContext } from "../../context/ShopContext";

const CartItems = () => {
  const { allProducts, CartItems, removeFromCart } = useContext(ShopContext);
  return (
    <div className="cart-items">
      <div className="cart-items-format-top">
        <p>Quantity</p>
        <p>Size</p>
        <p>Price</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {allProducts.map((i) => {
        if (CartItems[i.id] > 0) {
          return (
            <div>
              <div className="cart-items-format">
                <img src={i.image} alt="" className="product-image-icon" />
                <p>i.name</p>
                <p>{i.price} kr</p>
                <button className="cart-items-quantity">
                  {CartItems[i.id]}
                </button>
                <p>{i.price * CartItems[i.id]} kr</p>
                <button
                  onClick={() => {
                    removeFromCart(i.id);
                  }}
                >
                  X
                </button>
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cart-items-down"></div>
    </div>
  );
};

export default CartItems;
