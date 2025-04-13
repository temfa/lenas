import { createSlice } from "@reduxjs/toolkit";
const modalOpenSlice = createSlice({
  name: "modalOpen",
  initialState: false,
  reducers: {
    setModalOpen: (state, { payload }) => {
      return payload;
    },
    clearModalOpen: () => {
      return false;
    },
  },
});

const { reducer, actions } = modalOpenSlice;
export const { setModalOpen, clearModalOpen } = actions;
export default reducer;
