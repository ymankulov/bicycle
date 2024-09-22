import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: JSON.parse(localStorage.getItem("basketbicycle")) || [],
};

export const sliceBasket = createSlice({
  name: "BASKET",
  initialState,
  reducers: {
    addToBasket(state, action) {
      let getBas = [...state.basket, action.payload];
      localStorage.setItem("basketbicycle", JSON.stringify(getBas));
      state.basket = getBas;
    },
    deleteBasket(state, action) {
      let delBas = state.basket.filter((el) => el._id !== action.payload);
      localStorage.setItem("basketbicycle", JSON.stringify(delBas));
      state.basket = delBas;
    },
    incrementQuantity(state, action) {
      state.basket = state.basket.map((el) =>
        el._id === action.payload._id
          ? { ...el, quantity: el.quantity + 1 }
          : el
      );
    },
    decrementQuantity(state, action) {
      state.basket = state.basket.map((el) =>
        el._id === action.payload._id
          ? { ...el, quantity: el.quantity > 1 ? el.quantity - 1 : el.quantity }
          : el
      );
    },
    clearBasket(state, action) {
      localStorage.setItem("basketbicycle", JSON.stringify([]));
      state.basket = [];
    },
  },
});

export const {
  clearBasket,
  addToBasket,
  deleteBasket,
  incrementQuantity,
  decrementQuantity,
} = sliceBasket.actions;
export default sliceBasket.reducer;
