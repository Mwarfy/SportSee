import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { ISessionGraph } from "../../types/general";

export const GraphSession: React.FC<{ currentData: ISessionGraph[] }> = ({
  currentData,
}) => {
  const days = ["", "L", "M", "M", "J", "V", "S", "D", ""];

  const dataWithMargins = [
    { day: 0, sessionLength: currentData[0].sessionLength },
    ...currentData,
    {
      day: currentData.length + 1,
      sessionLength: currentData[currentData.length - 1].sessionLength,
    },
  ];

  const CustomizeCursor: React.FC<{
    points?: { x: number; y: number }[];
    width?: number;
    height?: number;
  }> = ({ points, width, height }) => {
    return (
      <rect
        fill="#000000"
        fillOpacity="0.2"
        x={points && points[0].x}
        y={points && points[0].y - 60}
        width={width}
        height={height && height * 3}
      />
    );
  };
  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
      className="rounded-lg"
      style={{ backgroundColor: "#E60000" }}>
      <LineChart data={dataWithMargins}>
        <CartesianGrid vertical={false} horizontal={false} />
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          tickFormatter={(value) => days[value]}
          tick={{ fill: "white", opacity: "0.5", dy: 2 }}
        />
        <Tooltip
          labelFormatter={() => " "}
          contentStyle={{
            padding: "0px",
            border: "none",
            margin: "0px",
            position: "relative",
          }}
          content={({ payload }) => {
            if (payload && payload.length > 0) {
              return (
                <span className="text-black font-semibold bg-white p-2">
                  {" "}
                  {payload[0].value} min
                </span>
              );
            }
          }}
          cursor={<CustomizeCursor />}
        />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="white"
          dot={false}
        />
        <Legend
          wrapperStyle={{ marginLeft: "30px", marginTop: "20px" }}
          verticalAlign="top"
          width={150}
          content={() => (
            <span className="text-white opacity-50">
              Durée moyenne des sessions
            </span>
          )}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
