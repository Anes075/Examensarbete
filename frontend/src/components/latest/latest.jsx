import React, {useEffect, useState} from "react";
import { fetchItems } from "../../utils/fetchItems"; 
import './latest.css';
import Item from "../item/item";



const Latest = () => {
    
    const [shopItems, setShopItems] = useState([]);
    const url = "https://examen-databas-default-rtdb.europe-west1.firebasedatabase.app/collections/.json";

    useEffect(() => {
        fetchItems(url)                                        
            .then((itemsListArray) => {                    
                setShopItems(itemsListArray);
            })
    }, []);

    /*console.log(shopItems);*/

    return (
        <div className="newArrivals">
            <h2>New arrivals</h2>
            <hr/>
            <div className="latest-item">
                {shopItems.map((i)=>{
                   /*console.log(i.id);*/
                    return <Item key={i.id} id={i.id} name={i.name} image={i.image} price={i.price}/>
                })}
            </div>
        </div>
    )
}

export default Latest;