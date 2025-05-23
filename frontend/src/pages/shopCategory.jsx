import React, { useContext } from "react";
import "./css/ShopCategory.css";
import { ShopContext } from "../context/ShopContext";
import Item from "../components/Item/Item";

const ShopCategory = (props) => {
  const { allProducts } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <div className="shop-category-products">
        {allProducts.map((i) => {
          if (props.category === i.category) {
            return (
              <Item
                key={i.id}
                id={i.id}
                name={i.name}
                image={i.image}
                price={i.price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
