import React, { useState, useEffect } from 'react';
import "./nodata.css";
import { Link } from "react-router-dom";

const NoData = ({ body, changeVal }) => {

    return (
        <div className="nodata">
            <div className="nodata_content">
                <h1 style={{color: body.color}}>{body.type}</h1>
                <span>{body.desc}</span>
                <Link to={body.link[0]} onClick={changeVal} className="link_top" style={{textDecoration: "none",color: "white", background: body.color}}>
                    {body.type.includes("Invest") ? "Invest Now": body.type}
                </Link>
                <Link to={body.link[1]} className="link_base" style={{textDecoration: "none",color: body.color, border: `1px solid ${body.color}`}}>
                    Learn More
                </Link>
            </div>
        </div>
    )
}

export default NoData;