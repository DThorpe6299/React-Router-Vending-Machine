import React from "react";
import { NavLink } from "react-router-dom";

const GoBack =()=>{
    return(
        <nav>
            <NavLink exact to='/'>
                Go Back
            </NavLink>
        </nav>
    )
}
export default GoBack;