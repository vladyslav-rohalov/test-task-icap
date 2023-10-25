import { Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";

export const ModalBlock = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "width" && prop !== "height" && prop !== "maxHeight",
})(({ width, height, maxHeight, theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  height: "100%",
  width: "100%",
  padding: "32px 16px",
  borderRadius: 4,
  border: `1px solid ${theme.palette.primary.light}`,
  background: "#fff",
  color: "#000",
  backgroundColor: theme.palette.primary.dark,

  [theme.breakpoints.up("sm")]: {
    top: "50%",
    left: "50%",
    width: width,
    height: height,
    maxHeight: maxHeight,
    maxWidth: 1488,
    transform: "translate(-50%, -50%)",
    padding: 32,
  },
}));

export const IconClose = styled(CloseIcon)(({ theme }) => ({
  transition: "all 100ms ease-in-out",
  fill: theme.palette.primary.light,
}));

export const ButtonClose = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: 0,
  right: 0,
  zIndex: 2,

  "&:hover": {
    "& .changeFill": {
      fill: theme.palette.error.main,
      transform: "scale(1.1)",
    },
  },
}));
