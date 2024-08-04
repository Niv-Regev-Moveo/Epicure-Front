import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DishState, IDish } from "./dishes.types";
import { fetchDishes, fetchSignatureDishes } from "./dishes.thunks";

const initialState: DishState = {
  dishes: [],
  signatureDishes: [],
  loading: false,
  error: null,
};

export const DishSlice = createSlice({
  name: "dishes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDishes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchDishes.fulfilled,
        (state, action: PayloadAction<IDish[]>) => {
          state.loading = false;
          state.dishes = action.payload;
        }
      )
      .addCase(fetchDishes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchSignatureDishes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchSignatureDishes.fulfilled,
        (state, action: PayloadAction<IDish[]>) => {
          state.loading = false;
          state.signatureDishes = action.payload;
        }
      )
      .addCase(fetchSignatureDishes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const dishesReducer = DishSlice.reducer;
