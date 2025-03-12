import { CartType } from "@/utils/data";
import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: <CartType[]>[],
  reducers: {
    addtoCart: (state, { payload }) => {
      const existingIndex = state.findIndex((item) => item.title === payload.title);
      if (existingIndex !== -1) {
        state[existingIndex].count += 1;
      } else {
        state.push(payload);
      }
    },
    reducetoCart: (state, { payload }) => {
      const existingIndex = state.findIndex((item) => item.title === payload.title);
      if (existingIndex !== -1) {
        state[existingIndex].count -= 1;
      }
    },
    clearCart: () => {
      return [];
    },
  },
});

const { reducer, actions } = cartSlice;
export const { addtoCart, reducetoCart, clearCart } = actions;
export default reducer;
