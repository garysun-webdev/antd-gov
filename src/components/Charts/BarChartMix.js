import React from "react";
import ReactEcharts from "echarts-for-react";

const option = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow"
    }
  },
  legend: {
    data: ["NP", "Negative", "Positive"]
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true
  },
  xAxis: [
    {
      type: "value"
    }
  ],
  yAxis: [
    {
      type: "category",
      axisTick: { show: false },
      data: ["Adelaide", "Brisbane", "Melbourne"]
    }
  ],
  series: [
    {
      name: "NP",
      type: "bar",
      label: {
        normal: {
          show: true,
          position: "inside"
        }
      },
      data: [1026, 753, 579]
    },
    {
      name: "Positive",
      type: "bar",
      stack: "总量",
      label: {
        normal: {
          show: true
        }
      },
      data: [1265, 1722, 2251]
    },
    {
      name: "Negative",
      type: "bar",
      stack: "总量",
      label: {
        normal: {
          show: true,
          position: "left"
        }
      },
      data: [-239, -965, -1672]
    }
  ]
};

const BarChartMix = () => (
  <ReactEcharts
    option={option}
    style={{ height: "400px", width: "100%" }}
    className={"react_for_echarts"}
  />
);

export default BarChartMix;
