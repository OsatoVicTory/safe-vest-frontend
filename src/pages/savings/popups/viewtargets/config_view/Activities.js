import React, { useState } from "react";
// import img from "../../../../../svgs/circle-plain.svg";
import img from "../../../../../svgs/activities.png";
import { useNavigate } from "react-router-dom";
import Slider from "../../../../../components/perfectslider/Slider";
import Box from "../../../../../components/Box/Box.js";
import { useSelector } from "react-redux";
import "../../../../../components/Box/Box.css";
import "./Forms.css";
import "../../../../account/modals/Index.css";

const ActivitiesList = ({ data }) => {

    const [leave, setLeave] = useState(false);
    const Act = data;
    const navigate = useNavigate();
    const handleLeave = () => {
        setLeave(true);
        setTimeout(() => {
            navigate(-1);
        }, 1000);
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
        <div className="topup">
                <div className="dummy" onClick={handleLeave}></div>
                <Slider zIndex={1000000} leave={leave}>
                    <div className="popup_top">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" 
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
                        strokeLinejoin="round" className="x" style={{color: "rgb(34,149,242)"}} onClick={handleLeave}>
                            <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </div>
                    
                    <div className="popup_body">
                        <h2 style={{color: "rgb(39,174,96)"}}>RECENT ACTIVITIES</h2>
                        <div className="act_main">
                            {Act.map((time, idx) => (
                                <Box key={idx}>
                                    <div className="img_div">
                                        <img src={img} style={{borderRadius: "50%" }}/>
                                    </div>
                                    <div className="box_txts">
                                        <span className="small_light">{time.text}</span>
                                        <span className="small_light">{dateFormatter(time.when)}</span>
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

export default ActivitiesList;