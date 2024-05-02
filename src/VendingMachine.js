import React from "react";
import Menu from "./Menu";
import "./VendingMachine.css"
import { BrowserRouter } from "react-router-dom";

const VendingMachine = () => {
    return (
            <div className="machine">
                <div>Hello! Please choose a snack!</div>
                <div className="machine">
                    <BrowserRouter>
                        <Menu />
                    </BrowserRouter>
                </div>
            </div>
    );
}

export default VendingMachine;
