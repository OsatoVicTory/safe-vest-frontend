import React from "react";
import "./Index.css";
import { Link } from "react-router-dom";
import plus from "../svgs/circle.svg";

const Balance = ({ Data, color }) => {

    return (
        <div className="balance_container">
            <div className="balance_wrapper">
                <div className="balance_top">
                    <span className="med_txtt">TOTAL BALANCE</span>
                    <span className="big_txtt" style={{color: color}}>&#8358;{Data.amt}.00</span>
                </div>
                <div className="balance_base" style={{padding: "0px"}}>
                    {Data.body.map((val, idx) => (
                        <Link to={val.link} className="base_content"key={idx} style={{ textDecoration:"none"}}>
                            {val.svg}
                            <span className="small_txtt" style={{color: color}}>{val.name}</span>
                        </Link>
                    ))}
                    
                </div>
            </div>
            <div className="bal_interest">
                <span className="med_txtt">INTEREST RATE</span>
                <span className="big_txtt" style={{color: color}}>10%</span>
                <span className="small_txtt">Per Annum</span>
            </div>
        </div>
    )
} 

export default Balance;