import React, { useState } from "react";
import "./Index.css";
import { useNavigate } from "react-router-dom";
import cancel from "../../../svgs/arrow-right.svg";
import Slider from "../../../components/perfectslider/Slider";

const About = ({ data, name }) => {

    const [leave, setLeave] = useState(false);
    const navigate = useNavigate();
    const handleLeave = () => {
        setLeave(true);
       
        setTimeout(() => {
            navigate(-1);
        }, 500);
    }

    return (
        <div className="container">
            <div className="dummy" onClick={() => handleLeave()}></div>
            <Slider zIndex={1000000} leave={leave}>
                <div className="top">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" 
                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
                    strokeLinejoin="round" className="x" style={{color: "purple"}} onClick={handleLeave}>
                        <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </div>
                <div className="body">
                    <h2 style={{color: 'purple'}}>{name}</h2>
                    <div className="display">
                        <span className='small_txt' style={{color: "purple"}}>Location</span>
                        <span className='med_txt' style={{color: "#aeaeae"}}>{data.location}</span>
                    </div>
                    <ul className="lists">
                        {data.data.map((val,idx) => (
                            <li className="list" key={idx}>
                                <span className='small_txt' style={{color: "purple"}}>{val.type}</span>
                                <span className='med_txt' style={{color: "#aeaeae"}}>{val.value}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </Slider>
        </div>
    )
}

export default About;