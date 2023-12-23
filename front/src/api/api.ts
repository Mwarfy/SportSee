import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IActivity, IPerformance, ISessions, IUser } from "../types/general";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    getUser: builder.query<IUser, number>({
      query: (id) => `/user/${id}`,
    }),
    getActivity: builder.query<IActivity, number>({
      query: (id) => `/user/${id}/activity`,
    }),
    getSessions: builder.query<ISessions, number>({
      query: (id) => `/user/${id}/average-sessions`,
    }),
    getPerformance: builder.query<IPerformance, number>({
      query: (id) => `/user/${id}/performance`,
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetActivityQuery,
  useGetSessionsQuery,
  useGetPerformanceQuery,
} = api;
