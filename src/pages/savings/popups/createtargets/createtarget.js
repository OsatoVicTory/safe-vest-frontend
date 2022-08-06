import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
// import cancel from "../../../../svgs/arrow-right.svg";
import personalImg from "../../../../svgs/personal.svg";
import publicImg from "../../../../svgs/public.svg";
import privateImg from "../../../../svgs/private.svg";
import Slider from "../../../../components/perfectslider/Slider";
import "../popups.css";
import ConfigTarget from "./config_targets/config_targets";
import "./createtargets.css";


const CreateTarget = () => {
    
    const [leave, setLeave] = useState(false);
    const navigate = useNavigate();
    const handleNavigate = () => {
        setLeave(true);
        setTimeout(() => {
            navigate(-1);
        }, 1000);
    }
    const Lists = [
        {
            link: "/dashboard/savings/target/create_target/personal/*", 
            title: "Start a personal target",
            img: personalImg, 
            describe: "Select to create a personal target"
        },
        {
            link: "/dashboard/savings/target/create_target/private/*", 
            title: "Start a private target",
            img: privateImg,
            describe: "Select to create a private target"
        },
        {
            link: "/dashboard/savings/target/create_target/public/*", 
            title: "Start a public target", 
            img: publicImg,
            describe: "Select to create a public target"
        }
    ]
    
    let Personal = {
        type: "personal",
        title: "Refresh your personal goals much faster",
        body: [
            {label:"Target Title",name:"name",type:"text"},
            {label:"Select Category",name:"Category",type:"dropdown",dropdown:"category"},
            {label:"Set Overall Target Amount",name:"target",type:"number"},
            {label:"How will you prefer to save",name:"savings_preference",type:"dropdown",dropdown:"savings_preference"}
        ]
    }
    let Public = {
        type: "public",
        title: "Challenge yourself to beat others",
        body: [...Personal.body, {label: "Add Friends",name:"friends",type:"text"}]
    }
    let Private = {
        type: "private",
        title: "Challenge yourself to beat your friends",
        body: [...Public.body]
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
                        <h1>Create a personal target or group target</h1>
                        <p>Setup a new savings target and get paid everyday</p>
                        <ul className="l_one_lists">
                            {Lists.map((val,idx) => (
                                <li key={idx} className="l_one_list">
                                    <Link to={val.link} className="l_one_link" style={{textDecoration: "none"}}>
                                        <img src={val.img} />
                                        {/* {val.svg} */}
                                        <div className="l_one_text">
                                            <h2>{val.title}</h2>
                                            <span style={{color: "black"}}>{val.describe}</span>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Slider>
            </div>
            <Routes>
                <Route path="/personal/*" element={<ConfigTarget body={Personal} />} />
                <Route path="/public/*" element={<ConfigTarget body={Public} />} />
                <Route path="/private/*" element={<ConfigTarget body={Private} />} />
            </Routes>
        </div>
    )
}

export default CreateTarget;