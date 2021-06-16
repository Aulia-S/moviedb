import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import alertReducer from "./alert/alertSlice";
import moviesReducer from "./movies/moviesSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    alert: alertReducer,
    movies: moviesReducer,
  },
});
