import React, { useState } from "react";
import "./forgotPassword.css";
import Loading from "../loading";
import { useNavigate } from "react-router-dom";
import Alert from "../alert/Alert";
import Axios from "axios";
import Input from "../input/Input";
import logo from "../../svgs/safelock-logo.svg";
import API from "../apiData";

//import an alert component that will take in Message content

const Forgotpassword = () => {

    const [loading, setLoading] = useState(false);
    const [state, setState] = useState({
        "input": null,
        "password": null
    });
    const [message, setMessage] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const update = async () => {
            try {
                const search = await Axios.put(`${API.user}/account/recovery`, state);
                // console.log(search);
                const data = search.data.message;
                if(data == "Wrong Input") {
                    setLoading(false);
                    setMessage("Wrong Email or Phone Number");
                    return;
                }
                setMessage("Password Updated Successfully");
                setTimeout(() => {
                    navigate("/login");
                }, 1500);
            } catch (err) {
                console.log(err);
                setMessage("Something Went Wrong. Check Internet");
                setLoading(false);
            }
        }
        update();
    }


    return (
        <div className="forgotpassword"  style={{margin: "0px"}}>
            {message && 
               <Alert err={message.includes("Wrong")} 
                  message={message} 
                  closeAlert={() => setMessage(false)} 
                />
            }
            <div className="brand">
                <img src={logo} />
                <h1>safevest</h1>
            </div>
            <div className="forgotpassword_wrapper">
                <div className="forgotpassword_content">
                    <h1>Recover Password</h1>
                    <span className="forgotpassword_small">Securely Renew Your Password</span>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        
                        <Input label="Email or Phone Number" 
                          placeholder="" name="input" type="text"
                          handleChange={handleChange}
                          required
                        />
                       
                        <Input label="New Password" 
                          placeholder="" name="password" type="password" 
                          handleChange={handleChange} 
                          required
                        />

                        <div className="forgotpassword_base">
                            {/* <input type="submit"value={"Log In"}></input> */}
                            {!loading ? <input type="submit"value={"Reset Password"}></input>
                              : 
                              <div className="loading">
                                <Loading />
                              </div>
                            }
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    )
}

export default Forgotpassword;