import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./courses";
import { setupListeners } from "@reduxjs/toolkit/query";
import { coursesApi } from "./coursesApi";

export const store = configureStore({
  reducer: {
    course: courseReducer,
    [coursesApi.reducerPath]: coursesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coursesApi.middleware),
});

setupListeners(store.dispatch);

type RootState = ReturnType<typeof store.getState>;
export const selectCourses = (state: RootState) => state.course;

export type AppDispatch = typeof store.dispatch;

export default store;
