import React, { useState } from "react";
// import "./Forms.css";
import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import Slider from "../../../../components/perfectslider/Slider";
import cancel from "../../../../svgs/arrow-right.svg";
import "./create.css";
import Withdraw from "../../../../components/withdraw/withdraw";
import { useSelector } from "react-redux";
import Alert from "../../../../components/alert/Alert";
import store from "../../../../components/data";
import "./viewsafelock.css";


const ViewSafelock = ({ type }) => {

    const path = window.location.pathname;
    const params = useParams();
    const [leave, setLeave] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const handleLeave = () => {
        setLeave(true);
       
        setTimeout(() => {
            navigate(-1);
        }, 500);
    }

    const safelock = useSelector((state) => state.safelock);
    const data = safelock["ongoing"].find(x => x.id == params.id);
    // console.log(data);

    
    let trillion = 1000000000000, billion = 1000000000, million=1000000, thousand=1000;

    const quantity = (val) => {
        if(val >= trillion) return Math.floor(val/trillion) + "T"+(val>trillion ? "+" : "");
        else if(val >= billion) return Math.floor(val/billion) + "B"+(val>billion ? "+" : "");
        else if(val >= million) return Math.floor(val/million) + "M"+(val>million ? "+" : "");
        else if(val >= thousand) return Math.floor(val/thousand) + "K"+(val>thousand ? "+" : "");
        else return val;
    }

    const closeAlert = () => {
        setError(null);
    }

    const finishedDate = (val) => {
        return new Date(val.end_date).getTime() <= new Date().getTime();
    }

    const validate = () => {
        if(!finishedDate(data)) setError("Not Yet Matured For Withdrawal");
    }

    const descOptions = [
        {type:"Title", name: "name"},
        {type:"Target", name: "amt"},
        {type:"Interest", name: "interest"},
        {type:"Days Left", name: "days_left"},
        {type:"Start date", name: "start_date"},
        {type:"End date", name: "end_date"}
    ]
    const Desc = descOptions.map(val => (
        {type: val.type, name: data[val.name]}
        
    ));

    const dateVal = (date) => {
        return String(new Date(date)).slice(4, 16);
    }
    

    return (
        <div className="create_container">
            <div className="dummy" onClick={handleLeave}></div>
            <div className="create">
                <Slider zIndex={100000} leave={leave}>
                    {error && <Alert err={true} message={error} closeAlert={closeAlert} />}
                    <div className="create_top">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" 
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
                        strokeLinejoin="round" className="feather feather-x" style={{color: "rgb(34,149,242)"}}
                        onClick={handleLeave}>
                            <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>

                    </div>
                        
                    <div className="create_body">
                        <div className="sf_dets">
                            <div className="sf_dets_content">
                                <h2>{data.name}</h2>
                                <div className="sf_dets_mid">
                                    <div className="sf_dets_mid_txt">
                                        <span className="sf_small">Amount Balance</span>
                                        <span className="sf_med" style={{color: "rgb(34,149,242)"}}>
                                            ₦{quantity(data.amt)}
                                        </span>
                                    </div>
                                    <div className="sf_dets_mid_txt">
                                        <span className="sf_small">Target</span>
                                        <span className="sf_med">₦{quantity(data.amt)}</span>
                                    </div>
                                    <div className="sf_dets_mid_txt">
                                        <span className="sf_small">Days Left</span>
                                        <span className="sf_med">{data.days_left}</span>
                                    </div>
                                </div>
                                <div className="sf_dets_base">
                                    <span className="sf_small">Lock Progress</span>
                                    <div className="range_div">
                                        <div className="range_bar">
                                            <div className="range" style={{width: `${data.rate}%`}}></div>
                                        </div>
                                        <span className="sf_med">{data.rate}%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link to={(!data.withdrawn && finishedDate(data))?"withdraw":"#"} onClick={validate}
                         className="sf_link" style={{textDecoration: "none"}}>
                            {(!data.withdrawn)?"Withdraw":"Completed"}
                        </Link>
                        <ul className="sf_lists">
                            {Desc.map((val, idx) => (
                                <li className="sf_list" key={idx}>
                                    <span className="sf_small">{val.type}</span>
                                    <span className="sf_med">
                                        {val.type=="Start date"||val.type=="End date" ? dateVal(val.name):
                                            val.type=="Interest"?val.name+"% p.a":
                                                val.type=="Target"?`₦${quantity(val.name)}`:val.name}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Slider>
            </div>
            <Routes>
                <Route path="/withdraw" element={<Withdraw amount={data.amt} Data={data} bg={"none"} />} />
            </Routes>
        </div>
    )
}

export default ViewSafelock;