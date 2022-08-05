import React from "react";
import "./Alert.css";
import ok from "../../svgs/ok.svg";
import x from "../../svgs/x.svg";


const Alert = ({ err, message, closeAlert }) => {
    //message.includes("Wrong")?x:
    const isErr = message.includes("Wrong");

    return (
        <div className="alert" 
        style={{position: "fixed", borderLeft: `5px solid ${(isErr ? "red" : "rgb(39,174,96)")}`}}>
            <div className="alert_content">
                <img src={isErr ? x : ok}></img>
                <span className="alert_span" style={{color: "black"}}>{message}</span>
                <button onClick={closeAlert}>OK</button>
            </div>
        </div>
    )
}

export default Alert;