import React, { useState } from "react";
import "./flexform.css";
import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../../components/loading";
import Alert from "../../../components/alert/Alert";
import Input from "../../../components/input/Input";
import Slider from "../../../components/perfectslider/Slider";
import Paymentcard from "../../../components/creditCard/creditCard";


const Flexform = () => {
    
    const path = window.location.pathname;
    const [leave, setLeave] = useState(false);
    const navigate = useNavigate();
    const params = useParams();
    const account = useSelector((state) => state.account);
    const plain_password = useSelector((state) => state.plain_password);
    // console.log(plain_password)
    const today = new Date();
    const [state, setState] = useState({
        flexnaira_topup: today
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const handleLeave = () => {
        setLeave(true);
       
        setTimeout(() => {
            navigate(-1);
        }, 500);
    }

    const inputs = [
        {label:"Enter an Amount", name:"amt",type:"number"},
        {label: "Source of Funding", name: "source",type:"dropdown"},
        {label:"Please enter your password to confirm this action", name: "password",type:"password"}
    ]

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
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
        } else {
            
            var ref = path;
            if(path[path.length-1] == "*") ref = path.slice(0, path.length-1);
            setTimeout(() => {
                setLoading(false);
                navigate(`${ref}card`); 
            }, 1500);  
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
                    <h1>TOP UP YOUR FLEX WALLET</h1>
                    <p>Instantly Top up your Flex Wallet. It can be withdrawn anytime you like.</p>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        {inputs.map((val, idx) => (
                            <Input label={val.label} key={idx}
                            placeholder={val.label} type={val.type} name={val.name}
                            dropdown={val.type=="dropdown"?"source":null}
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
                <Route path="card" element={<Paymentcard params={state} id={null} />} />
            </Routes>
        </div>
    )
}

export default Flexform;