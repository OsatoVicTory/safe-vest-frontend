import React, { useState, useEffect } from "react";
// import { Routes, Route, Link } from "react-router-dom";
import PerfectScroll from "../perfectscroll/scroll";
import InvestScroll from "../perfectscroll/investScroll";
import savings from "./savingsExplore";
import investify from "./investExplore";
import nav from "./nav";
import './index.css';

const Explore = ({ isSavings }) => {

    const isNotInvestify = !window.location.pathname.includes("investify");

    let explore = isNotInvestify ? savings : investify;

    const Tar = isNotInvestify ? nav.savings : nav.investify

    const [id, setId] = useState(0);
    const color = isSavings ? "rgb(39,174,96)" : "purple";

    const [state, setState] = useState(explore);

    const filter = (val) => {
        if(val == 0) {
            setId(0);
            setState(explore);
            return;
        }
        const update = explore.filter(x => x.Category == Tar[val]);
        setId(val)
        setState(update);
    }

    return (
        <div className="my_container">
            <div className="my_content">
                <div className="my_top">
                    <ul className="my_lists">
                        {Tar.map((val, idx) => (
                            <li key={idx}style={{background: `${id==idx?color:"none"}`}} 
                            className={id==idx?"my_list_selected":"my_list"} 
                            onClick={() => filter(idx)}>
                                <span>{val}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                {isNotInvestify ? 
                    <PerfectScroll 
                    props={state}
                    isSavings={isSavings} /> :
                    <InvestScroll props={state} />
                }
            </div>
        </div>
    )
}

export default Explore;