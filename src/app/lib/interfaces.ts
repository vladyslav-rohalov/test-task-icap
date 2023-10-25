export interface IPerson {
  id?: number;
  name: string;
  email: string;
  birthday_date: string;
  phone_number: string;
  address: string;
}

export interface IError {
  message: string;
  status: number;
  detail?: string;
}

export interface IPersonsState {
  count: number | null;
  next: string | null;
  previous: string | null;
  results: IPerson[];
  isError: IError | null;
  isLoading: boolean;
}

export interface ILoginState {
  isLogin: boolean;
  isError: IError | null;
  isLoading: boolean;
  message: string | null;
}

export interface RootState {
  auth: ILoginState;
  posts: IPersonsState;
}

export interface IUserData {
  username: string;
  password: string;
}

export interface IQueryParams {
  name?: string;
  email?: string;
  birthday_date?: string;
  phone_number?: string;
  address?: string;
  limit?: number;
  offset?: number;
}
