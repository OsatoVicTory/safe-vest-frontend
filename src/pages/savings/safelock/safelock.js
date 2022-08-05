import React, { useState } from "react";
import Balance from "../../../components/Balance";
import eye from "../../../svgs/circle.svg";
import pic from "../../../svgs/avatar.png";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import NoData from "../../../components/nodata/nodata";
import "../piggybank/piggybank.css";
import "../savings.css";
import "../targets/targets.css";
import PerfectScroll from "../../../components/perfectscroll/scroll";
// import store from "../../../components/data";
import { useSelector } from "react-redux";
import Arr from "../savingsData";

const Safelock = () => {

    let Nav = Arr;
    const navigate = useNavigate();
    const account = useSelector((state) => state.account);
    // get redux state
    const { ongoing, completed } = useSelector((state) => state.safelock);
    let amount = 0;
    const amt = ongoing.map(x => {
        if(!x.withdrawn) amount += (x.amt-0)
        return x;
    })
    
    const Data = {
        amt: amount || 0.00,
        body: [
            {
                name:"Create Safelock",link:"/dashboard/savings/safelock/create_safelock/*",
                svg: 
                <svg stroke="currentColor" fill="none" strokeWidth="2" style={{color: "rgb(34,149,242)"}} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="mb-1 md:mb-0 mr-0 md:mr-4 text-lg md:text-2xl" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg">
                    <line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
            },
            {
                name:"Learn More",link:"/dashboard/savings/safelock/info",
                svg: 
                <svg stroke="currentColor" fill="none" strokeWidth="2" style={{color: "rgb(34,149,242)"}} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="mb-1 md:mb-0 mr-0 md:mr-4 text-lg md:text-2xl" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12">
                    </line><line x1="12" y1="8" x2="12" y2="8"></line>
                </svg> 
            }
        ]
    }

    const [id, setId] = useState(0);
    const body = {
        type: "Create a Safelock",
        desc: "You have no Safelock setup. Let's help you get started",
        color: "rgb(34,149,242)",
        link : ["/dashboard/savings/safelock/create_safelock/*","/dashboard/savings/safelock/info"]
    }
    const changeVal = () => {
        return;
    }
    
    return (
        <div className='savings_container'>
            <div className='savings_wrapper'>
                <div className='savings_content'>
                    <div className='savings_header'>
                        <div className='header_top'>
                            <h1 style={{color:"rgb(34,149,242)"}}>Safelock</h1>
                            <img src={account.profile_picture || pic}  
                            onClick={() => navigate("/dashboard/account/*")} />
                        </div>
                        <div className="savings_navbar">
                            <ul className='navbar_lists'>
                                {Nav.map((val,idx) => (
                                    <li className='navbar_list' key={idx} style={{borderBottom: idx==2?val.border:"none"}}>
                                        <Link to={val.link} className="navbar_links" style={{textDecoration: 'none'}}>
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill={idx==2?val.color:"#e2e8f0"} xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0)">
                                                    <path d="M8.8995 -0.000719457C3.95285 0.0551118 0 4.16429 0 9.11094V16.2908C0 17.2288 0.759305 17.9993 1.70844 17.9993H8.88834C13.835 17.9993 17.9442 14.0464 18 9.09977C18.0558 4.05263 13.9467 -0.0565507 8.8995 -0.000719457Z" className="svg"></path>
                                                    <path d="M12.0262 9.68113H5.96288C5.58323 9.68113 5.28174 9.37964 5.28174 8.99999C5.28174 8.62034 5.58323 8.31885 5.96288 8.31885H12.0262C12.4058 8.31885 12.7073 8.62034 12.7073 8.99999C12.7073 9.37964 12.4058 9.68113 12.0262 9.68113Z" fill="white"></path>
                                                </g>
                                                <defs><clipPath id="clip0"><rect width="18" height="18" fill="black"></rect></clipPath></defs>
                                            </svg>
                                            <span style={{color: idx==2?"black":"#718096"}}>{val.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="piggybank">
                        <Balance Data={Data} color={"rgb(34,149,242)"}/>
                        <div className="piggybank_content">
                            <div className="piggybank_top">
                                <h3>SAFELOCK</h3>
                                <div className="piggybank_lists">
                                    <Link to="/dashboard/savings/safelock/*"
                                     className="piggybank_links" 
                                     onClick={() => setId(0)}
                                     onMouseEnter={() => setId(0)}
                                    //  onMouseLeave={() => setId(null)}
                                     style={{textDecoration: "none", background: (id==0)?"rgb(34,149,242)":"none", color: (id==0)?"white":"black"}}>
                                        Ongoing
                                    </Link>
                                    <Link to="/dashboard/savings/safelock/completed/*"
                                     className="piggybank_links" 
                                     onClick={() => setId(1)}
                                     onMouseEnter={() => setId(1)}
                                    //  onMouseLeave={() => setId(null)}
                                     style={{textDecoration: "none", background: (id==1)?"rgb(34,149,242)":"none", color: (id==1)?"white":"black"}}>
                                        Completed
                                    </Link>
                                </div>
                            </div>
                            <div className="safelock_wrapper">
                                <Routes>
                                    <Route path="/*" element={ongoing.length==0 ? <NoData body={body} changeVal={changeVal} /> : <PerfectScroll props={ongoing} safeLock={true} amount={amount} />} />
                                    <Route path="/completed/*" element={completed.length==0 ? <NoData body={body} changeVal={changeVal} /> :<PerfectScroll props={completed} safeLock={true} amount={amount} />} />
                                </Routes>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Safelock;