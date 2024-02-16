import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  IActivity,
  IActivityGraph,
  IPerformance,
  ISessions,
  IUser,
} from "../types/general";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "./data.js";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints: (builder) => ({
    getUser: builder.query<IUser, number>({
      query: (id) => ({ url: `/user/${id}` }),
    }),
    getUserFn: builder.query<IUser, number>({
      queryFn: (id) => {
        return {
          data: {
            data: {
              id: USER_MAIN_DATA.find((item) => item.id === id)?.id,
              keyData: USER_MAIN_DATA.find((item) => item.id === id)?.keyData,
              userInfos: USER_MAIN_DATA.find((item) => item.id === id)
                ?.userInfos,
              todayScore: USER_MAIN_DATA.find((item) => item.id === id)
                ?.todayScore,
              score: USER_MAIN_DATA.find((item) => item.id === id)?.score,
            },
          },
        };
      },
    }),
    getActivity: builder.query<IActivity, number>({
      query: (id) => ({ url: `/user/${id}/activity` }),
    }),
    getActivityFn: builder.query<IActivity, number>({
      queryFn: (id) => {
        return {
          data: {
            data: {
              sessions: USER_ACTIVITY.find((item) => item.userId === id)
                ?.sessions,
            },
          },
        };
      },
    }),
    getSessions: builder.query<ISessions, number>({
      query: (id) => ({ url: `/user/${id}/average-sessions` }),
    }),
    getSessionsFn: builder.query<ISessions, number>({
      queryFn: (id) => {
        return {
          data: {
            data: {
              sessions: USER_AVERAGE_SESSIONS.find((item) => item.userId === id)
                ?.sessions,
            },
          },
        };
      },
    }),
    getPerformance: builder.query<IPerformance, number>({
      query: (id) => ({ url: `/user/${id}/performance` }),
    }),
    getPerformanceFn: builder.query<IPerformance, number>({
      queryFn: (id) => {
        return {
          data: {
            data: {
              data: USER_PERFORMANCE.find((item) => item.userId === id)?.data,
              kind: USER_PERFORMANCE.find((item) => item.userId === id)?.kind,
            },
          },
        };
      },
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetUserFnQuery,
  useGetActivityQuery,
  useGetActivityFnQuery,
  useGetSessionsQuery,
  useGetSessionsFnQuery,
  useGetPerformanceQuery,
  useGetPerformanceFnQuery,
} = api;
