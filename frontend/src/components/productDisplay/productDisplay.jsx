import React, { useContext } from "react";
import "./productDisplay.css";
import { ShopContext } from "../../context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="product-display">
      <div className="product-display-left">
        <div className="product-display-container">
          <img className="product-display-img" src={product.image} alt="" />
        </div>
      </div>

      <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="product-display-right-price">
          <p>{product.price} kr</p>
        </div>
        <div className="product-display-right-size">
          <h2>Select Size</h2>
          <ul className="product-display-right-size-list">
            <li>S</li>
            <li>M</li>
            <li>L</li>
            <li>XL</li>
            <li>XXL</li>
          </ul>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDisplay;
