import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import cancel from "../../../svgs/arrow-right.svg";
import Slider from "../../../components/perfectslider/Slider";
import "./Index.css";
import Box from "../../../components/Box/Box";
import "../../../components/Box/Box.css";


const Faqs = () => {
    
    const [leave, setLeave] = useState(false);
    const navigate = useNavigate();
    const handleLeave = () => {
        setLeave(true);
       
        setTimeout(() => {
            navigate(-1);
        }, 500);
    }
    const Data = [
        {label:"Where is the company offering this investment located", value: "My guy, somewhere in a land of NoWhere" },
        {label: "Is this investment insured", value: "Yes, why wouldn't it"},
        {label: "What happens to my capital in case of disaster", value: "God knows Best"},
        {label: "Who monitors the investment for me", value: "On God"},
        {label: "Is the investment taxed", value: "Even in freetown, nothing is ..."},
        {label: "What does my investment cover", value: "typing ..."}
    ]
    return (
        <div className="container">
            <div className="dummy" onClick={() => handleLeave()}></div>
            <Slider zIndex={100000000} leave={leave}>
                <div className="top">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" 
                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
                    strokeLinejoin="round" className="x" style={{color: "purple"}} onClick={handleLeave}>
                        <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </div>
                    
                <div className="body">
                    <h1 style={{color: "purple"}}>INVESTMENT FAQs</h1>
                    <div className="box_contain">
                        {Data.map((val, idx) => (
                            <Box key={idx}>
                                <div className="box_txts">
                                    <h3 style={{color: "purple"}}>{val.label}</h3>
                                    <span className="small_light">{val.value}</span>
                                </div>
                            </Box>
                        ))}
                    </div>
                    <span className="span">That Should Answer All Of Your Questions Right</span>
                </div>
            </Slider>
        </div>
    )
}

export default Faqs;