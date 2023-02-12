import React from "react";
import { Chart } from "react-google-charts";

export function Chart1({ title, value, color }) {
  return (
    <Chart
      chartType="PieChart"
      width="80%"
      height="200px"
      data={[
        ["", ""],
        ["", 6515],
        ["", 5000], // CSS-style declaration
      ]}
      options={{
        legend: "none",
        pieHole: 0.8,
        is3D: false,
        slices: {
          0: { color: "#00AB55" },
          1: { color: "#EDEFF1" },
        },
        plugins: {
          labels: {
            render: () => {},
          },
        },
      }}
    />
  );
}
export function Chart2({ title, value, color }) {
  return (
    <Chart
      chartType="PieChart"
      width="80%"
      height="200px"
      data={[
        ["", ""],
        ["", 22803],
        ["", 150000], // CSS-style declaration
      ]}
      options={{
        legend: "none",
        pieHole: 0.8,
        is3D: false,
        slices: {
          0: { color: "#00B8D9" },
          1: { color: "#EDEFF1" },
        },
        plugins: {
          labels: {
            render: () => {},
          },
        },
      }}
    />
  );
}
export function Chart3({ title, value, color }) {
  return (
    <Chart
      chartType="PieChart"
      width="80%"
      height="200px"
      data={[
        ["", ""],
        ["", 16288],
        ["", 16288], // CSS-style declaration
      ]}
      options={{
        legend: "none",
        pieHole: 0.8,
        is3D: false,
        slices: {
          0: { color: "#FFAB00" },
          1: { color: "#EDEFF1" },
        },
        plugins: {
          labels: {
            render: () => {},
          },
        },
      }}
    />
  );
}
export function Chart4({ title, value, color }) {
  return (
    <Chart
      chartType="PieChart"
      width="80%"
      height="200px"
      data={[
        ["", ""],
        ["", 19545],
        ["", 15000], // CSS-style declaration
      ]}
      options={{
        legend: "none",
        pieHole: 0.8,
        is3D: false,
        slices: {
          0: { color: "#B71D18" },
          1: { color: "#EDEFF1" },
        },
        plugins: {
          labels: {
            render: () => {},
          },
        },
      }}
    />
  );
}
