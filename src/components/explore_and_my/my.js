import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import PerfectScroll from "../perfectscroll/scroll";
import './index.css';

const MyTargets = ({ isSavings, ongoing, completed }) => {

    const navigate = useNavigate();

    //data received here is of this form
    //data => data[0]=ongoing, data[1]=completed
    const color = isSavings ? "rgb(39,174,96)" : "purple"

    const Tar = [{name: "Ongoing"},{name: "Completed"}]
    const [id, setId] = useState(0);

    const handleNavigate = (x) => {
        setId(x);
        if(!isSavings) {
            if(x == 0) navigate(`/dashboard/investify/*`);
            else navigate(`/dashboard/investify/completed/*`); 
        } else {
            if(x == 0) navigate(`/dashboard/savings/target/*`);
            else navigate(`/dashboard/savings/target/completed/*`); 
        }
    }

    return (
        <div className="my_container">
            <div className="my_content">
                <div className="my_top">
                    <ul className="my_lists">
                        {Tar.map((val, idx) => (
                            <li key={idx} style={{background: `${id==idx?color:"none"}`}} className={id==idx?"my_list_selected":"my_list"} 
                            onClick={() => handleNavigate(idx)}>
                                <span>{val.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <Routes>
                    <Route path="/*" element={<PerfectScroll props={ongoing} isSavings={isSavings} />}/>
                    <Route path="/completed/*" element={<PerfectScroll props={completed} isSavings={isSavings} />} />
                </Routes>
                
            </div>
        </div>
    )
}

export default MyTargets;