import React from "react";
import ReactEcharts from "echarts-for-react";

const colors = ["#5793f3", "#d14a61", "#675bba"];

const option = {
  color: colors,

  title: {
    text: "Happiness Index of Australian Cities",
    left: "center",
    top: 20,
    textStyle: {
      color: "#777"
    }
  },

  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross"
    }
  },
  grid: {
    right: "20%"
  },
  legend: {
    data: ["Population", "HPI"]
  },
  xAxis: [
    {
      type: "category",
      axisTick: {
        alignWithLabel: true
      },
      data: ["Sydnes", "Melbourne", "Brisbane", "Perth", "Adelaide"]
    }
  ],
  yAxis: [
    {
      type: "value",
      name: "HPI",
      min: 0,
      max: 0.2,
      position: "right",
      axisLine: {
        lineStyle: {
          color: colors[1]
        }
      },
      axisLabel: {
        formatter: "{value}"
      }
    },

    {
      type: "value",
      name: "Population",
      min: 0,
      max: 600,
      position: "left",
      axisLine: {
        lineStyle: {
          color: colors[0]
        }
      },
      axisLabel: {
        formatter: "{value}k"
      }
    }
  ],
  series: [
    {
      name: "Population",
      type: "bar",
      yAxisIndex: 1,
      data: [503, 473, 236, 202, 132]
    },
    {
      name: "HPI",
      type: "bar",
      yAxisIndex: 0,
      data: [0.05, 0.07, 0.14, 0.06, 0.13]
    }
  ]
};

const BarChart = () => (
  <ReactEcharts
    option={option}
    style={{ height: "400px", width: "100%" }}
    className={"react_for_echarts"}
  />
);

export default BarChart;
