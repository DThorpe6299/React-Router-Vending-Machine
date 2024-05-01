import React from "react";
import Sweets from './Candy.webp'
import GoBack from './GoBack';
import './ImageStyling.css'

const Candy =()=>{
    return(
        <div >
            <img className="image" src={Sweets} alt="various candies"/>
            <GoBack/>
        </div>
    )
}
export default Candy;
