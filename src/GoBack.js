import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";

const GoBack =({toggleMenu})=>{
    return(
        <nav>
            <NavLink onClick={toggleMenu} exact to='/'>
                Go Back
            </NavLink>
            <Routes>
                <Route path="/" />
            </Routes>
        </nav>
    )
}
export default GoBack;