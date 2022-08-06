import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import image from "../../../../svgs/user-profile.svg";
import Slider from "../../../../components/perfectslider/Slider";
import explore from "../../../../components/explore_and_my/savingsExplore";
import "../popups.css";
import "./viewtargets.css";
import img from "../../../../svgs/activities.png";
import Data from "./viewtargetsData";
import Join from "./config_view/Join";
import Alert from "../../../../components/alert/Alert";
import ActivitiesList from "./config_view/Activities";
import { useSelector } from "react-redux";


const ViewExploreTarget = () => {

    const [leave, setLeave] = useState(false);
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();
    const params = useParams()
    const handleNavigate = () => {
        setLeave(true);
        setTimeout(() => {
            navigate(-1);
        }, 1000);
    }
    
    const data = explore.find(x => x.id == params.id); 
    // console.log(data)
    const { detailsOptions } = Data;
    const targets = useSelector((state) => state.targets) || [];
    const isInTarget = targets.ongoing.find(x => x.id == data.id);
    // console.log(isInTarget, targets, data.id)
    
    const Details = detailsOptions.map(val => (
        {type: val.type, value: data[val.value]}
    ));
   

    const yr = 3600*24*365, day = 3600*24*31, mnth = 3600*24;
    const dateFormatter = (date) => {
        const diff = (new Date().getTime() - new Date(date).getTime())
        const time = Math.floor(diff/1000);
        if(time >= yr) return `${Math.floor(time/yr)} yr(s) ago`;
        else if(time >= day) return `${Math.floor(time/day)} mnth(s) ago`;
        else if(time >= mnth) return `${Math.floor(time/mnth)} day(s) ago`;
        else if(time >= 3600) return `${Math.floor(time/3600)} day(s) ago`;
        else if(time >= 60) return `${Math.floor(time/60)} min(s) ago`
        return `${time} sec(s) ago`;
    }

    const handleClick = () => {
        if(data.days_left == "Completed") return;
        else {
            if(isInTarget) setMessage("Already In This Challenge")
        }
    }

    const closeAlert = () => {
        setMessage(null);
    }

    
    let trillion = 1000000000000, billion = 1000000000, million=1000000, thousand=1000;

    const quantity = (val) => {
        if(val >= trillion) return Math.floor(val/trillion) + "T"+(val>trillion ? "+" : "");
        else if(val >= billion) return Math.floor(val/billion) + "B"+(val>billion ? "+" : "");
        else if(val >= million) return Math.floor(val/million) + "M"+(val>million ? "+" : "");
        else if(val >= thousand) return Math.floor(val/thousand) + "K"+(val>thousand ? "+" : "");
        else return val;
    }

    const dateFaker = (val) => {
        if(data.days_left=="Completed") return dateFormatter(data.end_date);
        let nxtDate = new Date(data.start_date);
        const day = nxtDate.getDay();
        nxtDate.setDate(day+30);
        return dateFormatter(String(nxtDate));
    }


    return (
        <div className="popup_container" style={{ zIndex: "1000" }}>
            <div className="popup_dummy" onClick={handleNavigate}></div>
            <div className="popup_main">
                <Slider zIndex={1000} leave={leave}>
                    {message && <Alert err={false} message={message} closeAlert={closeAlert} />}
                    <div className="popup_top">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" 
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
                        strokeLinejoin="round" className="x" style={{color: "rgb(39,174,96)"}} onClick={handleNavigate}>
                            <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </div>
                    
                    <div className="popup_body">
                        <div className="body_desc">
                            <div className="desc_container">
                                <div className="desc_content">
                                    <h2>{data.name}</h2>
                                    <div className="flexes">
                                        <div className="flex">
                                            <span className="light">Group Balance</span>
                                            <span className="dark" style={{color: "rgb(39,174,96)"}}>
                                                &#8358;{data.days_left=="Completed"?quantity(data.amt):"10K"}
                                            </span>
                                        </div>
                                        <div className="flex">
                                            <span className="light">Target</span>
                                            <span className="dark">&#8358;{quantity(data.target)}</span>
                                        </div>
                                        <div className="flex">
                                            <span className="light">Member</span>
                                            <span className="dark">{data.members}</span>
                                        </div>
                                    </div>
                                    <div className="body_base">
                                        <span className="light">Challenge Progress</span>
                                        <div className="range_div">
                                            <div className="range_bar">
                                                <div className="range_targ" style={{width: data.rate+"%"}}></div>
                                            </div>
                                            <span className="dark">{data.rate}%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h3>Payout Rule</h3>
                        <span className="light">You Collect Your Money. No one has access to your deposits but you alone</span>
                        <Link to={isInTarget || data.days_left == "Completed" ? "#":"join"}
                        onClick={handleClick}
                        className="Button" style={{textDecoration: "none"}}>
                            {data.days_left == "Completed" ? "Completed" : "Join Challenge"}
                        </Link>
                        <div className="body_details">
                            <ul className="details_lists">
                                {Details.map((val, idx) => (
                                    <li className="details_list" key={idx}>
                                        <span className="light">{val.type}</span>
                                        <span className="semi-dark">
                                            {val.type=="Frequency" ? "₦"+val.value + " " + data["savings_preference"] : 
                                                (val.type=="My Target" ? `₦${quantity(val.value)}`:val.value)
                                            }
                                        </span>  
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {data.friends.length > 0 && 
                            <div className="friends_list">
                                <span className="light">Friends Lists</span>
                                {data.friends.map((val, idx) => (
                                    <span className="friends_txt_dark" key={idx}>{val}</span>
                                ))}
                            </div>
                        }
                        <div className="act">
                            <div className="act_top">
                                <span>Recent Activities</span>
                            </div>
                            <ul className="act_lists">
                                <li className="act_list">
                                    <Link to="#" className="act_link" style={{textDecoration: "none"}}>
                                        <img src={img} />
                                        <div className="act_list_mid">
                                            <span className="mid_big">{`Credited To Challenge`}</span>
                                            <span className="mid_small">{dateFaker(data.start_date)}</span>
                                        </div>
                                        <span>{data.days_left == "Completed"?"₦"+data.amt:"₦10000.00"}</span>
                                    </Link>
                                </li>
                                <li className="act_list">
                                    <Link to="#" className="act_link" style={{textDecoration: "none"}}>
                                        <img src={img} />
                                        <div className="act_list_mid">
                                            <span className="mid_big">{`Created [${data.name}] Challenge`}</span>
                                            <span className="mid_small">{dateFormatter(data.start_date)}</span>
                                        </div>
                                        <span>0</span>
                                    </Link>
                                </li>
                                
                            </ul>
                            {/* <Link to="activities" className="more_act" style={{textDecoration: "none"}}>View More activities</Link> */}
                        </div> 
                    </div>
                </Slider>
            </div>
            <Routes>
                <Route path="join" element={<Join data={data} />} />
                <Route path="activities" element={<ActivitiesList data={data} />} />
            </Routes>
        </div>
    )
}

export default ViewExploreTarget;