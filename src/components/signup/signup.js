import React, { useEffect, useState } from "react";
import "./signup.css";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Alert from "../alert/Alert";
import Loading from "../loading";
import Input from "../input/Input";
import logo from "../../svgs/safelock-logo.svg";
import API from "../apiData";

const Signup = () => {

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [error, setError] = useState(false);

    
    const [state, setState] = useState({
        card_name: null,
        cvc: null,
        card_number: null,
        expiry: null,
        amt: 0,
        lst_redeemed: null,
        lst_withdrawal: null,
        lst_balance: 0,
        flexnaira_amt: 0,
        flexnaira_withdrawal: null,
        flexnaira_topup: null
    });
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    
    const backend = `${API.account}/add`;
    var digits = "0123456789";

    const generateId = () => {
        return uuid().slice(0,8).split("").map(val => {
            const rand = Math.floor(Math.random() * 3);
            if(!digits.includes(val) && (rand == 1 || rand == 3)) return val.toUpperCase();
            else return val;
        }).join("");
    }

    const handleClick = (e) => {
        e.preventDefault();
        setLoading(true);
        const name = state.first_name.split(" ");
        const data = {
            ...state,
            ["first_name"]: name[0],
            ["last_name"]: name[1] || null,
            ["user_id"]: generateId()
        }

        const sendData = async () => {
            try {
                const send = await Axios.post(backend, data);
                // console.log(send);
                if(send.data.err) {
                    setError("Something Went Wrong. Check Internet");
                    setLoading(false);
                } else {
                    setLoading(false);
                    navigate("/login");
                }
            } catch (error) {
                setError("Something Went Wrong. Check Internet");
                setLoading(false);
            }
        }

        sendData();

    }

    const inputs = [
        {label: "Full Name", name: "first_name"},
        {label: "Email Address", name: "email"},
        {label: "Phone Number", name: "phone_number"},
        {label: "Password", name: "password"}
    ]

    return (
        <div className="signup" style={{margin: "0px"}}>
            {error && 
               <Alert err={error.includes("Wrong")?true:false} message={error} 
                  closeAlert={() => setError(false)} 
                />
            }
            <div className="brand">
                <img src={logo} />
                <h1>safevest</h1>
            </div>
            <div className="signup_wrapper">
                <div className="signup_content">
                    <h1>Create a Secure Account</h1>
                    <span className="signup_small">Welcome to the future of savings and investments</span>
                    <form onSubmit={(e) => handleClick(e)}>
                        
                        {inputs.map((val, idx) => (
                            <Input label={val.label} key={idx}
                                placeholder={val.label} name={val.name} 
                                type={val.name=="password"?"password":"text"}
                                handleChange={handleChange}
                            />
                        ))}

                        <div className="signup_base">
                            {/* <input type="submit"value={"Log In"}></input> */}
                            {!loading ? <input type="submit"value={"Create Account"}></input>
                              : 
                              <div className="loading">
                                <Loading />
                              </div>
                            }
                        </div>
                    </form>
                </div>
                
            </div>
            <span className="login">Already have an account?
                <Link to="/login" className="login_" style={{textDecoration: "none", marginTop: "5px"}}> {"   Log In"}</Link>
            </span>
                
        </div>
    )
}

export default Signup;