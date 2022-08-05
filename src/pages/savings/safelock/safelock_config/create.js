import React, { useState } from "react";
// import "./Forms.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Slider from "../../../../components/perfectslider/Slider";
import cancel from "../../../../svgs/arrow-right.svg";
import Loading from "../../../../components/loading";
import { useSelector, useDispatch } from "react-redux";
import { safelockAction } from "../../../../state";
import { bindActionCreators } from "redux";
// import Axios from "axios";
import { v4 as uuid } from "uuid";
import Alert from "../../../../components/alert/Alert";
import Input from "../../../../components/input/Input";
import "./create.css";
import Creditcard from "../../../../components/creditCard/creditCard";


const CreateSafelock = () => {

    
    const [leave, setLeave] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.account)["user_id"];
    const { createSafelock } = bindActionCreators(safelockAction, dispatch);
    const handleLeave = () => {
        setLeave(true);
       
        setTimeout(() => {
            navigate(-1);
        }, 500);
    }
    
    const genId = "SFL-" + uuid();
    const backend = "http://localhost:8080/db/user/safelock/add";
    const [state, setState] = useState({
        "name": null,
        "type": "safelock", 
        "url": `/dashboard/savings/safelock/view_safelock/${genId}/*`, 
        "image_url": null,
        "user_id": userId, 
        "id": genId,
        "withdrawn": false,
        "frequency": null,
        "amt": "0.00", 
        "amttype": "My Balance",
        "target": "0.00",
        "interest": "7",
        "days_left": null,
        "nxtparam": "Days left", 
        "nxtvalue": null, 
        "start_date": null,
        "end_date": null,
        "completed": false,
        "rate": "0", 
    }) 
    const input = [
        {label:"Amount to Lock",placeholder:"25000",name:"amt",type:"number"},
        {label:"Title of Safelock",placeholder:"My New Lock",name:"name",type:"text"},
        {label:"Start Date",placeholder:"Pick a Date",name:"start_date",type:"dropdown",dropdown:"date"},
        {label:"Set Payback Date",placeholder:"Pick a Date",name:"end_date",type:"dropdown",dropdown:"date"}
    ]
    
    const goodDates = () => {
        return new Date(state.start_date).getTime() <= new Date(state.end_date).getTime(); 
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        if(!goodDates()) {
            // if(new Date(state.start_date).getTime() < new Date(state.end_date).getTime()) {
            setError('Wrong Start And End Date');
            setLoading(false);
            return;
        }
        
        const Data = {
            ...state,
            ["amt"]: state.target
        }

        setTimeout(() => {
            setLoading(false);
            navigate("/dashboard/savings/safelock/create_safelock/card");
        }, 1000);
    }

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const closeAlert = () => {
        setError(null);
    }

    return (
        <div className="create_container">
            <div className="dummy" onClick={handleLeave}></div>
            <div className="create">
                <Slider zIndex={100000} leave={leave}>
                    {error && <Alert err={true} message={error} closeAlert={closeAlert} />}
                    <div className="create_top">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" 
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
                        strokeLinejoin="round" className="x" style={{color: "rgb(34,149,242)"}}
                        onClick={handleLeave}>
                            <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>

                    </div>
                        
                    <div className="create_body">
                        <h1 style={{color: "rgb(34,149,242)"}}>Create A Safelock</h1>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            {input.map((val, idx) => (
                                <Input key={idx} label={val.label} 
                                  name={val.name} placeholder={val.placeholder} 
                                  type={val.type} 
                                  dropdown={val.type=="dropdown"?val.dropdown:null}
                                  handleChange={handleChange} 
                                />
                            ))} 
                            <div className="complete_base" style={{position: "fixed"}}>
                                {/* <input type="submit" value="Submit"></input> */}
                                {!loading ? 
                                    <input type="submit" value="Submit"></input>
                                    : 
                                    <div className="loading">
                                        <Loading />
                                    </div>
                                }
                            </div>
                        </form>
                    </div>
                </Slider>
            </div>
            <Routes>
                <Route path="card" element={<Creditcard params={state} bg={"none"} />} />
            </Routes>
        </div>
    )
}

export default CreateSafelock;