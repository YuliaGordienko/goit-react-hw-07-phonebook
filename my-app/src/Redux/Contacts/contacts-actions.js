import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("contacts/Add");
export const addContacts = createAction("contacts/ADD_CONTACTS");
export const filterForCont = createAction("contacts/Filter");
export const deleteContact = createAction("contacts/DELETE");
// export const fetchContactsRecvest = createAction(
//   "/contacts/fetchContactsRecvest"
// );
// export const fetchContactsSuccess = createAction(
//   "/contacts/fetchContactsSuccess"
// );
// export const fetchContactsError = createAction("/contacts/fetchContactsError");
