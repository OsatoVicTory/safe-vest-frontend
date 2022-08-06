import React, { useState } from "react";
import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import cancel from "../../../../svgs/arrow-right.svg";
import actImg from "../../../../svgs/activities.png";
import Slider from "../../../../components/perfectslider/Slider";
import "../popups.css";
import "./viewtargets.css";
import Forms from "./config_view/Forms";
import { useSelector } from "react-redux";
// import Topup from "./config_view/topup";
import ActivitiesList from "./config_view/Activities";
import Data from "./viewtargetsData";
import store from "../../../../state/store";
// import store from "../../../../components/data";


const ViewTarget = ({ type }) => {

    const [leave, setLeave] = useState(false);
    const navigate = useNavigate();
    const params = useParams()
    const handleNavigate = () => {
        setLeave(true);
        setTimeout(() => {
            navigate(-1);
        }, 1000);
    }
    
    const allTargets = useSelector((state) => state.targets) 
    const data = allTargets["ongoing"].find(target => target.id == params.id); 
    // console.log(data)
    const { detailsOptions, Linklists, Topup, Lock, Extend, Break, Settings, DatabaseParams } = Data;
    
    const Details = detailsOptions.map(val => (
        {type: val.type, value: data[val.value]}
    ));
    
    const activities = useSelector((state) => state.activities);
    const account = useSelector((state) => state.account);
    const act = activities.filter(x => x.text.includes(data.name)||x.text.includes("Piggybank"));
    const Activities = act.slice(0, 2);
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
    // console.log(store.getState())
    const mnths = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const dateVal = (date) => {
        var day = new Date(date);
        var dy = parseInt(String(day).slice(8, 10));
        // console.log(date, dy)
        return `${(dy<10?"0":"")+dy} ${mnths[day.getMonth()]} ${day.getFullYear()}`
        // var c = day.getDay()
    }

    let trillion = 1000000000000, billion = 1000000000, million=1000000, thousand=1000;

    const quantity = (val) => {
        if(val >= trillion) return Math.floor(val/trillion) + "T"+(val>trillion ? "+" : "");
        else if(val >= billion) return Math.floor(val/billion) + "B"+(val>billion ? "+" : "");
        else if(val >= million) return Math.floor(val/million) + "M"+(val>million ? "+" : "");
        else if(val >= thousand) return Math.floor(val/thousand) + "K"+(val>thousand ? "+" : "");
        else return val;
    }


    return (
        <div className="popup_container" style={{ zIndex: "1000" }}>
            <div className="popup_dummy" onClick={handleNavigate}></div>
            <div className="popup_main">
                <Slider zIndex={1000} leave={leave}>
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
                                            <span className="light">My Balance</span>
                                            <span className="dark" style={{color: "rgb(39,174,96)"}}>&#8358;{quantity(account.amt)}</span>
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
                                                <div className="range_targ" style={{width: `${data.rate}%`}}></div>
                                            </div>
                                            <span className="dark">{data.rate}%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h3>perform action</h3>
                        <span className="light">Tap the button below to perform action</span>
                        <Link to={data.break?"#":"quicktopup"} className="Button" style={{textDecoration: "none"}}>
                            {data.break?"Broken":"Quick top up"}
                        </Link>
                        <div className="body_details">
                            <ul className="details_lists">
                                {Details.map((val, idx) => (
                                    <li className="details_list" key={idx}>
                                        <span className="light">{val.type}</span>
                                        <span className="semi-dark">
                                            {val.type=="Frequency" ? "₦"+val.value + " " + data["savings_preference"] : 
                                                val.type=="Start Date"||val.type=="End Date"? dateVal(val.value) :
                                                    (val.type=="My Target" ? `₦${quantity(data.target||val.value)}`:val.value)
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
                        <div className="routes">
                            {(!data.completed && !data.break) && <ul className="routes_lists">
                                {Linklists.map((val, idx) => (
                                    // used val.link because it is what we can ref to data
                                    !data[val.link] && <li className="routes_list" key={idx}>
                                        <Link to={val.link} className='routes_link'>
                                            <img src={val.img} />
                                        </Link>
                                        <span className="dark">{val.title}</span>
                                    </li>
                                ))}
                            </ul>}
                        </div>
                        <div className="act">
                            <div className="act_top">
                                <span>Recent Activities</span>
                            </div>
                            <ul className="act_lists">
                                {Activities.map((val, idx) => (
                                    <li className="act_list" key={idx}>
                                        <Link to="#" className="act_link" style={{textDecoration: "none"}}>
                                            <img src={actImg} />
                                            <div className="act_list_mid">
                                                <span className="mid_big">{val.text}</span>
                                                <span className="mid_small">{dateFormatter(val.when)}</span>
                                            </div>
                                            <span>0</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <Link to="activities" className="more_act" style={{textDecoration: "none"}}>View More activities</Link>
                        </div>
                    </div>
                </Slider>
            </div>
            {/* <Activities type={"page"} /> */}
            <Routes>
                <Route path="/quicktopup/*" element={<Forms body={Topup} DatabaseParams={DatabaseParams} initialState={data} />} />
                <Route path="/lock" element={<Forms body={Lock} DatabaseParams={DatabaseParams} initialState={data} />} />
                <Route path="/break" element={<Forms body={Break} DatabaseParams={DatabaseParams} initialState={data} />} />
                <Route path="/extend" element={<Forms body={Extend} DatabaseParams={DatabaseParams} initialState={data} />} />
                <Route path="/settings" element={<Forms body={Settings} DatabaseParams={DatabaseParams} initialState={data} />} />
                <Route path="/activities" element={<ActivitiesList data={act} />} />
            </Routes>
        </div>
    )
}

export default ViewTarget;