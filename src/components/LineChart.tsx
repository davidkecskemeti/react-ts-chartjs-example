import { ChartData } from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";

interface LineChartProperties {
  data: ChartData<"line">;
}

const LineChart: React.FC<LineChartProperties> = ({ data }) => {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Line Chart</h2>
      <Line
        data={data}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};
export default LineChart;
