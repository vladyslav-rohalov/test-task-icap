import { Table, TableBody } from "@mui/material";
import { TableHead, TableRow, IconButton } from "@mui/material";
import { StyledTableCell, StyledTableRow, StackStyled } from "./table.styled";
import { IconEdit, IconDelete, TableContainerStyled } from "./table.styled";
import { IPerson } from "@/app/lib/interfaces";
import Pagination from "@mui/material/Pagination";

interface IProps {
  total: number | null;
  PER_PAGE: number;
  persons: IPerson[];
  page: number;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onPageChange: (page: number) => void;
}

export default function PersonTable({
  persons,
  PER_PAGE,
  onEdit,
  onDelete,
  onPageChange,
  total,
  page,
}: IProps) {
  const pageCount = total ? Math.ceil(total / PER_PAGE) : 0;
  return (
    <>
      <TableContainerStyled>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="left">Email</StyledTableCell>
              <StyledTableCell align="left">Date of birth</StyledTableCell>
              <StyledTableCell align="left">Phone</StyledTableCell>
              <StyledTableCell align="left">Address</StyledTableCell>
              <StyledTableCell align="left">Edit</StyledTableCell>
              <StyledTableCell align="left">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {persons.map((person: any) => (
              <StyledTableRow key={person.id}>
                <StyledTableCell component="th" scope="row">
                  {person.name}
                </StyledTableCell>
                <StyledTableCell align="left">{person.email}</StyledTableCell>
                <StyledTableCell align="left">
                  {person.birthday_date}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {person.phone_number}
                </StyledTableCell>
                <StyledTableCell align="left">{person.address}</StyledTableCell>
                <StyledTableCell align="left">
                  <IconButton
                    id={person.id}
                    onClick={(e) => onEdit(e.currentTarget.id)}
                  >
                    <IconEdit />
                  </IconButton>
                </StyledTableCell>
                <StyledTableCell align="left">
                  <IconButton
                    id={person.id}
                    onClick={(e) => onDelete(e.currentTarget.id)}
                  >
                    <IconDelete />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainerStyled>
      <StackStyled spacing={2}>
        <Pagination
          page={page}
          count={pageCount}
          onChange={(e, page) => onPageChange(page)}
        />
      </StackStyled>
    </>
  );
}
