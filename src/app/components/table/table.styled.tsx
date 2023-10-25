import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { TableRow, TableContainer, Stack } from "@mui/material";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteIcon from "@mui/icons-material/Delete";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.secondary.dark,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const IconEdit = styled(DriveFileRenameOutlineIcon)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

export const IconDelete = styled(DeleteIcon)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

export const TableContainerStyled = styled(TableContainer)(({ theme }) => ({
  opacity: 0.9,
  border: `1px solid ${theme.palette.text.primary}`,
}));

export const StackStyled = styled(Stack)({
  marginTop: 32,
  alignItems: "center",
});
