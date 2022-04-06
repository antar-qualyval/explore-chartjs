import { useEffect, useState } from "react";
import "./App.css";
import BubbleChart from "./BubbleChart";
import LineChart from "./LineChart";
import MyChart from "./MyChart";
const SERVER_URI = process.env.SERVER_URI
function App() {
  const [chartData, setChartData] = useState({});
  useEffect(() => {
    fetch(`${SERVER_URI}/api/fetchData`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.lineChartData[0]);
        setChartData(data);
      })
      .catch((e) => console.error(e));
  }, []);
  return (
    <div className="App">
      <h1>Hello World!</h1>
      {chartData && (
        <div className="chartContainer">
          <div>
            <MyChart chartData={chartData.doughnutChartData} />
          </div>
          <div>
            <LineChart chartData={chartData.lineChartData} />
          </div>
          <div>
            <BubbleChart />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
