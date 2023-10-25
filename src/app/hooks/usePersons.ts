import { useSelector } from "react-redux";
import { selectCounts, selectNext } from "../redux/persons/selectors";
import { selectIsError, selectPersons } from "../redux/persons/selectors";
import { selectIsLoading, selectPrevious } from "../redux/persons/selectors";

export const usePersons = () => {
  const count = useSelector(selectCounts);
  const next = useSelector(selectNext);
  const previous = useSelector(selectPrevious);
  const persons = useSelector(selectPersons);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  return { count, next, previous, persons, isLoading, isError };
};
