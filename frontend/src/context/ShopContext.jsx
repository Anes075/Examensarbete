import React, { createContext, useEffect, useState } from "react";
import { fetchItems } from "../utils/fetchItems";
import allItems from "../utils/allItems.js";

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < allItems.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContext = createContext(null);
const url =
  "https://examen-databas-default-rtdb.europe-west1.firebasedatabase.app/all-products/.json";

/*console.log(allItems);*/

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetchItems(url).then((allProductsArray) => {
      setAllProducts(allProductsArray);
    });
  }, []);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  /* retrives the sum value for every object that has a value above 0 */
  const getTotalCartSum = () => {
    let totalSum = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = allItems.find((product) => product.id === Number(item));
        totalSum += itemInfo.price * cartItems[item];
      }
      return totalSum;
    }
  };

  /* displays the total amount of items in the cart */
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
    allItems,
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
