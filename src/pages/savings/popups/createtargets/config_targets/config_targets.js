import React, { useState } from "react";
import Complete from "./Complete";
import { Routes, Route, Link } from "react-router-dom";
import "./config_targets.css";
import Input from "../../../../../components/input/Input";
import Slider from "../../../../../components/perfectslider/Slider";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Loading from "../../../../../components/loading";
// import Alert from "../../../../../components/alert/Alert";
import cancel from "../../../../../svgs/arrow-right.svg";
// import cancel from "../../../../../svgs/arrow-right.svg";



const ConfigTarget = ({ body }) => {

    const [leave, setLeave] = useState(false);
    const navigate = useNavigate();
    const handleLeave = () => {
        setLeave(true);
       
        setTimeout(() => {
            navigate(-1);
        }, 500);
    }
    const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);
    const genId = "TAR-" + uuid();
    const [state, setState] = useState({
        "name": null,
        "Category": null,
        "frequency": null,
        "image_url": null,
        "time": null,
        "id": genId,
        "start_date": null,
        "end_date": null,
        "name": null,
        "type": "savings", 
        "category": "ongoing",
        "url": `/dashboard/savings/target/view_target/${genId}/*`,
        "Category": null,
        "friends": null,
        "savings_preference": null,
        "user_id": null, 
        "amt": null, 
        "amttype": "My Balance",
        "target": "0",
        "interest": "20%",
        "days_left": null,
        "nxtparam": "Days Left", 
        "nxtvalue": null, 
        "completed": false,
        "members": "1", 
        "rate": "0",
        "lock": false, 
        "break": false, 
    });
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate(`/dashboard/savings/target/create_target/${body.type}/complete`);
        }, 500);
        // console.log(state);
    }

    return (
        <div className="config_targets">
            <div className="dummy" onClick={() => handleLeave()}></div>
            <Slider zIndex={1000000} leave={leave}>
                {/* <Link to="complete">Comp</Link> */}
                <div className="popup_top">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" 
                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
                    strokeLinejoin="round" className="x" style={{color: "rgb(39,174,96)"}} onClick={handleLeave}>
                        <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </div>
                    
                <div className="popup_body">
                    <h1>{`Create a ${body.type} target`}</h1>
                    <p>{body.title}</p>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        {body.body.map((val, idx) => (
                            <Input label={val.label} key={idx}
                            placeholder={val.label} type={val.type}
                            dropdown={val.dropdown} 
                            name={val.name} handleChange={handleChange}/>
                        ))}
                        <div className="complete_base" style={{position: "fixed"}}>
                            {!loading ? 
                              <input type="submit" value={"Continue"} style={{backgroundColor:"rgb(39,174,96)"}}></input>
                              : 
                              <div className="loading" style={{backgroundColor:"rgb(39,174,96)"}}>
                                <Loading />
                              </div>
                            }
                            
                        </div>
                    </form>
                </div>
                
            </Slider>
            <Routes>
                <Route path="complete" element={<Complete type={body.type} values={state} />} />
            </Routes>
        </div>
    )
}

export default ConfigTarget;