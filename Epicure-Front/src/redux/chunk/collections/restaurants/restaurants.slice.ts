import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchRestaurants } from "./restaurants.thunks";
import { IRestaurant, RestaurantState } from "./restaurants.types";

const initialState: RestaurantState = {
  restaurants: [],
  loading: false,
  error: null,
};

export const RestaurantSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurants.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchRestaurants.fulfilled,
        (state, action: PayloadAction<IRestaurant[]>) => {
          (state.loading = false), (state.restaurants = action.payload);
        }
      )
      .addCase(fetchRestaurants.rejected, (state, action) => {
        (state.loading = false), (state.error = action.payload as string);
      });
  },
});

export const restaurantsReducer = RestaurantSlice.reducer;
