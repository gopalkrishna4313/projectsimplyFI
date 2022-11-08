import React from "react";

import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  return(
  <div className="Chart">
  {props.dataPoints.map((dataPoints) => (
    <ChartBar
      key={dataPoints.label}
      value={dataPoints.value}
      maxValue={null}
      label={dataPoints.label}
    ></ChartBar>
  ))}
</div>
)
  
};

export default Chart;
