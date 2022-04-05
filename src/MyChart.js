import React from "react";
import { Doughnut, Line } from "react-chartjs-2";
import { ArcElement, Tooltip, Legend, Chart, Title } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend, Title);

const MyChart = () => {
  const xValues = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
    responsive: false,
  };
  const data2 = {
    data: {
      labels: xValues,
      datasets: [
        {
          data: [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478],
          borderColor: "red",
          fill: false,
        },
        {
          data: [1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 7000],
          borderColor: "green",
          fill: false,
        },
        {
          data: [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100],
          borderColor: "blue",
          fill: false,
        },
      ],
    },
  };
  return (
    <div>
      <h1>My Chart</h1>
      <Doughnut data={data} width={"300 px"} height={"300 px"} />
    </div>
  );
};

export default MyChart;
