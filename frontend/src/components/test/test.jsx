import React, {useEffect, useState} from "react";
 import { fetchItems } from "../../utils/fetchItems"; 
import './test.css';
import Item from "../item/item";



const Test = () => {
    
    const [shopItems, setShopItems] = useState([]);
    const url = "https://examen-databas-default-rtdb.europe-west1.firebasedatabase.app/collections/.json";

    useEffect(() => {
        fetchItems(url)                                        
            .then((itemsListArray) => {                    
                setShopItems(itemsListArray);
            })
    }, []);

    console.log(shopItems);

    return (
        <div className="test">
            <h2>Test</h2>
            <hr/>
            <div className="test-item">
                {shopItems.map((i)=>{
                   console.log(i.id);
                    return <Item key={i.id} id={i.id} name={i.name} image={i.image} price={i.price}/>
                })}
            </div>
        </div>
    )
}

export default Test;