import React, { useContext } from "react";
import './css/shopCategory';
import { ShopContext } from "../context/shopContext";
import Item from "../components/item/item";

const ShopCategory = (props) => {

    const {allProducts} = useContext(ShopContext);

    return(
        <div className="shop-category">
           <div className="shop-category-index">
                    <p>
                        <span>Listing X-Y out of Z products</span>
                    </p>

                <div className="shop-category-sort">
                    <p>Sort By</p>
                </div>
            </div> 

            <div className="shop-category-products">
                {allProducts.map((i)=>{
                    if(props.category === i.category){
                        return <Item key={i.id} id={i.id} name={i.name} image={i.image} price={i.price}/>
                    }
                    else{
                        return null;
                    }
                })}
            </div>
        </div>
    )
}

export default ShopCategory;