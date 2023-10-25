import { Container } from "@mui/material";
import Persons from "@/app/components/persons/persons";

export const metadata = {
  title: "Persons",
  description: "Login page",
};

export default function Table() {
  return (
    <Container
      component="section"
      maxWidth="xl"
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        px: 2,
        mt: 12,
        mb: 2,
        zIndex: 2,
      }}
    >
      <Persons />
    </Container>
  );
}
