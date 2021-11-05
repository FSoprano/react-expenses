import React from "react";
import "./ChartBar.css";


const ChartBar = props => {
    let barFillHeight = '0%';
    // barFillHeight needs to be calculated based on the props.value 
    // we receive. It is a string because it will be supplied as a 
    // CSS property.
    if (props.maxValue > 0) {
        barFillHeight = Math.round((props.value /props.maxValue) * 100) + '%';
        // + '%' concatenation will also convert the number to a string.
    }
    return (<div className="chart-bar">
        <div className="chart-bar__inner">
            <div className="chart-bar__fill" style={{height: barFillHeight}} >
                {/* This is not Handlebars! The style 
                attribute takes in an object, that's all */}
            </div>
        </div>
        <div className="chart-bar__label">{props.label}</div>
    </div>);

};

export default ChartBar;