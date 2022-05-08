import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCakes: 10,
};

const cakeReducer = createSlice({
  name: "counter",
  initialState,
  reducers: {
    decrement: (state) => {
      state.numOfCakes -= 1;
    },
  },
});
export const { decrement } = cakeReducer.actions;
export default cakeReducer.reducer;
