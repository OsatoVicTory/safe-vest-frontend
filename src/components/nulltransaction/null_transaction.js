import React, { useState } from "react";
import "./null_transaction.css";
import { useNavigate } from "react-router-dom";
import Slider from "../perfectslider/Slider";
import nullImg from "../../svgs/null.png";


const NullTransaction = () => {

    
    const [leave, setLeave] = useState(false);
    const navigate = useNavigate();
    const handleLeave = () => {
        setLeave(true);
       
        setTimeout(() => {
            navigate(-1);
        }, 500);
    }
    
    
    return (
        <div className="transaction">
            <div className="dummy" onClick={handleLeave}></div>
            <Slider zIndex={1000000} leave={leave}>
                <div className="transaction_top">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" 
                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
                    strokeLinejoin="round" className="x" style={{color: "rgb(13,96,216)"}} onClick={handleLeave}>
                        <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </div>
                <div className="transaction_body">
                    <h1 style={{color: "rgb(13,96,216)"}}>No transactions at the moment</h1>
                    <span>Sorry but there are no transactions to be displayed right now</span>

                    <img src={nullImg} />
                </div>
            </Slider>
        </div>
    )
}

export default NullTransaction;