import { RootState } from "../store";

export const selectPersons = (state: RootState) => state.persons.results;
export const selectCounts = (state: RootState) => state.persons.count;
export const selectNext = (state: RootState) => state.persons.next;
export const selectPrevious = (state: RootState) => state.persons.previous;
export const selectIsError = (state: RootState) => state.persons.isError;
export const selectIsLoading = (state: RootState) => state.persons.isLoading;
