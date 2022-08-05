import React, { useState } from "react";
// import "./Forms.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Slider from "../../../../components/perfectslider/Slider";
import cancel from "../../../../svgs/arrow-right.svg";
import circle from "../../../../svgs/circle.svg";
import Received from "./Received";
import Interests from "./Interests";
import { useSelector } from "react-redux";
import store from "../../../../state/store";
import "./piggy.css";


const PiggyInterest = () => {

    
    const [leave, setLeave] = useState(false);
    const navigate = useNavigate();
    const handleLeave = () => {
        setLeave(true);
       
        setTimeout(() => {
            navigate(-1);
        }, 500);
    }
    const account = useSelector((state) => state.account);
    let interest = 1.1;
    const date = new Date()
    const curMonth = date.getMonth();
    //if we are still in same month and year of signin
    //user is new and has no interest amount to redeem
    const signInDate = new Date(account["createdAt"]);
    const isNewUser = curMonth==signInDate.getMonth() && date.getFullYear()==signInDate.getFullYear();
    
    //interest can be redeemed monthly, so if user hasn't redeemed yet for the month
    //he can redeem, else till the next month
    const redeemed = curMonth == account["lst_redeemed"];const [isredeemed, setIsredeemed] = useState(redeemed);
    
    const [amt, setAmt] = useState(account["amt"]);
    let { lst_balance } = account;
    //to get date of last month redeemed
    let ref = new Date();
    ref.setDate(0);
    let lstDate = (""+ref).slice(4,15).replace(" ", "-");
    let month = lstDate.slice(0, 3);
    let year = lstDate.slice(7, 11);

    const handleState = () => {
        setIsredeemed(true);
        setAmt(Math.floor(interest*(amt-0)));
        lst_balance = Math.floor(interest*(amt-0));
    }

    return (
        <div className="piggy_interest_container">
            <div className="dummy" onClick={handleLeave}></div>
            <div className="piggy_interest">
                <Slider zIndex={100000} leave={leave}>
                    <div className="piggy_interest_top">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" 
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
                        strokeLinejoin="round" className="x" style={{color: "rgb(13,96,216)"}} onClick={handleLeave}>
                            <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </div>
                        
                    <div className="piggy_interest_body">
                        <h1>Interest breakdown</h1>
                        {isNewUser ? 
                            <div className="show_new">
                                <img src={circle} />
                                <div className="display_flex">
                                    <span className="small" style={{color: "white"}}>
                                        You Just Joined. Wait Till Next Month
                                        Before You Can Redeem Interest Rates.
                                        Our Monthly Interest Rate
                                    </span>
                                    <span className="big" style={{color: "white"}}>10%</span>
                                </div>
                            </div> :
                            isredeemed ? 
                                <Received amt={lst_balance} 
                                lstDate={lstDate} dateVal={[month,year]} /> : 
                                <Interests account={account} 
                                handleState={handleState} dateVal={[month,year]} />
                        } 
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default PiggyInterest;