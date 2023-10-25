import { ReactNode } from "react";
import { Box, Typography, Divider } from "@mui/material";
import { Modal as MuiModal } from "@mui/material";
import { ModalBlock, ButtonClose, IconClose } from "./modal.styled";

interface IProps {
  children: ReactNode;
  open: boolean;
  close: () => void;
  title: string;
  width?: string;
  height?: string;
  maxHeight?: string;
}

export default function Modal({
  children,
  open,
  close,
  title,
  width = "100%",
  height = "auto",
  maxHeight = "auto",
}: IProps) {
  return (
    <MuiModal open={open} onClose={close} closeAfterTransition={true}>
      <ModalBlock width={width} height={height} maxHeight={maxHeight}>
        <ButtonClose onClick={close}>
          <IconClose className="changeFill" />
        </ButtonClose>
        {title && (
          <Box>
            <Typography
              sx={{ fontSize: 28, fontWeight: 500, color: "text.primary" }}
            >
              {title}
            </Typography>
            <Divider sx={{ bgcolor: "primary.dim" }} />
          </Box>
        )}
        {children}
      </ModalBlock>
    </MuiModal>
  );
}
