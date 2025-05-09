import React from "react";
import './hero.css';
{/* import hero image from '../assets/hero image*/}

const Hero = () => {
    return(
        <div className='hero'>

            <div className="hero-top">
                <img src="#" alt="#" />
            </div> 

            <div className="hero-bottom">
                <h2>Hero Text</h2>
                <p>New Collections</p>

                <button className="hero-button">Check out the latest products</button>
            </div>


        </div>
    )
}

export default Hero;