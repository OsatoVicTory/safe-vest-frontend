import React, { useState } from "react";
import img from "../../../svgs/circle-plain.svg";
import { useNavigate } from "react-router-dom";
import Slider from "../../../components/perfectslider/Slider";
import avatar from "../../../svgs/avatar.png";
import Alert from "../../../components/alert/Alert";
import Loading from "../../../components/loading";
import Input from "../../../components/input/Input";
import "./Index.css";

const Story = () => {

    const [leave, setLeave] = useState(false);
    const [img, setImg] = useState(null);
    const [message, setMessage] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleNavigate = () => {
        setLeave(true);
        setTimeout(() => {
            navigate(-1);
        }, 1000);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setMessage("Story Sent")
        }, 2000);
    }
    const handleChange = (e) => {
        return;
    }
    const closeAlert = () => {
        setMessage(false);
    }

    return (
        <div className="modal" style={{ zIndex: "1000" }}>
            <div className="popup_dummy" onClick={handleNavigate}></div>
            <div className="popup_main">
                <Slider zIndex={1000} leave={leave}>
                    {message && <Alert err={false} message={message} closeAlert={closeAlert} />}
                    <div className="popup_top">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" 
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
                        strokeLinejoin="round" className="x" style={{color: "rgb(34,149,242)"}} onClick={handleNavigate}>
                            <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </div>
                    
                    <div className="popup_body">
                        <h2 style={{color: "rgb(34,149,242)"}}>Tell your Story</h2>
                        <div className="img_change">
                            <span>Add a Public picture</span>
                            <div>
                                <img src={img ? URL.createObjectURL(img) : avatar} />
                                <label htmlFor="input">
                                    <span>Tap to Change</span>
                                </label>
                                <input type="file" id="input" onChange={(e) => setImg(e.target.files[0])}/>
                            </div>
                        </div>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <Input type="text" label={"How has Safevest helped you"} placeholder={"Enter your Story"} handleChange={handleChange} />
                            <div className="complete_base" style={{position: "fixed"}}>
                                {/* <input type="submit" value="Tell your Story"></input> */}
                                {!loading ? <input type="submit" value="Tell your Story"></input> 
                                    : 
                                    <div className="loading">
                                        <Loading />
                                    </div>
                                }
                            </div>
                        </form>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Story;