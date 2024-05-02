import React from "react";
import crisps from './Chips.webp'
import './ImageStyling.css'

const Chips =({toggleMenu})=>{
    return(
        <div onClick={toggleMenu}>
            <img className="image" src={crisps} alt="various chips"/>
        </div>
    )
}
export default Chips;
