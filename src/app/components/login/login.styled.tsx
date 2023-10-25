import { TextField, Button, Box, FormLabel } from "@mui/material";
import { FormControl } from "@mui/material";
import { styled } from "@mui/material/styles";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export const StyledInput = styled(TextField, {
  shouldForwardProp: (prop) => prop !== "err",
})<{ err?: any }>(({ theme, err }) => ({
  marginTop: 16,
  input: { color: err ? theme.palette.error.main : theme.palette.primary.main },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: err ? theme.palette.error.main : theme.palette.text.primary,
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: err ? theme.palette.error.main : theme.palette.primary.light,
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: err ? theme.palette.error.main : theme.palette.primary.light,
    },
  },
}));

export const Container = styled(Box)({
  width: "100vw",
  height: "100vh",
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
});

export const LoginBlock = styled(Box)({
  width: 440,
  padding: "32px",
  border: "1px solid #ffffff",
  borderRadius: "4px",
});

export const ButtonStyled = styled(Button)({
  marginTop: 16,
  height: 48,
});

export const IconView = styled(VisibilityIcon)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

export const IconViewOff = styled(VisibilityOffIcon)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

export const Label = styled(FormLabel)(({ theme }) => ({
  fontSize: "1.5rem",
  fontWeight: 500,
  color: theme.palette.text.primary,
}));

export const Form = styled(FormControl)({
  width: "100%",
});
