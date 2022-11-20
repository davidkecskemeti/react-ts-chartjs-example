import { ChartData } from "chart.js";
import { Bar } from "react-chartjs-2";

interface PieChartProps {
  data: ChartData<"bar">;
}
const BarChart: React.FC<PieChartProps> = ({ data }) => {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
      <Bar
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

export default BarChart;
