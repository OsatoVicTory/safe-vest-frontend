import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import profile from "../../../svgs/avatar.png";
import { useSelector } from "react-redux";
import "./savingshome.css";
import Arr from "../savingsData";

const SavingsHome = () => {

    // const [amounts, setAmounts] = useState(["N0.00","N0.00","N0.00","N0.00",])
    const account = useSelector((state) => state.account);
    const navigate = useNavigate();
    const safelock = useSelector((state) => state.safelock);
    // console.log(safelock)
    let safelockAmt = 0;
    if(safelockAmt == 0 && safelock.ongoing.length) {
        for(var i=0;i<safelock.ongoing.length;i++) {
            if(!safelock.ongoing[i].withdrawn) safelockAmt += (safelock.ongoing[i].amt-0)
        }
    }

    const amounts = [
        account.amt||"0",account.flexnaira_amt||"0",
        safelockAmt||"0",account.amt||"0"
    ]

    return (
        <div className='savings_home_container'>
            <div className="savings_home">
                <div className="sv_home_header">
                    <div className="sv_header_left">
                        <h1>Savings</h1>
                        <span>Lets see how well you are doing</span>
                    </div>
                    <img src={account.profile_picture || profile} 
                    onClick={() => navigate("/dashboard/account/*")} />
                </div>
                <div className="balance_box">
                    <span>Total Balance</span>
                    <h1>₦{account.amt || "0"}.00</h1>
                </div>
                <ul className="sv_homelists">
                    {Arr.map((val, idx) => (
                        <li className="sv_homelist" key={idx}>
                            <Link to={val.link} className="sv_links" style={{textDecoration: "none",background: val.bg}}>
                                {/* <img src={val.img} /> */}
                                {val.svg}
                                <h2 style={{color: val.color}}>{val.title}</h2>
                                <p style={{color: "black"}}>{val.desc}</p>
                                <span style={{color: val.color}}>₦{amounts[idx]}.00</span>
                            </Link> 
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SavingsHome;