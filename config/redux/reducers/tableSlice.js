import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataX: [1, 2, 3, 4, 5, 6, 7, 8, 9],
};

export const tableSlice = createSlice({
  name: "Table",
  initialState,
  reducers: {
    resetData: (state) => {
      state.dataX = [];
    },
    changeData: (state, action) => {
      state.dataX = action.payload;
    },
  },
});

export const { changeData, resetData } = tableSlice.actions;
export default tableSlice.reducer;
