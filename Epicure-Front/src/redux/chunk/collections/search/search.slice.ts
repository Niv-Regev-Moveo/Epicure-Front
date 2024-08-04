import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISearchResults, SearchState } from "./search.types";
import { fetchSearchResults } from "./search.thunks";

const initialState: SearchState = {
  results: null,
  loading: false,
  error: null,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResults.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchSearchResults.fulfilled,
        (state, action: PayloadAction<ISearchResults>) => {
          state.loading = false;
          state.results = action.payload;
        }
      )
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const searchReducer = searchSlice.reducer;
