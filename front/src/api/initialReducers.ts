import { createSlice } from "@reduxjs/toolkit";

export interface IResumeState {}

export const initialResumeState: IResumeState = {};

export const resumeSlice = createSlice({
  name: "resume",
  initialState: initialResumeState,
  reducers: {},
  extraReducers: (builder) => {},
});
