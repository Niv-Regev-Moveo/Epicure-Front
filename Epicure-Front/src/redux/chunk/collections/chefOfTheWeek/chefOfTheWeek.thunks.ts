import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IChefOfTheWeek } from "./chefOfTheWeek.types";
import { HttpClientService } from "../../../../services/httpClientService";

export const fetchChefOfTheWeek = createAsyncThunk<
  IChefOfTheWeek,
  void,
  { rejectValue: string }
>("chefOfTheWeek/fetchChefOfTheWeek", async (_, { rejectWithValue }) => {
  try {
    const response = await HttpClientService.get<IChefOfTheWeek>(
      "/chefOfTheWeek"
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
