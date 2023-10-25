"use client";

import { useState, useEffect } from "react";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/store";
import { logIn } from "@/app/redux/login/operations";
import { useLogin } from "@/app/hooks/useLogin";
import { InputAdornment, IconButton, FormControl } from "@mui/material";
import { IUserData } from "@/app/lib/interfaces";
import OnError from "@/app/components/notifications/onError";
import { StyledInput, Container, LoginBlock, Label } from "./login.styled";
import { ButtonStyled, IconView, IconViewOff } from "./login.styled";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const { isLogin, isError } = useLogin();

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  const handleLogin = (userData: IUserData): void => {
    dispatch(logIn(userData));
  };

  useEffect(() => {
    if (isError) {
      setError("username", { type: "manual", message: isError?.message });
      setError("password", { type: "manual", message: isError?.message });
    }
    if (isLogin) {
      redirect("/table");
    }
  }, [isError, setError, isLogin]);

  const handleClearError = () => {
    clearErrors("username");
    clearErrors("password");
  };

  return (
    <Container>
      <LoginBlock>
        <FormControl
          sx={{ width: "100%" }}
          component="form"
          onSubmit={handleSubmit(({ username, password }) =>
            handleLogin({ username, password })
          )}
          onChange={handleClearError}
        >
          <Label>Log In</Label>
          <StyledInput
            err={errors?.username}
            required
            id="username"
            label="User Name"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            {...register("username")}
          />
          {errors?.username && <OnError text={isError?.message} />}
          <StyledInput
            err={errors?.password}
            required
            id="password"
            type={showPassword ? "text" : "password"}
            autoComplete="password"
            label="Password"
            InputLabelProps={{
              shrink: true,
            }}
            {...register("password")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <IconView /> : <IconViewOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {errors?.password && <OnError text={isError?.message} />}
          <ButtonStyled variant="contained" type="submit">
            Log In
          </ButtonStyled>
        </FormControl>
      </LoginBlock>
    </Container>
  );
}
