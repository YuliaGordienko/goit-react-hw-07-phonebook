import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as contactsOperations from "Redux/Contacts/contacts-operations";
import Input from "Input/Input";
import ContactsList from "ContactsList/ContactsList";
import FiltrByName from "FiltrByName/FiltrByName";

import "./App.css";
import {
  addContact,
  filterForCont,
  deleteContact,
} from "./Redux/Contacts/contacts-actions";
import {
  getContactsSelector,
  getFilterQuery,
  arrayContacs,
} from "./Redux/Contacts/contacts-selectors";
const { v4: uuidv4 } = require("uuid");

export default function App() {
  const items = useSelector(getContactsSelector);
  const filterQuery = useSelector(getFilterQuery);
  const arrayAfterFilter = useSelector(arrayContacs);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);
  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = {
      id: uuidv4(),
      name,
      number,
    };
    if (items.find((contact) => contact.name === name)) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addContact(contact));
    }
    setName("");
    setNumber("");
  };

  const handleFilterChange = (e) => {
    dispatch(filterForCont(e.currentTarget.value));
  };
  const deleteContacs = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div style={{ marginLeft: "20px" }}>
      <h1>Phonebook</h1>
      <Input
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        valueName={name}
        valueNumber={number}
      />
      <FiltrByName value={filterQuery} onChange={handleFilterChange} />
      <ContactsList
        contacts={arrayAfterFilter}
        onDeleteContacts={deleteContacs}
      />
    </div>
  );
}
