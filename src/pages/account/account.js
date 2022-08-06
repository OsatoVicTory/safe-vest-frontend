import React from "react";
import "./account.css";
import Box from "../../components/Box/Box";
import Features from "./accountData";
import img from "../../svgs/circle-plain.svg";
import Creditcard from "../../components/creditCard/creditCard";
import avatar from "../../svgs/avatar.png";
import { useSelector } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";

const Account = () => {

    const Info = [
        {value: "123456789", name: "Flex Number"},
        {value: "0", name: "Piggy Points"},
        {value: "123456789", name: "Piggy ID"},
        {value: "0", name: "Referals"}
    ]
    const account = useSelector((state) => state.account)
    // console.log(account)
    const imgurl = account.profile_picture;

   

    return (
        <div className="account">
            <div className="account_content">
                <div className="account_header">
                    <h1>My Account</h1>
                    <span>{account.first_name + " " + account.last_name}</span>
                </div>
                <div className="account_head">
                    <div className="head_body">
                        <div><img src={imgurl || avatar} /></div>
                        <h1>{account.first_name + " " + account.last_name}</h1>
                    </div>
                </div>
                <ul className="account_infos">
                    {Info.map((val, idx) => (
                        <li key={idx} className="account_info">
                            <h2>{val.value}</h2>
                            <span>{val.name}</span>
                        </li>
                    ))}
                </ul>
                <div className="account_features">
                    {Features.map((val, idx) => (
                        <Box key={idx}>
                            <Link to={val.link} className="box_link" style={{textDecoration: "none"}}>
                                {/* <img src={val.img} /> */}
                                {val.svg}
                                <span className="thick_med">{val.name}</span>
                            </Link>
                        </Box>
                    ))}
                </div>
                
            </div>
        </div>
    )
}

export default Account;