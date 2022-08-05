import React, { useState } from "react";
import "./Forms.css";
import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
// import "./config_targets.css";
import { useDispatch, useSelector } from "react-redux";
import { activitiesAction, limitAction, targetAction } from "../../../../../state/index";
import { bindActionCreators } from "redux";
import Loading from "../../../../../components/loading";
import Alert from "../../../../../components/alert/Alert";
import Input from "../../../../../components/input/Input";
import Slider from "../../../../../components/perfectslider/Slider";
import Limit from "../../../../../components/limitData";
import Axios from "axios";
import { exploreData } from "../viewtargetsData";
import API from "../../../../../components/apiData";

const Join = ({ data }) => {

    
    const backend = `${API.savings}/add`;
    const [leave, setLeave] = useState(false);
    const navigate = useNavigate();
    // const params = useParams();
    const [state, setState] = useState({
        Password: null,
        Source: null
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const handleLeave = () => {
        setLeave(true);
       
        setTimeout(() => {
            navigate(-1);
        }, 500);
    }
    const inputs = [
        {name:"Source", type:"dropdown", dropdown: "source"},
        {name:"Password", type:"password"},
    ]
    const dispatch = useDispatch();
    const { createTargets } = bindActionCreators(targetAction, dispatch);
    const { updateActivities } = bindActionCreators(activitiesAction, dispatch);
    const { updateLimit } = bindActionCreators(limitAction, dispatch);
    const { plain_password } = useSelector((state) => state.plain_password);
    const limit = useSelector((state) => state.limit);
    const account = useSelector((state) => state.account);

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const verifyPassword = () => {
        return state.Password == plain_password;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        if(!verifyPassword) {
            setLoading(false);
            setError("Wrong Password");
            return;
        }
        if(limit >= Limit) {
            setLoading(false);
            setError("You Have Used up Your Memory Limit On Our Database");
            return
        }
        let Data = {
            ...data,
            ["completed"]: false
        }
        const sendData = async () => {
            try {
                Data["user_id"] = account["user_id"];
                Data["url"] = Data["url"].replace("explore/", "");
                Data["amt"] = account.amt;
                const send = await Axios.post(backend, Data);
                Data["_id"] = send.data.message;
                // console.log(send);
                createTargets(Data);
                updateActivities({
                    text: `Joined [${data.name}] Savings Challenge`,
                    when: String(new Date()),
                    type: "savings"
                });
                updateLimit(limit+1);
                setLoading(false);
                // setError("")
                navigate("/dashboard/savings/target/explore/*");
            } catch (err) {
                console.log(err)
                setError("Something Went Wrong. Check Internet");
                setLoading(false);
            }
        }
        sendData();

    }
    const closeAlert = () => {
        setError(false)
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
                    <h1>Join This Challenge</h1>
                    <p style={{lineHeight: "2rem"}}>
                        This is a savings challenge to save ₦{data.amt+" "}  
                        each by “{data.end_date} (in {data.days_left} days)”. You earn {data.interest}%
                        interest per annum, paid daily. If you break this target before 
                        the {data.end_date} (withdrawal date), you will lose all the interest 
                        accrued and bear the 1% payment gateway charge for processing your 
                        deposits into this target. YOU COLLECT YOUR MONEY. No one has 
                        access to your deposits, but you alone.
                    </p>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        {inputs.map((val, idx) => (
                            <Input label={val.name} key={idx}
                            placeholder={val.name} 
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
        </div>
    )
}

export default Join;