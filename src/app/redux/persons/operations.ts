import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IPerson, IQueryParams } from "@/app/lib/interfaces";

axios.defaults.baseURL = "https://technical-task-api.icapgroupgmbh.com/";

export const getPersons = createAsyncThunk(
  "table/getPersons",
  async (params: IQueryParams, thunkAPI) => {
    try {
      const response = await axios.get("/api/table/", {
        params: {
          limit: params.limit,
          offset: params.offset,
        },
      });
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const addPerson = createAsyncThunk(
  "table/addPerson",
  async ({ person }: { person: IPerson }, thunkAPI) => {
    try {
      const response = await axios.post("/api/table/", person);
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const editPerson = createAsyncThunk(
  "table/editPerson",
  async ({ person }: { person: IPerson }, thunkAPI) => {
    try {
      const response = await axios.patch(`/api/table/${person.id}/`, person);
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const deletePerson = createAsyncThunk(
  "table/deletePerson",
  async ({ person }: { person: IPerson }, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/table/${person.id}/`);
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
