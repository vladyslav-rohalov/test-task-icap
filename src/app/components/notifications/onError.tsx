import { Typography } from "@mui/material";

interface IProps {
  // text: string | undefined;
  text: any;
}

export default function OnError({ text }: IProps) {
  return (
    <Typography sx={{ fontSize: "0.9rem", color: "error.main" }}>
      {text}
    </Typography>
  );
}
