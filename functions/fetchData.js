const { LineChart, Doughnut } = require("../utils/ChartModel");
const connectDB = require("../utils/connectDB");

exports.handler = async () => {
  const check = connectDB();
  const lineChartData = await LineChart.find({});
  const doughnutChartData = await Doughnut.find({});
  if (check) {
    console.log("Checking");
  }
  return {
    statusCode: 200,
    body: JSON.stringify({lineChartData, doughnutChartData, success: true}),
  };
};
