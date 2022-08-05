import React, { useState, useRef, useEffect } from "react";
import "./Input.css";
import Dropdowns from "./inputDropdowns";
import circle from "../../svgs/circle-plain.svg";
import Select from "react-dropdown-select";

const Input = ({ label, placeholder, type, dropdown, name, handleChange }) => {

    let Options 
    if(dropdown == "bank") {
        Options = Dropdowns["bank"];
    } else if(dropdown == "date") {
        Options = Dropdowns[name];
    } else if(dropdown == "source") {
        Options = Dropdowns["source"];
    } else if(dropdown == "savings_preference") {
        Options = Dropdowns["savings_preference"]
    } else {
        Options = Dropdowns["category"]
    }

    const selectStyle = {
        
        width: "99%",
        boxSizing: "border-box",
        backgroundColor: "#edf2f7",
        paddingTop: "10px",
        paddingBottom: "10px",
        paddingLeft: "10px",
        paddingRight: "10px",
        marginTop: "2px",
        marginBottom: "2px",
        marginLeft: "2px",
        marginRight: "2px",
        borderRadius: "5px",
        outline: "none",
    }

    const handleClick = (val) => {
        // console.log(val)
        const e = {
            target: {
                name: name,
                value: val[0] ? val[0].value : null
            }
        }
        handleChange(e);
    }

    return (
        <div className="input_div">
            <span>{label}</span>
            {/* <input type={type} placeholder={placeholder} required /> */}
            {(type=="text" || type=="number" || type=="password") ? 
                <input type={type}
                placeholder={placeholder} 
                name={name} 
                onChange={(e) => handleChange(e)} required/> : 
                
                <Select options={Options}
                searchable={true}
                required={true}
                style={selectStyle}
                closeOnSelect={true}
                placeholder={`Select ${name.replace("_"," ")}`}
                onChange={(values) => handleClick(values)}
                />
            }
        </div>
    )
}

export default Input;