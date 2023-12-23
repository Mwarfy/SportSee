import { Pie, PieChart, ResponsiveContainer } from "recharts";
import { IUser } from "../../types/general";

export const GraphObjectif: React.FC<{ currentData: number }> = ({
  currentData,
}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={Array.from([currentData])}
          dataKey="currentData"
          cx="50%"
          cy="50%"
          outerRadius={50}
          fill="red"
        />
      </PieChart>
    </ResponsiveContainer>
  );
};
