import React from "react";
import Drinks from './soda.jpg'
import GoBack from './GoBack';
import './ImageStyling.css'

const Soda =()=>{
    return(
        <div>
            <img className='image' src={Drinks} alt="various sodas"/>
            <GoBack/>
        </div>
    )
}
export default Soda;
