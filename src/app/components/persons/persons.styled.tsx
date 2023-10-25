import { styled } from "@mui/material/styles";
import { Typography, Box, Button } from "@mui/material";

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  fontWeight: "500",
  color: theme.palette.text.primary,
  textAlign: "center",
}));

export const Text = styled(Typography)(({ theme }) => ({
  fontSize: "1.25rem",
  color: theme.palette.text.primary,
}));

export const Row = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: 16,
});

export const ButtonStyled = styled(Button)(({ theme }) => ({
  width: 120,
  color: theme.palette.text.primary,
}));
