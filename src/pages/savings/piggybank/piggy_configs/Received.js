import React from "react";
import circle from "../../../../svgs/circle.svg";
import "./piggy.css";
import { useSelector } from "react-redux";

//DM Sans,sans-serif!important;
const Received = ({ amt, lstDate, dateVal }) => {

    
    //lstDate returns something like Jun 30 2022 or Jul 31 2022
    //so lets get the day number "30 or 31" so we can just do replace with 1...30
    //when calculating for each day in the month
    let Day = lstDate.slice(4,6);
    const account = useSelector((state) => state.account)

    const Arr = new Array(parseInt(Day)).fill(0);

    return (
        <div className="received">
            <span className="small">
                You received 10% interest on just your Piggybank savings for {dateVal.join(" ")}. Interests
                on Piggybank savings is currently at 10% per annum and is calculated daily for every month.
                For even better interests, use the Safelock feature.
            </span>
            <div className="display_interest">
                <img src={circle} />
                <div className="display_flex">
                    <span className="small" style={{color: "white"}}>{dateVal.join(" ")} Interest Payment</span>
                    <span className="big" style={{color: "white"}}>&#8358;{amt}</span>
                </div>
            </div>
            <div className="show_breakdown">
                <ul className="breakdown_lists">
                    {Arr.map((val, idx) => (
                        <li className="breakdown_list" key={idx}>
                            {/* <img src={circle} /> */}

                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" 
                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
                            strokeLinejoin="round" className="feather feather-check-circle" 
                            style={{color: "rgb(39, 174, 96)", marginRight: "0.5rem"}}>
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                            <div className="display_flex">
                                <span className="med" style={{color: "rgb(39, 174, 96)", fontSize: "19px", fontWeight:"bold"}}>₦{amt}</span>
                                <span className="small">
                                    Balance @ {lstDate.replace(Day, (idx+1 < 10 ? "0"+(idx+1) : idx+1))} - &#8358;{amt}
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Received;