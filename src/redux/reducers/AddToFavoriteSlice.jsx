import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorite: JSON.parse(localStorage.getItem("favorite")) || [],
};

export const FavoriteSlice = createSlice({
  name: "FAVORITE",
  initialState,
  reducers: {
    addFavorite(state, action) {
      let fav = (state.favorite = [...state.favorite, action.payload]);
      localStorage.setItem("favorite", JSON.stringify(fav));
    },
    deleteFavorite(state, action) {
      let delFav = (state.favorite = state.favorite.filter(
        (el) => el._id !== action.payload
      ));
      localStorage.setItem("favorite", JSON.stringify(delFav));
    },
  },
});
export const { addFavorite, deleteFavorite } = FavoriteSlice.actions;
export default FavoriteSlice.reducer;
