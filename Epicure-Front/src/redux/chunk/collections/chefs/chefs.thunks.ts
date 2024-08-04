import { createAsyncThunk } from "@reduxjs/toolkit";
import { HttpClientService } from "../../../../services/httpClientService";
import axios from "axios";
import { IChef } from "./chefs.types";

export const fetchChefs = createAsyncThunk<
  IChef[],
  void,
  { rejectValue: string }
>("chefs/fetchChefs", async (_, { rejectWithValue }) => {
  try {
    const response = await HttpClientService.get<IChef[]>("/chefs");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(
        "Error fetching chefs:",
        error.response?.data ?? error.message
      );
      return rejectWithValue(error.response?.data ?? error.message);
    } else {
      return rejectWithValue("An unexpected error occurred");
    }
  }
});
