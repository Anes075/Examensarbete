import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./cartItems.css";
import { ShopContext } from "../../context/ShopContext";

const CartItems = () => {
  const { getTotalCartSum, allItems, cartItems, removeFromCart } =
    useContext(ShopContext);

  return (
    <div className="cart-items">
      <div className="cart-items-format-top">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {allItems.map((i) => {
        if (cartItems[i.id] > 0) {
          return (
            <div key={i.id}>
              <div className="cart-items-format">
                <img src={i.image} alt="" className="product-image-icon" />
                <p>{i.name}</p>
                <p>{i.price} kr</p>
                <button className="cart-items-quantity">
                  {cartItems[i.id]}
                </button>
                <p>{i.price * cartItems[i.id]} kr</p>
                <button
                  className="cart-items-remove"
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

      <div className="cart-items-down">
        <div className="cart-items-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cart-items-total-item">
              <p>Subtotal</p>
              <p>{getTotalCartSum()} kr</p>
            </div>
            <hr />
            <div className="cart-items-total-item">
              <p>Shipping Fee</p>
            </div>
            <hr />
            <div className="cart-items-total-item">
              <h2>Total</h2>
              <h2>{getTotalCartSum()} kr</h2>
            </div>
          </div>
          <button>Proceed to Checkout</button>
        </div>
      </div>

      <div className="delivery-information">
        <h2>Delivery Information</h2>
        <div className="delivery-form">
          <form action="">
            <div className="delivery-input">
              <label htmlFor="fname">Name</label>
              <input type="text" name="fname" id="fname" />
            </div>

            <div>
              <label htmlFor="lname">Last Name</label>
              <input type="text" name="lname" id="lname" />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>

            <div>
              <label htmlFor="street">Street</label>
              <input type="text" name="street" id="street" />
            </div>

            <div>
              <label htmlFor="city">City</label>
              <input type="text" name="city" id="city" />
            </div>

            <div>
              <label htmlFor="zipcode">Zipcode</label>
              <input type="text" name="zipcode" id="zipcode" />
            </div>

            <div>
              <label htmlFor="phonenumber">Phone Number</label>
              <input type="text" name="phonenumber" id="phonenumber" />
            </div>

            <div>
              <label htmlFor="paymentmethod">Payment Method</label>
              <input type="radio" name="stripe" id="stripe" />
            </div>

            <div>
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
