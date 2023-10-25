import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { IPerson, IError } from "@/app/lib/interfaces";
import OnError from "../notifications/onError";
import { FormControl } from "@mui/material";
import { StyledInput, ButtonStyled } from "../login/login.styled";

interface IProps {
  isError: IError | null;
  handleAdd: (personData: IPerson) => void;
}

export default function AddPerson({ isError, handleAdd }: IProps) {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isError) {
      Object.entries(isError).forEach(([field, messages]) => {
        setError(field, { type: "manual", message: messages[0] });
      });
    }
  }, [isError, setError]);

  const handleClearError = () => {
    clearErrors("name");
    clearErrors("email");
    clearErrors("birthday_date");
    clearErrors("phone_number");
    clearErrors("address");
  };

  return (
    <FormControl
      sx={{ width: "100%" }}
      component="form"
      onSubmit={handleSubmit(
        ({ name, email, birthday_date, phone_number, address }) =>
          handleAdd({ name, email, birthday_date, phone_number, address })
      )}
      onChange={handleClearError}
    >
      <StyledInput
        err={errors?.name}
        required
        id="name"
        label="User name"
        type="text"
        {...register("name")}
      />
      {errors?.name && <OnError text={errors?.name.message} />}

      <StyledInput
        err={errors?.email}
        required
        id="email"
        label="User email"
        type="text"
        {...register("email")}
      />
      {errors?.email && <OnError text={errors?.email.message} />}

      <StyledInput
        err={errors?.birthday_date}
        required
        id="birthday_date"
        label="User birthday date"
        type="text"
        {...register("birthday_date")}
      />
      {errors?.birthday_date && (
        <OnError text={errors?.birthday_date.message} />
      )}

      <StyledInput
        err={errors?.phone_number}
        required
        id="phone_number"
        label="User phone number"
        type="text"
        {...register("phone_number")}
      />
      {errors?.phone_number && <OnError text={errors?.phone_number.message} />}

      <StyledInput
        err={errors?.address}
        required
        id="address"
        label="User address"
        type="text"
        {...register("address")}
      />
      {errors?.address && <OnError text={errors?.address.message} />}

      <ButtonStyled variant="contained" type="submit">
        Add person
      </ButtonStyled>
    </FormControl>
  );
}
