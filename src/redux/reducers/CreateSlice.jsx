import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bicycles: [],
};

export const bicyclesSlice = createSlice({
  name: "Bicycles",
  initialState,
  reducers: {
    getBicycles(state, action) {
      state.bicycles = action.payload;
    },
    createBicycles(state, action) {
      state.bicycles = [...state.bicycles, action.payload];
    },
  },
});

export const { createBicycles, getBicycles } = bicyclesSlice.actions;
export default bicyclesSlice.reducer;
