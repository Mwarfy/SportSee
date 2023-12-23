import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  Legend,
  ResponsiveContainer,
  XAxis,
} from "recharts";
import { IActivityGraph } from "../../types/general";

export const GraphActivity: React.FC<{ currentData: IActivityGraph[] }> = ({
  currentData,
}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart barSize={9} data={currentData}>
        <CartesianGrid
          vertical={false}
          strokeDasharray="3 3"
          horizontalCoordinatesGenerator={(props) =>
            props.height > 250 ? [50, 125] : [75, 150]
          }
        />
        <Bar dataKey="kilogram" fill="#282D30" radius={[10, 10, 0, 0]} />
        <Bar dataKey="calories" fill="#E60000" radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};
