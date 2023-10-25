import { useSelector } from "react-redux";
import { selectMessage, selectIsLogin } from "../redux/login/selectors";
import { selectIsError, selectIsLoading } from "../redux/login/selectors";

export const useLogin = () => {
  const isLogin = useSelector(selectIsLogin);
  const message = useSelector(selectMessage);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  return {
    isLogin,
    message,
    isLoading,
    isError,
  };
};
