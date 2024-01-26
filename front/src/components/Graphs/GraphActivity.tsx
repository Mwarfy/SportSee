import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
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
            props.height > 250 ? [75, 150] : [75, 150]
          }
        />
        <Tooltip
          contentStyle={{ backgroundColor: "#E60000" }}
          content={({ payload }) => {
            if (payload && payload.length > 0) {
              return (
                <div
                  style={{ backgroundColor: "#E60000" }}
                  className="text-white font-semibold p-5 flex flex-col gap-5 items-center">
                  <span>{payload[0].value}kg</span>
                  <span>{payload[1].value}Kcal</span>
                </div>
              );
            }
          }}
        />
        <Bar dataKey="kilogram" fill="#282D30" radius={[10, 10, 0, 0]} />
        <Bar dataKey="calories" fill="#E60000" radius={[10, 10, 0, 0]} />
        <XAxis axisLine={false} tickLine={false} />
      </BarChart>
    </ResponsiveContainer>
  );
};
