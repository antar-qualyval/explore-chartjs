const mongoose = require("mongoose");

const DoughnutSchema = new mongoose.Schema({
  labels: [
    { type: String, required: [true, "Please Provide Your label Name!"] },
  ],
  data: [Number],
});

const Doughnut = mongoose.model("Doughnut-Data", DoughnutSchema);

const LineChartSchema = new mongoose.Schema({
  labels: [{ type: String, required: [true, "Please Provide Labels!!"] }],
  datasets: [
    {
      label: {
        type: String,
        required: [true, "Please Provide Label!!"]
      },
      data: [{ type: Number, required: [true, "Please Provide Data"] }],
    },
  ],
});

const LineChart = mongoose.model("LineChart", LineChartSchema);

module.exports = { Doughnut, LineChart };
