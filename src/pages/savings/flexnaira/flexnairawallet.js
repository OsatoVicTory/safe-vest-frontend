import React, { useState } from "react";
import img from "../../../svgs/circle-plain.svg";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Slider from "../../../components/perfectslider/Slider";
import Withdraw from "../../../components/withdraw/withdraw";
import Flexform from "./flexform";
import { useSelector } from "react-redux";
import "./flexnairawallet.css";

const FlexNairaWallet = () => {

    const [leave, setLeave] = useState(false);
    const account = useSelector((state) => state.account)
    const navigate = useNavigate();
    const handleNavigate = () => {
        setLeave(true);
        setTimeout(() => {
            navigate(-1);
        }, 1000);
    }

    

    return (
        <div className="wallet" style={{ zIndex: "1000" }}>
            <div className="wallet_dummy" onClick={handleNavigate}></div>
            <div className="wallet_main">
                <Slider zIndex={1000} leave={leave}>
                    <div className="wallet_top">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" 
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
                        strokeLinejoin="round" className="x" style={{color: "rgb(231,67,156)"}} onClick={handleNavigate}>
                            <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </div>
                    
                    <div className="wallet_body">
                        <h2 style={{color: "rgb(231,67,156)"}}>Flex Naira Wallet</h2>
                        <span>Check your wallet balance</span>
                        <div className="wallet_display">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="film" style={{color: "white"}}>
                                <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
                                <line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line>
                                <line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line>
                                <line x1="2" y1="17" x2="7" y2="17"></line>
                                <line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>
                            </svg>
                            <div className="wallet_flex">
                                <span className="small_ttxxt">Flex Naira Balance</span>
                                <span className="med_ttxxt">&#8358;{account.flexnaira_amt || "0"}.00</span>
                            </div>
                        </div>
                        <Link to="topup/*" className="wallet_link" style={{textDecoration: "none"}}>Topup Wallet</Link>
                        <Link to="withdraw" className="wallet_link" style={{textDecoration: "none"}}>Withdraw</Link>
                    </div>
                </Slider>
            </div>
            <Routes>
                <Route path="topup/*" element={<Flexform />} />
                <Route path="withdraw" element={<Withdraw bg={"none"} isFlexnaira={true} />} />
            </Routes>
        </div>
    )
}

export default FlexNairaWallet;