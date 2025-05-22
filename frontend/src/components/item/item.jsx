import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="item">
      <div className="product-image-container">
        <Link to={`/product/${props.id}`}>
          <img src={props.image} alt="product image" />{" "}
        </Link>
      </div>
      <p>{props.name}</p>
      <p>{props.price} kr</p>
    </div>
  );
};

export default Item;
