import React, { useState, useEffect } from 'react';
import "./scroll.css";
import { Link } from "react-router-dom";
import savings from "../../svgs/savings.jpeg";
import safelock from "../../svgs/safelock.jpg";
import Loading from '../loading';
import { useSelector } from 'react-redux';

const PerfectScroll = ({ props, isSavings, safeLock }) => {

    
    const [array, setArray] = useState([]);
    const [loading, setLoading] = useState(false);
    const account = useSelector((state) => state.account);
    const isExplore = window.location.pathname.includes("explore");

    
    let billion = 1000000000, million=1000000, thousand=1000;

    const quantity = (val) => {
        if(isExplore) return "10K";
        else if(val >= billion) return Math.floor(val/billion) + "B"+(val>billion ? "+" : "");
        else if(val >= million) return Math.floor(val/million) + "M"+(val>million ? "+" : "");
        else if(val >= thousand) return Math.floor(val/thousand) + "K"+(val>thousand ? "+" : "");
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
    }, [props]);

    return (
        <div className='infinite_scroll'>
            <ul className="scroll_lists">
                {array.map((val,idx) => (
                    <li className='scroll_list' key={idx}>
                        <Link to={val.url} className="scroll_link" style={{textDecoration: "none"}}>
                            <img src={val.image_url||safelock} />
                            <div className='dets'>
                                <h1>{val.name}</h1>
                                <div className='dets_mid'>
                                    <div className='dets_bal'>
                                        <span className="big_text" style={{color: isSavings?"rgb(39,174,96)":"rgb(34,149,242)"}}>
                                            &#8358;{(quantity(safeLock ? val.amt : account.amt)) || 0.00}
                                        </span>
                                        <span className="small_text" style={{paddingTop: (isSavings||safeLock) ? "15px": "0px"}}>{val.amttype}</span>
                                    </div>
                                    <div className="dets_bal">
                                        <span className="big_text">{val.days_left}</span>
                                        <span className="small_text" style={{paddingTop: (isSavings||safeLock) ? "15px": "0px"}}>{val.nxtparam}</span>
                                    </div>
                                </div> 
                                <div className='dets_base' style={{marginTop: "28px"}}>
                                    <div className='dets_range_bar'>
                                        <div className='dets_range' style={{width: `${val.rate}%`, backgroundColor: isSavings?"rgb(39,174,96)":"rgb(34,149,242)"}}></div>
                                    </div>
                                    <span className="big_text">{val.rate}%</span>
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