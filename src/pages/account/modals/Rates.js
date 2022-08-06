import React, { useState } from "react";
import img from "../../../svgs/circle-plain.svg";
import { useNavigate } from "react-router-dom";
import Slider from "../../../components/perfectslider/Slider";
import Box from "../../../components/Box/Box";
import data from "./ratesData";
import "./Index.css";

const Rates = () => {

    const [leave, setLeave] = useState(false);
    const date = String(new Date()).slice(0, 25);
    const hr = String(new Date().getHours()) >= 12;
    const today = date + (hr ? " PM" : ' AM')
    const navigate = useNavigate();
    const handleNavigate = () => {
        setLeave(true);
        setTimeout(() => {
            navigate(-1);
        }, 1000);
    }

    const Data = data;

    return (
        <div className="modal" style={{ zIndex: "1000" }}>
            <div className="popup_dummy" onClick={handleNavigate}></div>
            <div className="popup_main">
                <Slider zIndex={1000} leave={leave}>
                    <div className="popup_top">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" 
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
                        strokeLinejoin="round" className="x" style={{color: "black"}} onClick={handleNavigate}>
                            <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </div>
                    
                    <div className="popup_body">
                        <h2>Today's Rates</h2>
                        <span className="small_txt">{today} (Lagos)</span>
                        <span className="small_txt">Current Rates across all saving products. Updated daily</span>
                        <div className="flex_boxes">
                            {Data.map((val, idx) => (
                                <Box key={idx}>
                                    <div className="img_div">{val.svg}</div>
                                    <div className="box_txts">
                                        <span className="big_thick" style={{color: val.color}}>{val.name}</span>
                                        <span className="small_light">{val.value}</span>
                                    </div>
                                </Box>
                            ))}
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Rates;