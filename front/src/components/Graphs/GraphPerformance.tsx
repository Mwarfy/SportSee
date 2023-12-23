import {
  Legend,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { IPerformanceGraph } from "../../types/general";

export const GraphPerformance: React.FC<{
  currentData: IPerformanceGraph[];
}> = ({ currentData }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        innerRadius="10%"
        outerRadius="80%"
        data={currentData}
        startAngle={180}
        endAngle={0}>
        <RadialBar
          label={{ fill: "#666", position: "insideStart" }}
          background
          dataKey="value"
        />
        <Legend layout="vertical" verticalAlign="middle" align="right" />
        <Tooltip />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};
