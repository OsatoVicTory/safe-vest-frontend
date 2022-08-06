import React, { useState, useRef, useEffect } from 'react';
import "./scroll.css";
import { Link } from "react-router-dom";
import imag from "../../svgs/investment.jpg";
import Loading from '../loading';
import { useSelector } from 'react-redux';

const PerfectScroll = ({ props, amount }) => {
    
    const [array, setArray] = useState([]);
    const [loading, setLoading] = useState(false);
    const account = useSelector((state) => state.account);
    const isExplore = window.location.pathname.includes("explore");

    let billion = 1000000000, million=1000000, thousand=1000;

    const quantity = (val) => {
        if(val >= billion) return Math.floor(val/billion) + "B";
        else if(val >= million) return Math.floor(val/million) + "M";
        else if(val >= thousand) return Math.floor(val/thousand) + "K";
        else return val;
    }

    useEffect(() => {
        const handleAdd = () => {
            if(array.length == 0) {
                setLoading(true);
                setTimeout(() => {
                    setLoading(false);
                    setArray(props);
                }, 1500);
            } else {
                setLoading(false);
                setArray(props);  
            }      
        }
        handleAdd();
    }, [props])

    return (
        <div className='infinite_scroll'>
            <ul className="scroll_lists" id="scroll-lists">
                {array.map((val,idx) => (
                    <li className='scroll_list' key={idx}>
                        <Link to={val.url} className="scroll_link" style={{textDecoration: "none"}}>
                            <img src={imag} />
                            <div className='investment_dets'>
                                <h1>{val.name}</h1>
                                <div className="top_txtt">
                                    <span style={{color: "green", fontSize:"20px"}}>{val.percent}% </span>
                                    <span style={{color: "black", marginLeft:"5px"}}>{val.returns.slice(3, 15)}</span>
                                </div>
                                <div className='dets_mid'>
                                    <div className='dets_bal'>
                                        <span className="big_text" style={{color: "purple"}}>&#8358;{quantity(val.amt)}</span>
                                        <span className="small_text">{val.amttype}</span>
                                    </div>
                                    <div className="dets_bal">
                                        <span className="big_text">{isExplore?"Completed":val.nxtvalue}</span>
                                        <span className="small_text">{val.nxtparam}</span>
                                    </div>
                                </div>
                                
                                <div className='dets_base' style={{marginTop: "0px"}}>
                                    <div className="soldout">Sold Out</div>
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}
                {loading && 
                    <div className="loading-div">
                        <div className="loading">
                            <Loading />
                        </div>
                    </div>
                }
            </ul>
        </div>
    )
}

export default PerfectScroll;