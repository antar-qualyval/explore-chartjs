const connectDB = require("../utils/connectDB");
require("dotenv").config({ path: ".env.local" });
const { Doughnut, LineChart } = require("../utils/ChartModel");

exports.handler = async (event, context) => {
  await connectDB();
  await Doughnut.create({
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    data: [12, 19, 3, 5, 2, 3],
  });

  await LineChart.create({
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      { label: "Dataset 1", data: [100, -1500, 300, 4000, 5000, 700, 8000] },
      { label: "Dataset 2", data: [-100, 2000, -300, 1000, -5000, 7000, 800] },
    ],
  });
  return {
    statusCode: 200,
    body: "Bodda Ghum aiyer",
  };
};
