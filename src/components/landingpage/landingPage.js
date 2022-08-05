import React from "react";
import "./landingPage.css";
import { useNavigate } from "react-router-dom";
import logo from "../../svgs/safelock-logo.svg";

const LandingPage = () => {
    
    const message = [
        "Welcome To One Of My Biggest Projects {SafeVest}.",
        " A Secure Uhm ..., Well It Just Secure By Name. By The Way",
        "Your Password are Hashed So No One Sees it including Me",
        "And Your Data Are Stored In Some MongoDB Database Of Mine",
        "So Good Luck Putting Some Of Your Actual Details.",
        "This App Is Actually A Replica Of The Famous Piggyvest", 
        "Platform You Know Of. Note You Have Memory Limit Of 2MB Once Exceeded",
        "You Cannot Send To My DB. Goodluck And Just Enjoy The App. Thanks."
    ]
    const toText = message.join(" ");
    const navigate = useNavigate();

    const navLogin = () => {
        navigate("/login");
    }

    const navSignUp = () => {
        navigate("/signup");
    }

    return (
        <div className="landingpage">
            <div className="brand_logo">
                <img src={logo} />
                <h1>safevest</h1>
            </div>
            <div className="lp_wrapper">
                <div className="lp_content">
                    <h1>Welcome Onboard</h1>
                    <span className="lp_span">{toText}</span>
                    <div className="lp_routes" onClick={navLogin}>LOG IN</div>
                    <div className="lp_routes" onClick={navSignUp}>SIGN UP</div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;