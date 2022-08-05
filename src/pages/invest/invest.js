import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import imgdefault from "../../svgs/avatar.png";
import circle from "../../svgs/circle.svg";
import MyInvestments from "../../components/explore_and_my/my";
import Explore from "../../components/explore_and_my/explore";
import NoData from "../../components/nodata/nodata";
import store from "../../components/data";

import { useSelector } from "react-redux";
import "./invest.css";

const Investify = ()=> {

    const [value, setValue] = useState(0);
    const navigate = useNavigate();

    const changeVal = () => {
        setValue(1);
    }
    const handleNavigate = (x) => {
        if(x==0) {
            setValue(0);
            navigate("/dashboard/investify/*");
        } else {
            setValue(1);
            navigate("/dashboard/investify/explore/*");
        }
    }
    const handleNav = () => {
        navigate("/dashboard/account/*")
    }
    
    const { ongoing, completed } = useSelector((state) => state.investment);
    const account = useSelector((state) => state.account);
    const explore = store.filter(x => x.type == "investment" && x.category == "explore");
    
    //for if user haven't started any investment
    //or user investment data is empty, use this for NoData component
    const body = {
        type: "Start Investing!",
        desc: "Start investing in verified opportunities. Let's help you get started",
        color: "purple",
        link : ["/dashboard/investify/explore/*","/dashboard/investify/info"]
    }

    return (
        <div className="investify_container">
            <div className="investify_header">
                <h1>Investify</h1>
                <img src={account.profile_picture || imgdefault} onClick={handleNav} />
            </div>
            <div className="investify_content">
                {/* <div className="investify_header">
                    <h1>Investify</h1>
                    <img src={circle} />
                </div> */}
                <div className="investify_balance">
                    <div className="balance_top">
                        <span>Total balance</span>
                        <h1>₦0.00</h1>
                    </div>
                    <div className="balance_base">
                        <Link to="/dashboard/investify/info" className="balance_base_content" style={{textDecoration: "none"}}>
                            {/* <img src={circle} /> */}
                            <svg stroke="currentColor" fill="none" strokeWidth="2" style={{color: "purple"}} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="mb-1 md:mb-0 mr-0 md:mr-4 text-lg md:text-2xl" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12">
                                </line><line x1="12" y1="8" x2="12" y2="8"></line>
                            </svg> 
                            <span style={{color: 'purple'}}>Learn More</span>
                        </Link>
                    </div>
                </div>
                <div className="investify_main">
                    <div className="investify_mainheader">
                        <div className="investify_link" onClick={() => handleNavigate(0)}
                          style={{textDecoration: "none", borderBottom: value==0?"5px solid purple":"none"}}>
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" 
                                className="mr-1 text-xl md:text-2xl text-targets" height="25px" width="25px" style={{color: value==0?"purple":"none"}} xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>
                                </svg>
                                <span style={{color: value==0?"black":"#605c5c"}}>My Investments</span>
                        </div>
                        <div className="investify_link" onClick={() => handleNavigate(1)}
                          style={{textDecoration: "none", borderBottom: value==1?"5px solid purple":"none"}}>
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"
                                className="mr-1 text-xl md:text-2xl text-gray-600" height="25px" width="25px" style={{color: value==1?"purple":"none"}} xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                            </svg>
                            <span style={{color: value==1?"black":"#605c5c"}}>Explore</span>
                        </div>
                    </div>
                    <Routes>
                        {/* <Route path="*" element={<MyInvestments />} /> */}
                        <Route path="/*" element={ongoing.length == 0 ? <NoData body={body} changeVal={changeVal} /> : <MyInvestments isSavings={false} ongoing={ongoing} completed={completed} />} />
                        <Route path="/explore/*" element={<Explore isSavings={false} explore={explore} />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Investify;