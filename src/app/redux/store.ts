import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./login/slice";
import personsSlice from "./persons/slice";
import { ILoginState, IPersonsState } from "../lib/interfaces";

export const store = configureStore({
  reducer: {
    login: loginSlice,
    persons: personsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;

export interface RootState {
  login: ILoginState;
  persons: IPersonsState;
}
