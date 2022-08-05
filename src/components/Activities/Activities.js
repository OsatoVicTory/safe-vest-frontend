import React, { useState } from "react";
import img from "../../svgs/activities.png";
// import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import Slider from "../perfectslider/Slider";
import Box from "../Box/Box.js";
import "../Box/Box.css";
import "../../pages/account/modals/Index.css";

const Activities = ({ type }) => {

    let Act = useSelector((state) => state.activities) || [];
    // const navigate = useNavigate();
    const data = Act.slice(0, 4);

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
        <>
            <div className="activities">
                <span>RECENT ACTIVITES</span>
                {data.map((val, idx) => (
                    <Box key={idx}>
                        <div className="img_div">
                            <img src={img} style={{borderRadius: "50%"}}/>
                        </div>
                        <div className="box_txts">
                            <span className="small_light">{val.text}</span>
                            <span className="small_light">{dateFormatter(val.when)}</span>
                        </div>
                    </Box>
                ))}
            </div>
        </>     
    )
}
export default Activities;