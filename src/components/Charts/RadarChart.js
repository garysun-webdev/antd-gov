import React from "react";
import ReactEcharts from "echarts-for-react";

const option = {
  legend: {
    data: ["Sydney", "Melbourne", "Brisbane", "Adelaide", "Perth"]
  },
  radar: {
    name: {
      textStyle: {
        color: "#fff",
        backgroundColor: "#999",
        borderRadius: 3,
        padding: [3, 5]
      }
    },
    indicator: [
      { name: "Food", max: 5000 },
      { name: "Culture", max: 5000 },
      { name: "Health", max: 5000 },
      { name: "Nature", max: 5000 },
      { name: "Weather", max: 5000 },
      { name: "Politics", max: 5000 }
    ]
  },
  series: [
    {
      type: "radar",
      data: [
        {
          value: [4500, 3300, 1900, 1700, 2000, 4200],
          name: "Sydney"
        },
        {
          value: [4100, 4800, 3200, 1200, 4300, 3800],
          name: "Melbourne"
        },
        {
          value: [3600, 2300, 3300, 4200, 1650, 3980],
          name: "Brisbane"
        },
        {
          value: [3380, 1200, 1500, 2100, 3800, 3650],
          name: "Perth"
        },
        {
          value: [3769, 3020, 3070, 3865, 1365, 3866],
          name: "Adelaide"
        }
      ]
    }
  ]
};

const RadarChart = () => (
  <ReactEcharts
    option={option}
    style={{ height: "450px", width: "100%" }}
    className={"react_for_echarts"}
  />
);

export default RadarChart;
