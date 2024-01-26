import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IActivity, IPerformance, ISessions, IUser } from "../types/general";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "./data.js"; // Assurez-vous que le chemin vers data.js est correct

const Mock = false;

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    getUser: builder.query<IUser, number>({
      query: (id) => {
        if (Mock) {
          const user = USER_MAIN_DATA.find((user) => user.id === id);
          return JSON.stringify(user || "");
        } else {
          return `/user/${id}`;
        }
      },
    }),
    getActivity: builder.query<IActivity, number>({
      query: (id) => {
        if (Mock) {
          const activity = USER_ACTIVITY.find(
            (activity) => activity.userId === id
          );
          return JSON.stringify(activity || "");
        } else {
          return `/user/${id}/activity`;
        }
      },
    }),
    getSessions: builder.query<ISessions, number>({
      query: (id) => {
        if (Mock) {
          const session = USER_AVERAGE_SESSIONS.find(
            (session) => session.userId === id
          );
          return JSON.stringify(session || "");
        } else {
          return `/user/${id}/average-sessions`;
        }
      },
    }),
    getPerformance: builder.query<IPerformance, number>({
      query: (id) => {
        if (Mock) {
          const performance = USER_PERFORMANCE.find(
            (performance) => performance.userId === id
          );
          return JSON.stringify(performance || "");
        } else {
          return `/user/${id}/performance`;
        }
      },
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetActivityQuery,
  useGetSessionsQuery,
  useGetPerformanceQuery,
} = api;
