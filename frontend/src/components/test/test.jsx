import React, {useEffect, useState} from "react";
 import { fetchItems } from "../../utils/fetchItems"; 
import './test.css';
import Item from "../item/item";



const Test = () => {
    
    const [shopItems, setShopItems] = useState([]);

    useEffect(() => {
        fetchItems()                                        
            .then((itemsListArray) => {                    
                setShopItems(itemsListArray);
            })
    }, []);

    console.log(shopItems);

    return (
        <div className="test">
            <h1>Test</h1>
            <div>
                {shopItems.map((i)=>{
                   /* console.log(i.id); */
                    return <Item key={i} id={i.id} name={i.name} image={i.image} price={i.price}/>
                })}
            </div>
        </div>
    )
}

export default Test;