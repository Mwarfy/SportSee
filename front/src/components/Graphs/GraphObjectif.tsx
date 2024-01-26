import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

export const GraphObjectif: React.FC<{ currentData: number }> = ({
  currentData,
}) => {
  const data = [{ value: currentData }];
  const COLORS = "#E60000";
  console.log(currentData);
  return (
    <div className="relative w-full h-full">
      <div className="absolute top-0 left-0 ml-4 mt-4 text-lg font-semibold">
        Score
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={75}
            outerRadius={90}
            startAngle={90}
            endAngle={270}
            cornerRadius={10}
            dataKey="value">
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute w-20 h-20  right-0 top-0 left-0 bottom-0 m-auto flex flex-col items-center">
        <span className="font-bold text-lg">
          {(currentData * 100).toFixed(0)} %
        </span>
        <span className="text-center">de votre objectif</span>
      </div>
    </div>
  );
};
