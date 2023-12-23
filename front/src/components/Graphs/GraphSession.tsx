import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ISessionGraph } from "../../types/general";

export const GraphSession: React.FC<{ currentData: ISessionGraph[] }> = ({
  currentData,
}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={currentData}>
        <XAxis dataKey="day" />
        <YAxis dataKey="day" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="day" stroke="black" />
      </LineChart>
    </ResponsiveContainer>
  );
};
