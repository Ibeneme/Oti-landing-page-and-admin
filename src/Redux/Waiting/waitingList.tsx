import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

interface waitingListState {
  loading: boolean;
  error: {} | null;
  success: [];
}

const initialState: waitingListState = {
  loading: false,
  error: null,
  success: [],
};

const baseApiUrl = "https://server-3qpe.onrender.com";

export const subscriberToWaitingList = createAsyncThunk(
  "waitingList/subscriberToWaitingList",
  async (payload: any) => {
    console.log(payload?.fullName, "pppp");

    const fullName = payload?.fullName;
    try {
      const response = await axios.post(
        `${baseApiUrl}/api/v1/waiting-list/${payload?.email}`,
        { fullName: fullName }
      );
      console.log(response, "waiting-list Verification Response");
      return response?.data;
    } catch (error) {
      console.error(error, "waiting-list Verification Error");
      return (error as AxiosError).response?.data;
    }
  }
);

const waitingListSlice = createSlice({
  name: "waitingList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(subscriberToWaitingList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(subscriberToWaitingList.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(subscriberToWaitingList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ? (action.payload as string) : null;
      });
  },
});

export default waitingListSlice.reducer;
