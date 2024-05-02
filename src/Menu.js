import React, { useState } from "react";
import {NavLink, Routes, Route } from 'react-router-dom';
import Candy from "./Candy";
import Chips from "./Chips";
import Soda from "./Soda";
import './Menu.css'
import GoBack from "./GoBack";

const Menu = () => {
    const [onMenu, setOnMenu] = useState(true)
    const toggleMenu = () => {
        setOnMenu(!onMenu);
    }
    return (
        <nav>
            <div className='Menu'>
                {onMenu && (
                    <>
                        <NavLink onClick={toggleMenu} exact to="/candy">Candy</NavLink>
                        <NavLink onClick={toggleMenu} exact to="/chips">Chips</NavLink>
                        <NavLink onClick={toggleMenu} exact to="/soda">Soda</NavLink>
                    </>
                )}
                <div className={onMenu ? 'hidden' : 'Goback'}>
                    <GoBack toggleMenu={toggleMenu}/>
                </div>
            </div>
            

            <div className="Menu-routes">
            <Routes>
                <Route path="/candy" element={<Candy toggleMenu={toggleMenu}/>} />
                <Route path="/chips" element={<Chips toggleMenu={toggleMenu}/>} />
                <Route path="/soda" element={<Soda toggleMenu={toggleMenu}/>} />
            </Routes>
            </div>
        </nav>
    );
}

export default Menu;