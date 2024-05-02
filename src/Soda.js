import React from "react";
import Drinks from './soda.jpg'
import './ImageStyling.css'

const Soda =({toggleMenu})=>{
    return(
        <div onClick={toggleMenu}>
            <img className='image' src={Drinks} alt="various sodas"/>
        </div>
    )
}
export default Soda;
