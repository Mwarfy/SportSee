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
import { useParams } from "react-router-dom";
import { skipToken } from "@reduxjs/toolkit/query";

export const Graphs: React.FC = () => {
  const { id } = useParams();
  const { currentData: activity } = useGetActivityQuery(
    id ? Number(id) : skipToken
  );
  const { currentData: session } = useGetSessionsQuery(
    id ? Number(id) : skipToken
  );
  const { currentData: performance } = useGetPerformanceQuery(
    id ? Number(id) : skipToken
  );
  const { currentData: objectif } = useGetUserQuery(
    id ? Number(id) : skipToken
  );

  return (
    <>
      {activity && session && performance && objectif && (
        <div className="flex flex-col h-full w-full">
          <div className="p-5 h-1/2">
            <div className="flex flex-row justify-between items-center mr-5">
              <span className="font-bold">Activité quotidienne</span>
              <CustomLegend
                data={[
                  { name: "Poids (kg)", color: "#E60000" },
                  { name: "Calories brûlées (kCal)", color: "#282D30" },
                ]}
              />
            </div>
            <GraphActivity currentData={activity.data.sessions} />
          </div>
          <div className="flex flex-row gap-5 h-1/2 pt-5">
            <GraphSession currentData={session.data.sessions} />
            <GraphPerformance currentData={performance.data.data} />
            <GraphObjectif currentData={objectif.data.todayScore} />
          </div>
        </div>
      )}
    </>
  );
};
