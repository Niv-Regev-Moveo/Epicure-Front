import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HttpClientService } from "../../../../services/httpClientService";
import { ISearchResults } from "./search.types";

export const fetchSearchResults = createAsyncThunk<
  ISearchResults,
  string,
  { rejectValue: string }
>("search/fetchSearchResults", async (keyword, { rejectWithValue }) => {
  try {
    const response = await HttpClientService.get<ISearchResults>(
      `/search/${keyword}`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data ?? error.message);
    } else {
      return rejectWithValue("An unexpected error occurred");
    }
  }
});
