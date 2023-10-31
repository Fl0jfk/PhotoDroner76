import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ProjectState = {
    project?: any
    id: number;
}

const initialState: ProjectState = {
  id: 1
};

const projectSlice = createSlice({
  name: "project",
  initialState: initialState,
  reducers: {
    clickProject: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
  },
});

export const { clickProject } = projectSlice.actions;

export default projectSlice.reducer;
