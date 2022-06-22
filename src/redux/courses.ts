import { createSlice } from "@reduxjs/toolkit";

interface Courses {
  id: number;
  title: string;
  description: string;
}

export const courseSlice = createSlice({
  name: "course",
  initialState: [] as Courses[],
  reducers: {
    addCourse: (state, action: any) => {
      state.push(action.payload);
    },
    deleteCourse: (state, action: any) => {
      const id = action.payload;
      const index = state.findIndex((course) => course.id === id);
      state.splice(index, 1);
    },
  },
});

export default courseSlice.reducer;
export const { addCourse, deleteCourse } = courseSlice.actions;
