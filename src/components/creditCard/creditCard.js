import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import "./creditCard.css";
import Slider from "../perfectslider/Slider";
import Loading from "../loading";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { 
    accountAction, 
    targetAction, 
    safelockAction, 
    activitiesAction,
    limitAction 
} from "../../state";
import Alert from "../alert/Alert";
import store from "../../state/store";
import Limit from "../limitData";
import Axios from "axios";
import API from "../apiData";

const Creditcard = ({ params, bg }) => {
    
    const [leave, setLeave] = useState(false);
    const acc = useSelector((val) => val.account);
    const limit = useSelector((val) => val.limit);
    const dispatch = useDispatch();
    const { updateAccount } = bindActionCreators(accountAction, dispatch);
    const { updateAllTargets } = bindActionCreators(targetAction, dispatch);
    const { createSafelock } = bindActionCreators(safelockAction, dispatch);
    const { updateActivities } = bindActionCreators(activitiesAction, dispatch);
    const { updateLimit } = bindActionCreators(limitAction, dispatch);
    const [state, setState] = useState({
        ...acc
    });
    const allowShow = acc["card_number"] == null;
    const [showform, setShowform] = useState(allowShow);
    const [focused, setFocus] = useState(false);
    const [inputfocus, setInputfocus] = useState(0);
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleLeave = () => {
        setLeave(true);
       
        setTimeout(() => {
            navigate(-1);
        }, 500);
    }

    const backendAccounts = `${API.account}/update/${acc._id}`;
    const backendSafelock = `${API.safelock}/add`;

    const Form = ["card_number","expiry","card_name","cvc"];
    const refLen = ["16","4","1000","3"];
    let ref1 = useRef(null);
    let ref2 = useRef(null);
    let ref3 = useRef(null);
    let ref4 = useRef(null);
    let refs = [ref1, ref2, ref3, ref4];

    const handleFocus = (x) => {
        if(x == "cvc") setFocus(true);
        else setFocus(false);
        let index = Form.indexOf(x);
        setInputfocus(index);
    }

    const closeAlert = () => {
        setMessage(null);
    }

    const empty = () => {
        for(var i=0;i<Form.length;i++) {
            if(!state[Form[i]]) return true;
        }
        return false;
    }
    const correctFormat = () => {
        if(state.card_number < 16) {
            setMessage("Wrong Number. It Can't Be Less Than 16");
            return false;
        }
        else if(state.cvc < 3) {
            if(!message) setMessage("Wrong CVC. It Can't Be Less Than 3");
            return false;
        }
        else if(state.expires < 4) {
            if(!message) setMessage("Wrong Date Format");
            return false;
        }
        else if(empty()) {
            if(!message) setMessage("Wrong Value. Input Cannot Be Empty");
            return false;
        }
        else return true;
    }


    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
        if(e.target.name !== "cvc") {
            var id = Form.indexOf(e.target.name);
            if(e.target.value.length == refLen[id]) {
                refs[id+1].current.focus();
            }
        } 
    }
    
    const sendData = async (url, sendData, type) => {
        try {
            if(type == "savings") {
                const newaccount = {
                    ...sendData,
                    amt: (sendData.amt-0) + (params.amt-0),
                    top_up: new Date()
                }
                const send = await Axios.put(url, newaccount);
                // console.log(send, newaccount);
                //all targets available balance should be updated
                updateAllTargets(newaccount.amt);
                updateAccount(newaccount);
                const val = {
                    text: `You Top up Piggybank`,
                    when: String(new Date()),
                    type: "piggybank"
                }
                updateActivities(val);
                setLoading(false);
                setMessage("Payment Successful");
                setTimeout(() => {
                    navigate("/dashboard/savings/target/*");
                }, 2000);
                
            } else if(type == "safelock") {
                if(limit >= Limit) {
                    setLoading(false);
                    setMessage("You Have Used Up Your Memory Limit on Our Database");
                    return;
                }
                const upload = await Axios.post(url, sendData);
                // console.log(upload)
                sendData["_id"] = upload.data.message;
                createSafelock(sendData);
                const val = {
                    text: `You Started [${sendData.name}] Safelock`,
                    when: String(new Date()),
                    type: "safelock"
                }
                updateActivities(val);
                updateLimit(limit+1);
                setLoading(false);
                setMessage("Payment Successful");
                setTimeout(() => {
                    navigate("/dashboard/savings/safelock/*"); 
                }, 2000);      
            } else if(type == "flexnaira") {
                const newaccount = {
                    ...sendData,
                    flexnaira_topup: params.flexnaira_topup,
                    flexnaira_amt: (sendData.flexnaira_amt-0) + (params.amt-0)
                }
                const upload = await Axios.put(url, newaccount);
                // console.log(upload)
                updateAccount(newaccount);
                const val = {
                    text: `You Top up Your Flexnaira Wallet`,
                    when: String(new Date()),
                    type: "flexnaira"
                }
                updateActivities(val);
                setLoading(false);
                setMessage("Payment Successful");
                setTimeout(() => {
                    navigate("/dashboard/savings/flexnaira/*"); 
                }, 2000); 
            } else {
                const send = await Axios.put(url, sendData);
                // console.log(send);
                updateAccount(sendData);
                setLoading(false);
                setMessage("Card Updated Successfully");
                setTimeout(() => {
                    navigate("/dashboard/account/*"); 
                }, 2000);
            
            }
        } catch (err) {
            console.log(err);
            setLoading(false);
            setMessage("Something Went Wrong. Check Internet");
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        if(!correctFormat()) {
            setLoading(false);
        } else {
            setLoading(true);
            const loc = window.location.pathname;
            if(loc.includes("target")) {
                //set up top up with params data and push to db in backend
                sendData(backendAccounts, acc, "savings");
            } else if(loc.includes("safelock")) {
                //set up safelock with params and push to db
                sendData(backendSafelock, params, "safelock");
            } else if(loc.includes("flexnaira")) {
                //set up flexnaira with params and push to db
                sendData(backendAccounts, acc, "flexnaira");
            } else {
                //set up top up with params data and push to db in backend
                sendData(backendAccounts, state, "account");
            }
        }
    }

    const handleClick = () => {
        setLoading(true);

        if(!correctFormat()) {
            setLoading(false);
        } else {
            setLoading(true);
            const loc = window.location.pathname;
            if(loc.includes("target")) {
                //set up top up with params data and push to db in backend
                sendData(backendAccounts, acc, "savings");
            } else if(loc.includes("safelock")) {
                //set up safelock with params and push to db
                sendData(backendSafelock, params, "safelock");
            } else if(loc.includes("flexnaira")) {
                //set up flexnaira with params and push to db
                sendData(backendAccounts, acc, "flexnaira");
            } else {
                //set up top up with params data and push to db in backend
                sendData(backendAccounts, state, "account");
            }
        }
    }
    
    
    return (
        <div className="creditcard">
            <div className="dummy" onClick={handleLeave} style={{backgroundColor: bg}}></div>
            <Slider zIndex={100000000} leave={leave}>
                {message && <Alert err={message.includes("Wrong")?true:false} message={message} closeAlert={closeAlert} />}
                <div className="creditcard_top">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" 
                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
                    strokeLinejoin="round" className="x" style={{color: "rgb(13,96,216)"}} onClick={handleLeave}>
                        <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </div>
                <div className="creditcard_body">
                    <h1 style={{color: "rgb(13,96,216)"}}>CREDIT CARD</h1>
                    <span>Make payments or top up</span>
                    <Card 
                      name={state.card_name} 
                      number={state.card_number}
                      cvc={state.cvc}
                      expires={state.expiry}
                      focused={focused}
                    />
                    {!showform ? 
                        <div className="filled_card">
                            <div className="card_switch" 
                            onClick={() => setShowform(true)}>
                                USE ANOTHER CARD
                            </div>
                            <div className="creditcard_base">
                                {/* <input type="submit"value={"Log In"}></input> */}
                                {!loading ? 
                                    <div className="submit" onClick={handleClick}>Submit</div> :
                                    <div className="loading">
                                        <Loading />
                                    </div>
                                }
                            </div>
                        </div> :
                        <form onSubmit={(e) => handleSubmit(e)}>
                            {Form.map((val, idx) => (
                                <div className="form-div" key={idx}>
                                    <span className="form-label">{val}</span>
                                    <input 
                                    name={val}
                                    type={val.includes("name")?"text":"number"}
                                    ref={refs[idx]} 
                                    placeholder={acc[val]?acc[val]:val} 
                                    // value={refs[idx].current.value || undefined}
                                    onFocus={() => handleFocus(val)}
                                    onChange={(e) => handleChange(e)}
                                    style={{border: `0.9px solid ${(idx==inputfocus?"blue":"rgb(94, 94, 94)")}`}}
                                    required
                                    />
                                </div>
                            ))}
                            <div className="creditcard_base">
                                {/* <input type="submit"value={"Log In"}></input> */}
                                {!loading ? 
                                    <input type="submit"value={"Submit"}></input> :
                                    <div className="loading">
                                        <Loading />
                                    </div>
                                }
                            </div>
                        </form>
                    } 
                </div>
            </Slider>
        </div>
    )
}

export default Creditcard;