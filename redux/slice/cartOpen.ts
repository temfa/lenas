import { createSlice } from "@reduxjs/toolkit";
const cartOpenSlice = createSlice({
  name: "cartOpen",
  initialState: false,
  reducers: {
    setCartOpen: (state, { payload }) => {
      return payload;
    },
    clearCartOpen: () => {
      return false;
    },
  },
});

const { reducer, actions } = cartOpenSlice;
export const { setCartOpen, clearCartOpen } = actions;
export default reducer;
