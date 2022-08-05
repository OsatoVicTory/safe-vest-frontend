import React, { useState } from "react";
import "./withdraw.css";
import { useNavigate } from "react-router-dom";
import Input from "../input/Input";
import Slider from "../perfectslider/Slider";
import cancel from "../../svgs/arrow-right.svg";
import withdraw from "./withdrawData";
import { useSelector, useDispatch } from "react-redux";
import { accountAction, safelockAction, activitiesAction } from "../../state";
import Alert from "../alert/Alert";
import Loading from "../loading";
import store from "../../state/store";
import Axios from "axios";
import API from "../apiData";
import { bindActionCreators } from "redux";


const Withdraw = ({ amount, Data, bg, isFlexnaira }) => {

    const acc = useSelector((state) => state.account);
    let { amt, flexnaira_amt } = acc;
    const plainPassword = useSelector((state) => state.plain_password);
    //amt is a ref to determine withdrawable amount
    //if amount is defined, then we are coming from safelock path and amount 
    //is what we can withdraw else we are coming from target, and thus we can only
    //withdraw up to amount in our account
    if(amount) amt = amount;
    const dispatch = useDispatch();
    const { updateAccount } = bindActionCreators(accountAction, dispatch);
    const { updateSafelock } = bindActionCreators(safelockAction, dispatch);
    const { updateActivities } = bindActionCreators(activitiesAction, dispatch);
    const [leave, setLeave] = useState(false);
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(false);
    const accountEnd = `${API.account}/update/${acc._id}`;
    const safelockEnd = amount?`${API.safelock}/update/${Data._id}`:null;
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();
    const handleLeave = () => {
        setLeave(true);
       
        setTimeout(() => {
            navigate(-1);
        }, 500);
    }

    const closeAlert = () => {
        setMessage(null);
    }

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // if(isFlexnaira) console.log(flexnaira_amt, state.amt)
        if(state.password != plainPassword) {
            setMessage("Wrong Password");
            setLoading(false);
            return;
        }
        else if(isFlexnaira && (state.amt-0) > (flexnaira_amt-0)) {
            console.log("y")
            setMessage("Wrong Amount. You Can't Withdraw That Amount");
            setLoading(false);
            return;
        }
        else if(!isFlexnaira && (state.amt-0) > (amt-0)) {
            setMessage("Wrong Amount. You Can't Withdraw That Amount");
            setLoading(false);
            return;
        }

        const uploadUpdate = async () => {
            try {
                //if there amount is defined, then we are coming from safelock path
                if(amount) {
                    const sendData = {...Data};
                    sendData["password"] = null;
                    sendData["completed"] = true;
                    sendData["withdrawn"] = true;
                    const send = await Axios.put(safelockEnd, sendData);
                    console.log(send);
                    updateSafelock(sendData);
                    const val = {
                        text: `You Cashedout your ${sendData.name} Safelock`,
                        when: new Date(),
                        type: "safelock"
                    }
                    updateActivities(val);
                    console.log(store.getState());
                    setLoading(false);
                    setMessage("Withdrawal Successful");
                    setTimeout(() => {
                        navigate("/dashboard/savings/safelock/*")
                    }, 2000);
                } else {
                    let sendData = {
                        ...acc
                    };
                    let val;
                    if(isFlexnaira) {
                        sendData["flexnaira_amt"] -= state.amt;
                        sendData["flexnaira_withdrawal"] = new Date();
                        val = {
                            text: "You Withdrew from your Flexnaira",
                            when: new Date(),
                            type: "flexnaira"
                        }
                    }
                    else {
                        sendData["amt"] -= state.amt;
                        sendData["withdrawal"] = new Date();
                        val = {
                            text: "You Withdrew from your Piggybank",
                            when: new Date(),
                            type: "piggybank"
                        }
                    }
                    sendData["password"] = null;
                    const send = await Axios.put(accountEnd, sendData);
                    // console.log(send);
                    updateAccount(sendData);
                    updateActivities(val);
                    setLoading(false);
                    // console.log(store.getState());
                    setMessage("Withdrawal Successful");
                    setTimeout(() => {
                        const piggybankLink = window.location.pathname.includes("piggybank");
                        navigate(`/dashboard/savings/${isFlexnaira?"flexnaira":piggybankLink?"piggybank":"target"}/*`)
                    }, 2000);
                }
            } catch (err) {
                console.log(err);
                setMessage("Something Went Wrong. Check Internet");
                setLoading(false);
            }
        }

        uploadUpdate();
    }

    return (
        <div className="withdraw">
            <div className="dummy" onClick={handleLeave} style={{backgroundColor: bg || "rgba(27,27,27,0.75)"}}></div>
            <Slider zIndex={1000000} leave={leave}>
                {message && <Alert err={message.includes("Wrong")} message={message} closeAlert={closeAlert}/>}
                <div className="withdraw_top">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" 
                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
                    strokeLinejoin="round" className="x" style={{color: "rgb(34,149,242)"}} onClick={handleLeave}>
                        <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </div>
                    
                <div className="withdraw_body">
                    <h1 style={{color: "rgb(34,149,242)"}}>WITHDRAWAL</h1>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        {withdraw.map((val, idx) => (
                            <Input key={idx} label={val.label} handleChange={handleChange} name={val.name}
                            placeholder={val.placeholder} type={val.type} dropdown={val.dropdown} />
                        ))}
                        <div className="complete_base" style={{position: "fixed"}}>
                            
                            {!loading ? <input type="submit" value="Withdraw" style={{backgroundColor: "rgb(34,149,242)"}}></input>
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
    )
}

export default Withdraw;