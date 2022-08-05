import React from "react";
import "./Box.css";

const Box = ({ children }) => {

    return (
        <div className="box-container">
            {children}
        </div>
    )
}

export default Box;