import React, { createContext, useEffect, useState } from "react";
import { fetchItems } from "../utils/fetchItems"; 

export const ShopContext = createContext(null);

    const ShopContextProvider = (props) =>{

        const [allProducts, setAllProducts] = useState([]);
        const url = "https://examen-databas-default-rtdb.europe-west1.firebasedatabase.app/all-products/.json";
    
            useEffect(() => {
                fetchItems(url)                                        
                    .then((allProductsArray) => {                    
                        setAllProducts(allProductsArray);
                     })
            }, []);


        const contextValue = {allProducts};

        return(
            <ShopContext.Provider value={contextValue}>
               {props.children} 
            </ShopContext.Provider>
        )
    }

export default ShopContextProvider;