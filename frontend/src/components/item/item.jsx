import React from "react";
import './item.css';

const Item = (props) => {
    return (
    <div className="Item">
        <img src={props.image} alt="#" />
        <p>{props.name}</p>
        <p>{props.price}</p>
    </div>
    )
}

export default Item;