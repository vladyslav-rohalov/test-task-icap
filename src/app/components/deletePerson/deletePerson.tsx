import { Button } from "@mui/material";
import { DeleteBlock, Text, Container } from "./deletePerson.styled";
import { IPerson, IError } from "@/app/lib/interfaces";
import OnError from "../notifications/onError";

interface IProps {
  person: IPerson;
  handleDelete: (personData: IPerson) => void;
  handleAbort: () => void;
  isError: IError | null;
}
export default function DeletePerson({
  handleDelete,
  handleAbort,
  person,
  isError,
}: IProps) {
  return (
    <Container>
      <Text>Do you really want to delete user {person.name}?</Text>
      <DeleteBlock>
        <Button variant="contained" onClick={() => handleDelete(person)}>
          Yes, delete
        </Button>
        <Button variant="contained" onClick={handleAbort}>
          No, leave
        </Button>
      </DeleteBlock>
      {isError && <OnError text={isError?.detail} />}
    </Container>
  );
}
