import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart(state, action) {
      state.cartItems.push(action.payload);
    },
  },
});

export const { addTocart } = cartSlice.actions;
export default cartSlice.reducer;
