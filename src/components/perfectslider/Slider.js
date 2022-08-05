import React, { useState, useEffect } from "react";
import "./Slider.css";

const Slider = ({ zIndex, leave, children }) => {

    const [slider, setSlider] = useState(null);

    useEffect(() => {
        if(slider == null) {
            setTimeout(() => {
                setSlider(true);
            }, 200);
        }

        // return () => setSlider(false);
    });

    useEffect(() => {
        if(leave) setSlider(false);
    }, [leave]);

    let styles = {
        zIndex: `${zIndex*10}`,
        transform: `translateX(${slider ? "-500px" : "500px"})`
    }

    return (
        <div className="slider" style={styles}>
            {children}
        </div>
    )
}

export default Slider;