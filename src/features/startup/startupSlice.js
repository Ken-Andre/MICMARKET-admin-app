import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import startupService from "./startupService";

export const getStartups = createAsyncThunk(
  "startup/get-startups",
  async (thunkAPI) => {
    try {
      return await startupService.getStartups();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createStartups = createAsyncThunk(
  "startup/create-startups",
  async (startupData,thunkAPI) => {
    try {
      return await startupService.createStartup(startupData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetState = createAction("Reset_all");

const initialState = {
  startups: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const startupSlice = createSlice({
  name: "startups",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStartups.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getStartups.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.startups = action.payload;
      })
      .addCase(getStartups.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export default startupSlice.reducer;
