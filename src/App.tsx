import { useState } from "react";
import "./App.css";
import PieChart from "./components/PieChart";
import { data } from "./data/data";
import { Chart, registerables } from "chart.js";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";

function App() {
  Chart.register(...registerables);

  const [chartData] = useState({
    labels: data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="App">
      <div className="App">
        <p>Using Chart.js in React</p>
        <div className="container">
          <PieChart data={chartData} />
          <BarChart data={chartData} />
          <LineChart data={chartData} />
        </div>
      </div>
    </div>
  );
}

export default App;
