import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import img from "../../svgs/circle-plain.svg";
import { useNavigate } from "react-router-dom";
import Slider from "../perfectslider/Slider";
import "../../pages/account/modals/Index.css";
import "./info.css";
import info from "./infoData";


const Info = ({ type }) => {

    const Info = info[type];

    const [leave, setLeave] = useState(false);
    const navigate = useNavigate();
    const handleNavigate = () => {
        setLeave(true);
        setTimeout(() => {
            navigate(-1);
        }, 1000);
    }

    return (
        <div className="modal" style={{ zIndex: "1000" }}>
            <div className="popup_dummy" onClick={handleNavigate}></div>
            <div className="popup_main">
                <Slider zIndex={1000} leave={leave}>
                    <div className="popup_top">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" 
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
                        strokeLinejoin="round" className="x" style={{color: Info.color}} onClick={handleNavigate}>
                            <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </div>
                    
                    <div className="popup_body">
                        <h3 className="info-h1" style={{color: Info.color}}>Info on {type}</h3>
                        <ul className="info-lists">
                            {Info.body.map((val,idx) => (
                                <li className="info-list" key={idx}>
                                    <span style={{color: Info.color}} className="biginfo_txt">{val.question}</span>
                                    <span className="smallinfo_txt">{val.ans}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Info;