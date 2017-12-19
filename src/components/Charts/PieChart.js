import React from "react";
import ReactEcharts from "echarts-for-react";

const option = {
  angleAxis: {
    type: "category",
    data: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Others"],
    z: 10
  },
  radiusAxis: {},
  polar: {},
  series: [
    {
      type: "bar",
      data: [0.01, 0.013, 0.017, 0.005, 0.034, 0.012],
      coordinateSystem: "polar",
      name: "Immigration",
      stack: "a"
    },
    {
      type: "bar",
      data: [0.01, 0.014, 0.017, 0.012, 0.037, 0.013],
      coordinateSystem: "polar",
      name: "Health",
      stack: "a"
    },
    {
      type: "bar",
      data: [0.032, 0.029, 0.028, 0.01, 0.025, 0.01],
      coordinateSystem: "polar",
      name: "Education",
      stack: "a"
    }
  ],
  legend: {
    show: true,
    data: ["Immigration", "Health", "Education"]
  }
};

const PieChart = () => (
  <ReactEcharts
    option={option}
    style={{ height: "400px", width: "100%" }}
    className={"react_for_echarts"}
  />
);

export default PieChart;
