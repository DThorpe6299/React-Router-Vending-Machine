import React from "react";
import Sweets from './Candy.webp'
import './ImageStyling.css'

const Candy =({toggleMenu})=>{
    return(
        <div onClick={toggleMenu}>
            <img className="image" src={Sweets} alt="various candies"/>
        </div>
    )
}
export default Candy;
