import React, { useState, useEffect } from "react";
import Balance from "../../../components/Balance";
import eye from "../../../svgs/circle.svg";
import pic from "../../../svgs/avatar.png";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import MyTargets from "../../../components/explore_and_my/my";
import Explore from "../../../components/explore_and_my/explore";
import NoData from "../../../components/nodata/nodata";
// import explore from "../../../components/explore_and_my/savingsExplore";
import "../savings.css";
import "./targets.css";
import Arr from "../savingsData";
import { useSelector, useDispatch } from "react-redux";
import store from "../../../state/store";
// import { bindActionCreators } from "redux";
// import { targetAction } from "../../../state";

const Target = () => {
    
    const navigate = useNavigate();
    const [value, setValue] = useState(0);

    useEffect(() => {
        setValue(0);
    }, [])

    //navbar data
    let Nav = Arr;

    const changeVal = () => {
        return;
    }

    
    const { ongoing, completed } = useSelector((state) => state.targets);
    const account = useSelector((state) => state.account);
    // console.log(store.getState())

    //if there is no target savings data, we use this body
    //object for the NoData component
    const body = {
        type: "Create a Target!",
        desc: "Save with discipline towards a specific goal or target. Earn interests everyday into your wallet. Let's help you get started",
        color: "rgb(39,174,96)",
        link : ["/dashboard/savings/target/create_target/*","/dashboard/savings/target/info"]
    }

    //for balance component
    const Data = {
        amt: account.amt || 0.00,
        body: [
            {
                name:"Create Target",link:"/dashboard/savings/target/create_target/*",
                svg: 
                <svg stroke="currentColor" fill="none" strokeWidth="2" style={{color: "rgb(39,174,96)"}} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="mb-1 md:mb-0 mr-0 md:mr-4 text-lg md:text-2xl" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg">
                    <line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
            },
            {
                name:"Learn More", link:"/dashboard/savings/target/info",
                svg: 
                <svg stroke="currentColor" fill="none" strokeWidth="2" style={{color: "rgb(39,174,96)"}} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="mb-1 md:mb-0 mr-0 md:mr-4 text-lg md:text-2xl" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12">
                    </line><line x1="12" y1="8" x2="12" y2="8"></line>
                </svg>                
            }
        ]
    }
    
    
    return (
        <div className='savings_container'>
            <div className='savings_wrapper'>
                <div className='savings_content'>
                    <div className='savings_header'>
                        <div className='header_top'>
                            <h1 style={{color:"rgb(39,174,96)"}}>Target</h1>
                            <img src={account.profile_picture || pic} 
                            onClick={() => navigate("/dashboard/account/*")} />
                        </div>
                        <div className="savings_navbar">
                            <ul className='navbar_lists'>
                                {Nav.map((val,idx) => (
                                    <li className='navbar_list' key={idx} style={{borderBottom: idx==3?val.border:"none"}}>
                                        <Link to={val.link} className="navbar_links" style={{textDecoration: 'none'}}>
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill={idx==3?val.color:"#e2e8f0"} xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0)">
                                                    <path d="M8.8995 -0.000719457C3.95285 0.0551118 0 4.16429 0 9.11094V16.2908C0 17.2288 0.759305 17.9993 1.70844 17.9993H8.88834C13.835 17.9993 17.9442 14.0464 18 9.09977C18.0558 4.05263 13.9467 -0.0565507 8.8995 -0.000719457Z" className="svg"></path>
                                                    <path d="M12.0262 9.68113H5.96288C5.58323 9.68113 5.28174 9.37964 5.28174 8.99999C5.28174 8.62034 5.58323 8.31885 5.96288 8.31885H12.0262C12.4058 8.31885 12.7073 8.62034 12.7073 8.99999C12.7073 9.37964 12.4058 9.68113 12.0262 9.68113Z" fill="white"></path>
                                                </g>
                                                <defs><clipPath id="clip0"><rect width="18" height="18" fill="black"></rect></clipPath></defs>
                                            </svg>
                                            <span style={{color: idx==3?"black":"#718096"}}>{val.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="targ">
                        <Balance Data={Data} color={"rgb(39,174,96"}/>
                        <div className="target">
                            <div className="top">
                                <Link to="/dashboard/savings/target/*" onClick={() => setValue(0)}
                                className="targets_top_links" style={{textDecoration: "none", borderBottom:value==0?"5px solid rgb(39,174,96)":"none"}}>
                                    
                                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" 
                                    className="mr-1 text-xl md:text-2xl text-targets" height="25px" width="25px" style={{color: value==0?"rgb(39,174,96)":"grey"}} xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>
                                    </svg>
                                    <span style={{color: "#605c5c"}}>My Targets</span>
                                </Link>
                                <Link to="/dashboard/savings/target/explore/*" onClick={() => setValue(1)}
                                className="targets_top_links" style={{textDecoration: "none", borderBottom:value==1?"5px solid rgb(39,174,96)":"none"}}>
                             
                                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"
                                     className="mr-1 text-xl md:text-2xl text-gray-600" height="25px" width="25px" style={{color: value==1?"rgb(39,174,96)":"grey"}} xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                                    </svg>
                                    <span style={{color: "#605c5c"}}>Explore</span>
                                </Link>
                            </div>
                                <Routes>
                                    <Route path="/*" element={ongoing.length==0 ? <NoData body={body} changeVal={changeVal} /> : <MyTargets isSavings={true} ongoing={ongoing} completed={completed} />} />
                                    <Route path="/explore/*" element={<Explore isSavings={true} />} />
                                </Routes>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Target;