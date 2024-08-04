import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChefState, IChef } from "./chefs.types";
import { fetchChefs } from "./chefs.thunks";

const initialState: ChefState = {
  chefs: [],
  loading: false,
  error: null,
};

export const ChefSlice = createSlice({
  name: "chefs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChefs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchChefs.fulfilled,
        (state, action: PayloadAction<IChef[]>) => {
          (state.loading = false), (state.chefs = action.payload);
        }
      )
      .addCase(fetchChefs.rejected, (state, action) => {
        (state.loading = false), (state.error = action.payload as string);
      });
  },
});

export const chefsReducer = ChefSlice.reducer;
