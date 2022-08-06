import React, { useState } from "react";
import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import cancel from "../../../svgs/arrow-right.svg";
import image from "../../../svgs/user-profile.svg";
import imag from "../../../svgs/investment.jpg";
import Slider from "../../../components/perfectslider/Slider";
import "./view_investment.css";
import Faqs from "./faqs";
import About from "./about";
// import store from "../../../components/data";
import explore from "../../../components/explore_and_my/investExplore";
import Completed from "./completed";


const ViewExploreInvestment = () => {
    
    const [leave, setLeave] = useState(false);
    const navigate = useNavigate();
    const params = useParams();
    const handleNavigate = () => {
        setLeave(true);
        setTimeout(() => {
            navigate(-1);
        }, 1000);
    }
    const descOptions = [
        {type: "Expected Returns", value: "expected_returns"},
        {type: "Investment Type", value: "investment_type"},
        {type: "Offer closing date", value: "closing_date"},
        {type: "Maturity Date", value: "maturity_date"},
        {type: "Payout Type", value: "payout_type"},
        {type: "Unit type", value: "unit_type"},
        {type: "Insurance partner", value: "insurance_partner"}
    ]

    const data = explore.find(val => val.id == params.id);

    const Desc = {
        location: data.location,
        cycle: data.cycle,
        data: []
    }
    Desc["data"] = descOptions.map(val => (
        {type: val.type, value: data[val.value]}
    ));
    
    const name = "Cyan Limited";
    // const like = ["Dan Credit Facilities","Nigeria and the UK","6 Months"]
    const completed = ["completed", "You have Completed this investment"]

    return (
        <div className="popup_container" style={{ zIndex: "1000" }}>
            <div className="popup_dummy" onClick={handleNavigate}></div>
            <div className="popup_main">
                <Slider zIndex={1000} leave={leave}>
                    <div className="popup_top">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" 
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
                        strokeLinejoin="round" className="x" style={{color: "purple"}} onClick={handleNavigate}>
                            <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </div>
                    
                    <div className="popup_body">
                        <div className="image_container">
                            <div className="image">
                                <img src={imag} />
                            </div>
                        </div>
                        <div className="verified">Verified Opportunity</div>
                        <div className="details">
                            <div className="details_left">
                                <h2>{data.name}</h2>
                                <span className="small_txxt">By {data.company}</span>
                            </div>
                            <div className="details_right">
                                <h2>&#8358;{data.amt}</h2>
                                <span className="small_txxt">/ unit</span>
                            </div>
                        </div>
                        <Link to="completed" className="Button-completed" style={{textDecoration: "none"}}>Completed</Link>
                        <Link to="about" className="Button-about" style={{textDecoration: "none"}}>About this Opportunity</Link>
                        <span className="small_txxt">Units an be liquidated</span>
                        <div className="routes">
                            <div className="route">
                                <Link to="faqs" className="like_link" style={{textDEcoration: "none"}}>
                                    <img src={image} />
                                </Link>
                                <span className="small_txxt">FAQs</span>
                            </div>
                        </div>
                        <ul className="desc_lists">
                            {Desc.data.map((val, idx) => (
                                <li className="desc_list" key={idx}>
                                    <span className="small_txxt">{val.type}</span>
                                    <span className="med_txxt">{val.value}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="extra">
                            <span className="med_txxt" style={{fontWeight: "bold"}}>EXTRA INFORMATION</span>
                            <div className="extra_list">
                                <span className="small_txxt">Investment cycle</span>
                                <span className="med_txxt">{Desc.cycle}</span>
                            </div>
                            <div className="extra_list">
                                <span className="small_txxt">Location</span>
                                <span className="med_txxt">{Desc.location}</span>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
            <Routes>
                <Route path="faqs" element={<Faqs />} />
                <Route path="about" element={<About data={Desc} name={data["name"]} />} />
                <Route path="completed" element={<Completed />} />
            </Routes>
        </div>
    )
}

export default ViewExploreInvestment;