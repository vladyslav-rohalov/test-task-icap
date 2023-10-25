import { RootState } from "../store";

export const selectMessage = (state: RootState) => state.login.message;
export const selectIsLogin = (state: RootState) => state.login.isLogin;
export const selectIsError = (state: RootState) => state.login.isError;
export const selectIsLoading = (state: RootState) => state.login.isLoading;
