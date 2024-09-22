import { configureStore } from "@reduxjs/toolkit";
import bicyclesSlice from "./reducers/CreateSlice";
import  FavoriteSlice  from "./reducers/AddToFavoriteSlice";
import  sliceBasket  from "./reducers/BasketSlice";

export const store = configureStore({
  reducer: {
    bicyclesCreate: bicyclesSlice,
    bicyclesFavorite: FavoriteSlice,
    basket: sliceBasket
  },
});
