import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const LineChart = ({ chartData }) => {
  console.log(chartData, "fdf");
  // const labels = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  // ];
  const data = {
    labels: chartData  && chartData[0].labels,
    datasets: [
      {
        label: chartData  && chartData[0].datasets[0].label,
        data: chartData  && chartData[0].datasets[0].data,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: chartData  && chartData[0].datasets[1].label,
        data: chartData  && chartData[0].datasets[1].data,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };
  return (
    <div>
      <h1>Line Chart</h1>
      {chartData && <Line options={options} data={data} />}
    </div>
  );
};

export default LineChart;
