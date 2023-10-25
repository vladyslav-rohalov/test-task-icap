import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "32px 0",
});

export const DeleteBlock = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  gap: 32,
  margin: "32px 0",
});

export const Text = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: "1rem",
  textAlign: "center",
}));
