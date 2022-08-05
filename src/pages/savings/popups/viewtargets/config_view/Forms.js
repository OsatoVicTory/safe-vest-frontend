import React, { useState } from "react";
import "./Forms.css";
import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
// import "./config_targets.css";
import { useDispatch, useSelector } from "react-redux";
import { accountAction, activitiesAction, targetAction } from "../../../../../state/index";
import { bindActionCreators } from "redux";
import Loading from "../../../../../components/loading";
import Alert from "../../../../../components/alert/Alert";
import Input from "../../../../../components/input/Input";
import Slider from "../../../../../components/perfectslider/Slider";
import cancel from "../../../../../svgs/arrow-right.svg";
import Axios from "axios";
import Paymentcard from "../../../../../components/creditCard/creditCard";
// import Params from "../viewtargetsData";
import store from "../../../../../state/store";
import API from "../../../../../components/apiData";


const Forms = ({ body, DatabaseParams, initialState }) => {

    
    const path = window.location.pathname;
    const [leave, setLeave] = useState(false);
    const navigate = useNavigate();
    // const params = useParams();
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const handleLeave = () => {
        setLeave(true);
       
        setTimeout(() => {
            navigate(-1);
        }, 500);
    }
    const dispatch = useDispatch();
    const { updateTargets, updateAllTargets } = bindActionCreators(targetAction, dispatch);
    const { updateAccount } = bindActionCreators(accountAction, dispatch);
    const { updateActivities } = bindActionCreators(activitiesAction, dispatch);
    const account = useSelector((state) => state.account);
    const plain_password = useSelector((state) => state.plain_password);
    const backend = `${API.savings}/update/${initialState["_id"]}`;

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const upload_toSavings = async (data) => {
        try {
            const upload = await Axios.put(backend, data);
            // console.log(upload)
            updateTargets(data);
            setLoading(false);
            const val = {
                text: `You [${body.type=="lock"?"Locked":"Broke"}] [${state.name}] savings challenge`,
                when: String(new Date()),
                type: "savings"
            }
            if(body.type=="lock"||body.type=="break") updateActivities(val);
            else {
                updateActivities({
                    text: `You Updated [${state.name}] Challenge`,
                    when: String(new Date()),
                    type: "savings"
                })
            }
            navigate("/dashboard/savings/target/*");
        } catch (err) {
            setLoading(false); 
            setError("Something Went Wrong. Check Internet");
        }
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const verifyPassword = (value) => {
            return plain_password == value;
        }
        if(!verifyPassword(state.password)) {
            setLoading(false);
            setError("Incorrect Password");
            setLoading(false);
        } else {
            let sendData = initialState;
            if(body.type == "Top up this target") {
                setLoading(true);
                var ref = path;
                if(path[path.length-1] == "*") ref = path.slice(0, path.length-1);
                setTimeout(() => {
                    setLoading(false);
                    navigate(`${ref}/card`);
                }, 1500);
            }

            else {
                if(body.type == "break" || body.type == "lock") {
                    //send only lock: true or break: true to backend
                    sendData = {
                        ...sendData,
                        [body.type]: true
                    }
                } 
                else {
                    DatabaseParams.map(x => {
                        if(state[x]) sendData[x] = state[x];
                    });
                    if(sendData["amt"] > sendData["target"]) sendData["target"] = sendData["amt"];
                }
                upload_toSavings(sendData)
            }
        }
    }

    const closeAlert =() => {
        setError(null);
    }

    return (
        <div className="topup">
            <div className="dummy" onClick={handleLeave}></div>
            <Slider zIndex={1000000} leave={leave}>
                {error && <Alert err={true} message={error} closeAlert={closeAlert} />}
                <div className="popup_top">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" 
                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
                    strokeLinejoin="round" className="x" style={{color: "rgb(39,174,96)"}} onClick={handleLeave}>
                        <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </div>
                    
                <div className="popup_body">
                    <h1>{`Target ${body.type}`}</h1>
                    <p>{body.title}</p>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        {body.body.map((val, idx) => (
                            <Input label={val.label} key={idx}
                            placeholder={val.label} 
                            type={val.type} name={val.name}
                            dropdown={val.type=="dropdown"?val.dropdown:null}
                            handleChange={handleChange} />
                        ))}
                        <div className="complete_base" style={{position: "fixed"}}>
                            
                            {!loading ? <input type="submit" value="Submit" style={{backgroundColor: "rgb(39,174,96)"}}></input>
                              : 
                              <div className="loading" style={{backgroundColor: "rgb(39,174,96)"}}>
                                <Loading />
                              </div>
                            }
                        </div>
                    </form>
                </div>
            </Slider>
            <Routes>
                <Route path="card" element={<Paymentcard params={state} id={null} bg={"none"} />} />
            </Routes>
        </div>
    )
}

export default Forms;