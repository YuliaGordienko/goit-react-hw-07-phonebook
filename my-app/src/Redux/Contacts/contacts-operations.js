import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchContacts } from "API/ContactsApi";

export const getContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
// export const getContacts = () => async (dispatch) => {
//   dispatch(contactsActions.fetchContactsRecvest());
//   try {
//     const contacts = await fetchContacts();
//     dispatch(contactsActions.fetchContactsSuccess(contacts));
//   } catch (error) {
//     dispatch(contactsActions.fetchContactsError(error));
//   }
// };
