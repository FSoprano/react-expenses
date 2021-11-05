import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = props => {
    // We need numbers to calculate the height maximum; However,
    // we have the numbers as object property values only (value prop
    // in chartDataPoints array. We therefore need to extract 
    // just the numbers:
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    // Then we can calulate the maximum:
    const totalMaximum = Math.max(...dataPointValues);
    // dataPointValues is an array, but Math.max wants a list of numbers;
    // We therefore use the spread operator to pull out all array elements 
    // as individual numbers.
    return (<div className="chart">
        {props.dataPoints.map((dataPoint) => {
            return (<ChartBar 
                      key={dataPoint.label}
                      value={dataPoint.value} 
                      maxValue={totalMaximum} 
                      label={dataPoint.label} 
            />);
        })}
    </div>);
}

export default Chart;