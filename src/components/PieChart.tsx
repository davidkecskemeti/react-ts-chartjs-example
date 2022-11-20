import { ChartData } from "chart.js";
import { Pie } from "react-chartjs-2";

interface PieChartProps {
  data: ChartData<"pie">;
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
      <Pie
        data={data}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020",
            },
          },
        }}
      />
    </div>
  );
};

export default PieChart;
