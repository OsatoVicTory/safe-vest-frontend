import React, { useState } from "react";
import circle from "../../svgs/circle-plain.svg";
import Box from "../../components/Box/Box.js";
import "../../components/Box/Box.css";
import "./home.css";

const ToDo = () => {

    const List = [
        "Verify your email address",
        "Add a Flex Naira",
        "Tell us about yourself",
        "Start a savings challenge"
    ]
    // const [list, setList] = useState(List);
    // const [val, setVal] = useState(null)

    // const handleButton = () => {
    //     if(!val) return;
    //     let update = [...list, val];
    //     setList(update);
    // }

    return(
        <div className="todo">
            <span>TO-DO-LIST</span>
            {List.map((val, idx) => (
                <Box key={idx}>
                    <img src={circle} />
                    <span className="thick_med">
                        {val}
                    </span>
                </Box>
            ))}
            {/* <div className="add_todo">
                <input type="text" 
                placeholder="Add a todo" 
                onChange={(e) => setVal(e.target.value)}/>
                <button onClick={handleButton}>Add TO-DO</button>
            </div> */}
        </div>
    )
}

export default ToDo;