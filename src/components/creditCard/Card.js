import React from "react";
import "./Card.css";
import chip from "../../svgs/chip.jpeg";

const Card = ({ name, number, cvc, expires, focused }) => {

    const defaultVal = ["1234 5678 9123 4567","00/01"];

    const formatValue = (val, type) => {
        if(val == null) return val;
        let value = "";
        if(type=="number") {
            for(var i=0;i<val.length;i++) {
                if((i+1)%4) value += val[i];
                else value += val[i]+" ";
            }
            return value;
        } 
        else if(type == "expires") {
            for(var i=0;i<val.length;i++) {
                if((i+1) != 2) value += val[i];
                else value += val[i]+"/";
            }
            return value;
        } 
        else return val
    }

    return (
        <div className="cCard">
            {!focused ? 
               <div className="card_front">
                  <div className="card_top"></div>
                  <img src={chip} />
                  <span className="card_number">{formatValue(number, "number") || defaultVal[0]}</span>
                  <span className="card_ref">NUMBER</span>
                  <div className="expire">
                    <div className="valid_thru">
                        <span className="valid">VALID</span>
                        <span className="thru">THRU</span>
                    </div>
                    <span className="expire_val">{formatValue(expires, "expires") || defaultVal[1]}</span>
                  </div>
                  <span className="card_name">{name||"JON DOE"}</span>
               </div> :
               <div className="card_back">
                  <div className="black"></div>
                  <div className="cvc">
                    <span>{cvc||" "}</span>
                  </div>
                  <span className="bottom">This Card is issued under blah blah blah</span>
               </div>
            }
        </div>
    )
}
export default Card;