import { useEffect, useState } from "react";
import "./App.css";
import BubbleChart from "./BubbleChart";
import LineChart from "./LineChart";
import MyChart from "./MyChart";

function App() {
  const [chartData, setChartData] = useState({});
  useEffect(() => {
    fetch("http://localhost:8888/api/fetchData")
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
