import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUserData } from "@/app/lib/interfaces";

axios.defaults.baseURL = "https://technical-task-api.icapgroupgmbh.com/";

export const logIn = createAsyncThunk(
  "user/login",
  async (userData: IUserData, thunkAPI) => {
    try {
      const response = await axios.post("api/login/", userData);
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue({
        message: e.response.data.error,
        status: e.response.status,
      });
    }
  }
);
