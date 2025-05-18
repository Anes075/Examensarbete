import React, { createContext, useEffect, useState } from "react";
import { fetchItems } from "../utils/fetchItems";

export const ShopContext = createContext(null);
const url =
  "https://examen-databas-default-rtdb.europe-west1.firebasedatabase.app/all-products/.json";

const ShopContextProvider = (props) => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetchItems(url).then((allProductsArray) => {
      setAllProducts(allProductsArray);
    });
  }, []);

  const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < allProducts.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };

  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextValue = { allProducts, cartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
