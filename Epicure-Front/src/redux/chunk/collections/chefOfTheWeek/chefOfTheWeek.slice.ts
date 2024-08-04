import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChefOfTheWeekState, IChefOfTheWeek } from "./chefOfTheWeek.types";
import { fetchChefOfTheWeek } from "./chefOfTheWeek.thunks";

const initialState: ChefOfTheWeekState = {
  chefOfTheWeek: null,
  loading: false,
  error: null,
};

export const chefOfTheWeekSlice = createSlice({
  name: "chefOfTheWeek",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChefOfTheWeek.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchChefOfTheWeek.fulfilled,
        (state, action: PayloadAction<IChefOfTheWeek>) => {
          state.loading = false;
          state.chefOfTheWeek = action.payload;
        }
      )
      .addCase(fetchChefOfTheWeek.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const chefOfTheWeekReducer = chefOfTheWeekSlice.reducer;
