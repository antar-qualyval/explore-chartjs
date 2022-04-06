import React from "react";
import { Bubble } from "react-chartjs-2";
import { Chart, LinearScale, PointElement, Tooltip, Legend } from "chart.js";
Chart.register(LinearScale, PointElement, Tooltip, Legend);
const BubbleChart = () => {
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  const data = {
    datasets: [
      {
        label: "Red dataset",
        data: Array.from({ length: 50 }, () => ({
          x: Math.floor(Math.random() * (101 - -101) ) + -101,
          y: Math.floor(Math.random() * (101 - -101) ) + -101,
          r: Math.floor(Math.random() * (20 - 5) ) + 5,
        })),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Blue dataset",
        data: Array.from({ length: 50 }, () => ({
            x: Math.floor(Math.random() * (101 - -101) ) + -101,
            y: Math.floor(Math.random() * (101 - -101) ) + -101,
            r: Math.floor(Math.random() * (20 - 5) ) + 5,
        })),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <div>
      <Bubble options={options} data={data} />
    </div>
  );
};

export default BubbleChart;
