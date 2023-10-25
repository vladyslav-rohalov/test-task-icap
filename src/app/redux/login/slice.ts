import { createSlice } from "@reduxjs/toolkit";
import { logIn } from "./operations";
import { ILoginState } from "@/app/lib/interfaces";

interface IAction<T> {
  type: string;
  payload?: T;
}

const initialState: ILoginState = {
  isLogin: false,
  isError: null,
  isLoading: false,
  message: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder

      .addCase(logIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logIn.rejected, (state, action: IAction<any>) => {
        state.isError = action.payload;
        state.isLoading = false;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.message = action.payload;
        state.isLogin = true;
        state.isError = null;
        state.isLoading = false;
      });
  },
});

export default loginSlice.reducer;
