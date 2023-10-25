import Link from "next/link";
import { Box, Typography, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { ContainerStyled } from "./aboutMe.styled";

export default function AboutMe() {
  return (
    <Box sx={{ my: 4 }} component="footer">
      <ContainerStyled maxWidth="xl">
        <Typography sx={{ color: "#fff" }}>
          Created by Vladyslav Rohalov
        </Typography>
        <Link
          href="https://github.com/vladyslav-rohalov"
          rel="noopener noreferrer"
          target="_blank"
        >
          <IconButton sx={{ color: "#fff" }}>
            <GitHubIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </Link>

        <Link
          href="https://www.linkedin.com/in/vladyslav-rohalov/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <IconButton sx={{ color: "#fff" }}>
            <LinkedInIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </Link>
      </ContainerStyled>
    </Box>
  );
}
