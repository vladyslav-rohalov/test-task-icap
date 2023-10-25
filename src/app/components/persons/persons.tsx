"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/store";
import { getPersons, editPerson } from "@/app/redux/persons/operations";
import { deletePerson, addPerson } from "@/app/redux/persons/operations";
import { usePersons } from "@/app/hooks/usePersons";
import PersonTable from "../table/table";
import Modal from "../modal/modal";
import AddPerson from "../addPerson/addPerson";
import EditPerson from "../editPerson/editPerson";
import DeletePerson from "../deletePerson/deletePerson";
import AboutMe from "../amoutMe/aboutMe";
import { IPerson } from "@/app/lib/interfaces";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { Title, Text, Row, ButtonStyled } from "./persons.styled";

export default function Persons() {
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [person, setPerson] = useState<IPerson[]>([]);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const queryParams = new URLSearchParams(Array.from(searchParams.entries()));
  const page = parseInt(queryParams.get("page") || "1", 10);
  const PER_PAGE = 10;
  const OFFEST = (page - 1) * PER_PAGE;

  const dispatch = useDispatch<AppDispatch>();

  const { count, isLoading, isError, persons } = usePersons();

  const handleAdd = async (personData: IPerson) => {
    const response = await dispatch(addPerson({ person: personData }));
    if (response.meta.requestStatus !== "rejected") {
      setAddModal(false);
    }
  };

  const onEdit = (id: string) => {
    setEditModal(true);
    const currentPerson = persons.filter((person) => person.id === +id);
    setPerson(currentPerson);
  };

  const handleEdit = async (personData: IPerson) => {
    const response = await dispatch(editPerson({ person: personData }));

    if (response.meta.requestStatus !== "rejected") {
      setEditModal(false);
    }
  };

  const onDelete = (id: string) => {
    setDeleteModal(true);
    const currentPerson = persons.filter((person) => person.id === +id);
    setPerson(currentPerson);
  };

  const handleDelete = async (personData: IPerson) => {
    const response = await dispatch(deletePerson({ person: personData }));

    if (response.meta.requestStatus !== "rejected") {
      setEditModal(false);
    }
  };

  const handlePage = (page: number) => {
    queryParams.set("page", page.toString());
    const search = decodeURIComponent(queryParams.toString());
    const query = search ? `?${search}` : "";
    router.push(`${pathname}${query}`, { scroll: false });
  };

  useEffect(() => {
    const params = {
      limit: PER_PAGE,
      offset: OFFEST,
    };
    dispatch(getPersons(params));
  }, [page]);

  return (
    <>
      {!isLoading && (
        <>
          <Title>Persons Table</Title>
          <Row>
            <Text>Total: {count}</Text>
            <ButtonStyled
              endIcon={<PersonAddAlt1Icon />}
              onClick={() => setAddModal(true)}
            >
              Add new
            </ButtonStyled>
          </Row>

          <PersonTable
            persons={persons}
            onDelete={onDelete}
            onEdit={onEdit}
            onPageChange={handlePage}
            total={count}
            PER_PAGE={PER_PAGE}
            page={page}
          />
          <AboutMe />
          <Modal
            width="440px"
            open={addModal}
            close={() => setAddModal(false)}
            title="Add person"
          >
            <AddPerson handleAdd={handleAdd} isError={isError} />
          </Modal>
          <Modal
            width="440px"
            open={editModal}
            close={() => setEditModal(false)}
            title="Edit person"
          >
            <EditPerson
              handleEdit={handleEdit}
              isError={isError}
              person={person[0]}
            />
          </Modal>
          <Modal
            width="440px"
            open={deleteModal}
            close={() => setDeleteModal(false)}
            title="Delete person"
          >
            <DeletePerson
              person={person[0]}
              handleDelete={handleDelete}
              handleAbort={() => setDeleteModal(false)}
              isError={isError}
            />
          </Modal>
        </>
      )}
    </>
  );
}
