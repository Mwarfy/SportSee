import {
  useGetActivityFnQuery,
  useGetActivityQuery,
  useGetPerformanceFnQuery,
  useGetPerformanceQuery,
  useGetSessionsFnQuery,
  useGetSessionsQuery,
  useGetUserFnQuery,
  useGetUserQuery,
} from "../api/api";
import { GraphActivity } from "./Graphs/GraphActivity";
import { GraphPerformance } from "./Graphs/GraphPerformance";
import { GraphSession } from "./Graphs/GraphSession";
import { GraphObjectif } from "./Graphs/GraphObjectif";
import CustomLegend from "./CustomLegend";
import { useParams } from "react-router-dom";
import { skipToken } from "@reduxjs/toolkit/query";

const Mock = true;

export const Graphs: React.FC = () => {
  const { id } = useParams();
  const { currentData: activity } = useGetActivityQuery(
    Mock ? skipToken : id ? Number(id) : skipToken
  );
  const { currentData: activityFn } = useGetActivityFnQuery(
    Mock ? (id ? Number(id) : skipToken) : skipToken
  );
  const { currentData: session } = useGetSessionsQuery(
    Mock ? skipToken : id ? Number(id) : skipToken
  );
  const { currentData: sessionFn } = useGetSessionsFnQuery(
    Mock ? (id ? Number(id) : skipToken) : skipToken
  );
  const { currentData: performance } = useGetPerformanceQuery(
    Mock ? skipToken : id ? Number(id) : skipToken
  );
  const { currentData: performanceFn } = useGetPerformanceFnQuery(
    Mock ? (id ? Number(id) : skipToken) : skipToken
  );
  const { currentData: objectif } = useGetUserQuery(
    Mock ? skipToken : id ? Number(id) : skipToken
  );
  const { currentData: objectifFn } = useGetUserFnQuery(
    Mock ? (id ? Number(id) : skipToken) : skipToken
  );
  console.log(session);
  return (
    <>
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
          {activity?.data.sessions && (
            <GraphActivity currentData={activity?.data.sessions} />
          )}
          {activityFn?.data.sessions && (
            <GraphActivity currentData={activityFn?.data.sessions} />
          )}
        </div>
        {session?.data.sessions && performance?.data.data && (
          <div className="flex flex-row gap-5 h-1/2 pt-5">
            <GraphSession currentData={session.data.sessions} />
            <GraphPerformance currentData={performance.data.data} />
            <GraphObjectif
              currentData={objectif?.data.todayScore ?? objectif?.data.score}
            />
          </div>
        )}
        {sessionFn?.data.sessions && performanceFn?.data.data && (
          <div className="flex flex-row gap-5 h-1/2 pt-5">
            <GraphSession currentData={sessionFn.data.sessions} />
            <GraphPerformance currentData={performanceFn.data.data} />
            <GraphObjectif
              currentData={
                objectifFn?.data.todayScore ?? objectifFn?.data.score
              }
            />
          </div>
        )}
      </div>
    </>
  );
};
