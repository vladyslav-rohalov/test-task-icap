import { createSlice } from "@reduxjs/toolkit";
import { IPersonsState, IPerson } from "@/app/lib/interfaces";
import { getPersons, addPerson, editPerson, deletePerson } from "./operations";

interface IAction<T> {
  type: string;
  payload?: T;
}

const initialState: IPersonsState = {
  count: null,
  next: null,
  previous: null,
  results: [],
  isError: null,
  isLoading: false,
};

const failureReducer = (state: IPersonsState, action: IAction<any>) => {
  state.isLoading = false;
  state.isError = action.payload;
};

const pendingReducer = (state: IPersonsState) => {
  state.isLoading = true;
};

const personsSlice = createSlice({
  name: "persons",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getPersons.pending, pendingReducer)
      .addCase(getPersons.rejected, failureReducer)
      .addCase(getPersons.fulfilled, (state, action) => {
        (state.count = action.payload.count),
          (state.next = action.payload.next),
          (state.previous = action.payload.previous),
          (state.results = action.payload.results);
        state.isLoading = false;
        state.isError = null;
      })

      .addCase(addPerson.pending, pendingReducer)
      .addCase(addPerson.rejected, failureReducer)
      .addCase(addPerson.fulfilled, (state, action) => {
        const newPerson = action.payload as IPerson;
        state.results.push(newPerson);
        state.isLoading = false;
        state.isError = null;
      })

      .addCase(editPerson.pending, pendingReducer)
      .addCase(editPerson.rejected, failureReducer)
      .addCase(editPerson.fulfilled, (state, action) => {
        const index = state.results.findIndex(
          (person) => person.id === action.payload.id
        );
        state.results[index] = action.payload;
        state.isLoading = false;
        state.isError = null;
      })

      .addCase(deletePerson.pending, pendingReducer)
      .addCase(deletePerson.rejected, failureReducer)
      .addCase(deletePerson.fulfilled, (state, action) => {
        const index = state.results.findIndex(
          (person) => person.id === action.payload
        );
        state.results.splice(index, 1);
        state.isLoading = false;
        state.isError = null;
      });
  },
});

export default personsSlice.reducer;
