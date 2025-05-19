import React, { createContext, useEffect, useState } from "react";
import { fetchItems } from "../utils/fetchItems";
import allItems from "../utils/allItems.js";

export const ShopContext = createContext(null);
const url =
  "https://examen-databas-default-rtdb.europe-west1.firebasedatabase.app/all-products/.json";

const ShopContextProvider = (props) => {
  const [allProducts, setAllProducts] = useState([]);
  const [allItems, setAllItems] = useState([]);

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

  const getTotalCartSum = () => {
    let totalSum = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = allProducts.find(
          (product) => product.id === Number(item)
        );
        totalSum += itemInfo.price * cartItems[item];
      }
      return totalSum;
    }
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    getTotalCartSum,
    allProducts,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
