import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchMovies } from "../../api/movies";

export const getMovies = createAsyncThunk(
  "movies/getMovies",
  async (keyword) => {
    const movies = await fetchMovies(keyword);
    return movies;
  }
);

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getMovies.pending]: (state, action) => {
      state.status = "loading";
    },
    [getMovies.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.data = action.payload;
    },
    [getMovies.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default moviesSlice.reducer;
