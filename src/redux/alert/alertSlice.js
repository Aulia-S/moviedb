import { createSlice } from "@reduxjs/toolkit";

export const alertSlice = createSlice({
  name: "alert",
  initialState: {
    value: false,
  },
  reducers: {
    showAlert: (state) => {
      state.value = true;
    },
    hideAlert: (state) => {
      state.value = false;
    },
  },
});

export const { showAlert, hideAlert } = alertSlice.actions;

export default alertSlice.reducer;
