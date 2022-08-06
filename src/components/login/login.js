import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { 
    accountAction,
    targetAction,
    investmentAction, 
    safelockAction, 
    signatureAction, 
    passwordAction,
    limitAction,
    activitiesAction 
} from "../../state/index";

import { bindActionCreators } from "redux";
import store from "../../state/store";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import Loading from "../loading";
import Alert from "../alert/Alert";
import Axios from "axios";
import Input from "../input/Input";
import API from "../apiData";
import data from "../data";
import logo from "../../svgs/safelock-logo.svg";

//import an alert component that will take in error content

const LogIn = () => {

    const [loading, setLoading] = useState(false);
    const [state, setState] = useState({
        "input": null,
        "password": null
    });
    const [error, setError] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loadAccount } = bindActionCreators(accountAction, dispatch);
    const { loadTargets } = bindActionCreators(targetAction, dispatch);
    const { loadInvestments } = bindActionCreators(investmentAction, dispatch);
    const { loadSafelock } = bindActionCreators(safelockAction, dispatch);
    const { loadSignature } = bindActionCreators(signatureAction, dispatch);
    const { loadPassword } = bindActionCreators(passwordAction, dispatch);
    const { loadActivities } = bindActionCreators(activitiesAction, dispatch);
    const { loadLimit } = bindActionCreators(limitAction, dispatch);

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    //default image
    //"https://www.cnet.com/google-amp/news/cut-costs-around-the-house-now-heres-how/"

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const fetchUser = async (state) => {
            try {
                const userData = await Axios.post(API.user, state);
                const user = userData.data;
                // console.log(userData);
                if(user.err) {
                    // console.log(user.err)
                    setError("Something Went Wrong. Check Internet");
                    setLoading(false);
                }
                else if(user.message == null && !user.err) {
                    setError("Wrong Email/Phone Number and Password Combination");
                    setLoading(false);
                } 
                else {
                    const { 
                        userAccount,
                        userTargetsavings, 
                        userInvestments, 
                        userSafelocks
                    } = user.message;
                    loadPassword(state.password);
                    loadAccount(userAccount);
                    loadInvestments(userInvestments);
                    loadSafelock(userSafelocks);
                    //let all targets available balance be the val of account amt
                    //because it is what rep the actual available balance user has
                    loadTargets(userTargetsavings, userAccount["amt"]);

                    //get cloudinary signature from our backend
                    //so that we can use this to upload to cloudinary anytime
                    const signData = await Axios.get(API.cloudinary);
                    loadSignature(signData.data.response);

                    loadActivities([userAccount,userTargetsavings,userInvestments,userSafelocks])
                    loadLimit(userSafelocks.length+userTargetsavings.length);
                    // console.log(store.getState())
                    setLoading(false);
                    navigate("/dashboard/*");
                }
            } catch (err) {
                console.log(err)
                setError("Something Went Wrong. Check Internet");
                setLoading(false);
            }
        }

        fetchUser(state);
    }


    return (
        <div className="login"  style={{margin: "0px"}}>
            {error && 
               <Alert err={true} message={error} 
                  closeAlert={() => setError(false)} 
                />
            }
            <div className="brand">
                <img src={logo} />
                <h1>safevest</h1>
            </div>
            <div className="login_wrapper">
                <div className="login_content">
                    <h1>Login to your account</h1>
                    <span className="login_small">Securely login to your Piggyvest</span>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        
                        <Input label="Email or Phone Number" 
                          placeholder="" name="input" type="text"
                          handleChange={handleChange}
                          required
                        />
                       
                        <Input label="Password" 
                          placeholder="" name="password" type="password" 
                          handleChange={handleChange} 
                          required
                        />

                        <div className="login_base">
                            {/* <input type="submit"value={"Log In"}></input> */}
                            {!loading ? <input type="submit"value={"Log In"}></input>
                              : 
                              <div className="loading">
                                <Loading />
                              </div>
                            }
                        </div>
                    </form>
                </div>
                
            </div>
            <span className="signupLink">Don't have an account?
                <Link to="/signup" className="signupLink" style={{textDecoration: "none"}}> {"   Register"}</Link>
            </span>
            <Link to="/forgotpassword" className="forgot" style={{textDecoration: "none"}}>Forgot Password?</Link>
                
        </div>
    )
}

export default LogIn;