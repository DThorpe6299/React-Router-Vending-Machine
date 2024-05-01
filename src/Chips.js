import React from "react";
import crisps from './Chips.webp'
import GoBack from './GoBack';
import './ImageStyling.css'

const Chips =()=>{
    return(
        <div>
            <img className="image" src={crisps} alt="various chips"/>
            <GoBack/>
        </div>
    )
}
export default Chips;
