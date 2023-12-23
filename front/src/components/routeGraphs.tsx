import { Bar, BarChart, Legend, ResponsiveContainer } from "recharts";
import {
  useGetActivityQuery,
  useGetPerformanceQuery,
  useGetSessionsQuery,
  useGetUserQuery,
} from "../api/api";
import { GraphActivity } from "./Graphs/GraphActivity";
import { GraphPerformance } from "./Graphs/GraphPerformance";
import { GraphSession } from "./Graphs/GraphSession";
import { GraphObjectif } from "./Graphs/GraphObjectif";
import CustomLegend from "./CustomLegend";

export const Graphs: React.FC = () => {
  const { currentData: activity } = useGetActivityQuery(12);
  const { currentData: session } = useGetSessionsQuery(12);
  const { currentData: performance } = useGetPerformanceQuery(12);
  const { currentData: objectif } = useGetUserQuery(12);

  return (
    <div className="w-full h-full">
      {activity && session && performance && objectif && (
        <div className="w-full h-full flex flex-col gap-5">
          <div className="h-1/2">
            <div>
              <h2 className="flex justify-center items-center">
                Activité quotidienne
              </h2>
              <CustomLegend data={[{name:"Poids (kg)", color:"#E60000"},{name:"Calories brûlées (kCal", color:"#282D30"}]}/>
            </div>
            <GraphActivity currentData={activity.data.sessions} />
          </div>
          <div className="flex flex-row gap-5 h-1/2">
            <GraphSession currentData={session.data.sessions} />
            <GraphPerformance currentData={performance.data.data} />
            <GraphObjectif currentData={objectif.data.todayScore} />
          </div>
        </div>
      )}
    </div>
  );
};
