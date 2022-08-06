import React, { useState } from "react";
// import img from "../../svgs/circle-plain.svg";
import img from "../../svgs/activities.png";
import { useNavigate } from "react-router-dom";
import Slider from "../perfectslider/Slider";
import { useSelector } from "react-redux";
import Box from "../Box/Box.js";
import "./Activities.css";
import "../Box/Box.css";
// import "./Forms.css";
import "../../pages/account/modals/Index.css";
import { signatureAction } from "../../state";

const ActivitiesModal = () => {

    const [leave, setLeave] = useState(false);
    const [currentId, setCurrentId] = useState(0);
    let Activities = useSelector((state) => state.activities);
    const [act, setAct] = useState(Activities);
    const navigate = useNavigate();
    const handleLeave = () => {
        setLeave(true);
        setTimeout(() => {
            navigate(-1);
        }, 1000);
    }

    const actNav = [
        {bg: "black", value:"All"},
        {bg: "rgb(13,96,216)", value:"piggybank"},
        {bg: "rgb(34,149,242)", value:"safelock"},
        {bg: "purple", value:"investment"},
        {bg: "rgb(34,149,242)", value:"savings"}
    ]

    const handleClick = (val, idx) => {
        setCurrentId(idx);
        if(val == "All") {
            setAct(Activities);
            return;
        }
        const update = Activities.filter(x => x.type==val)
        setAct(update);
    }

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


    return (
        <div className="modal" style={{ zIndex: "1000" }}>
                <div className="popup_dummy" onClick={handleLeave}></div>
                <Slider zIndex={1000000} leave={leave}>
                    <div className="popup_top">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" 
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
                        strokeLinejoin="round" className="x" style={{color: "rgb(34,149,242)"}} onClick={handleLeave}>
                            <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </div>
                    
                    <div className="popup_body">
                        <h2 style={{color: "rgb(34,149,242)"}}>RECENT ACTIVITIES</h2>
                        <ul className="act_nav">
                            {actNav.map((val, idx) => (
                                <li className="act_list" key={idx} 
                                style={{backgroundColor: currentId==idx?val.bg:"white",color: currentId==idx?"white":"#a0aec0"}}
                                onClick={() => handleClick(val.value, idx)}>
                                    {val.value}
                                </li>
                            ))}
                        </ul>
                        <div className="act_main">
                            {act.map((val, idx) => (
                                <Box key={idx}>
                                    <div className="img_div">
                                        <img src={img} style={{borderRadius: "50%"}} />
                                    </div>
                                    <div className="box_txts">
                                        <span className="small_light" 
                                        style={{textTransform:"capitalize"}}>
                                            {val.text}
                                        </span>
                                        <span className="small_light">
                                            {dateFormatter(val.when)}
                                        </span>
                                    </div>
                                </Box>
                            ))}
                        </div>
                    </div>
                </Slider>
            {/* </div> */}
        </div>
    )
}

export default ActivitiesModal;