import React from "react";
import {NavLink, Routes, Route } from 'react-router-dom';
import Candy from "./Candy";
import Chips from "./Chips";
import Soda from "./Soda";
import './Menu.css'

const Menu = () => {
    return (
        <nav className="Menu">
            <NavLink exact to="/candy">Candy</NavLink>
            <NavLink exact to="/chips">Chips</NavLink>
            <NavLink exact to="/soda">Soda</NavLink>

            <div>
            <Routes>
                <Route path="/candy" element={<Candy />} />
                <Route path="/chips" element={<Chips />} />
                <Route path="/soda" element={<Soda />} />
            </Routes>
            </div>
        </nav>
    );
}

export default Menu;