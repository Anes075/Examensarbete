import React from "react";
import './item.css';

const Item = (props) => {
    return (
    <div className="item">
        <div className="product-image-container">
        <img src={props.image} alt="product image" />
        </div>
        <p>{props.name}</p>
        <p>{props.price} kr</p>
    </div>
    )
}

export default Item;