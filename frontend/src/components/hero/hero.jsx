import React, {useEffect, useState} from "react";
import './hero.css';
import { fetchItems } from "../../utils/fetchItems"; 

const Hero = () => {

    const [heroBanner, setHeroBanner] = useState([]);
    const url = "https://examen-databas-default-rtdb.europe-west1.firebasedatabase.app/hero/.json";

        useEffect(() => {
            fetchItems(url)                                        
                .then((heroArray) => {                    
                    setHeroBanner(heroArray);
                })
        }, []);

    return(
        <div className='hero'>

            <div className="hero-top">
                {heroBanner.map((i)=>{
                return <img key={i.id} src={i.image} alt="Hero image"/>
                })}

            </div> 

            <div className="hero-bottom">
                <h2>Force Majeure</h2>
                <p>New Collections</p>

                <button className="hero-button">Check out the latest products</button>
            </div>
        </div>
    )
}

export default Hero;