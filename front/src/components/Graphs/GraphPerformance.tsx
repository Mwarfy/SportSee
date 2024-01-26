import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { IPerformanceGraph } from "../../types/general";

export const GraphPerformance: React.FC<{
  currentData: IPerformanceGraph[];
}> = ({ currentData }) => {
  const legends = [
    "Intensité",
    "Vitesse",
    "Force",
    "Endurance",
    "Energie",
    "Cardio",
  ];
  const getY = (i: number, y: number) => {
    switch (i) {
      case 1:
        return y - 10;
        break;
      case 4:
        return y + 10;
        break;
      default:
        return y;
    }
  };
  const getX = (i: number, x: number) => {
    switch (i) {
      case 2:
        return x + 30;
        break;
      case 3:
        return x + 30;
        break;
      case 5:
        return x - 30;
        break;
      case 6:
        return x - 30;
        break;
      default:
        return x;
    }
  };
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart
        data={currentData}
        outerRadius={80}
        className="rounded-lg"
        style={{ backgroundColor: "#000000" }}>
        <PolarAngleAxis
          dataKey="kind"
          className="text-white"
          tick={({ x, y, payload }) => {
            return (
              <text
                x={getX(payload.value, x)}
                y={getY(payload.value, y)}
                fill="#FFFFFF"
                textAnchor="middle">
                {legends[payload.value - 1]}
              </text>
            );
          }}
        />
        <Tooltip />
        <PolarGrid stroke="#FFFFFF" radialLines={false} />
        <Radar
          name="Stat"
          dataKey="value"
          stroke="#E60000"
          fill="#E60000"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};
