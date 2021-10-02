import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  addContact,
  addContacts,
  filterForCont,
  deleteContact,
} from "./contacts-actions";
import { getContacts } from "./contacts-operations";
const items = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [addContacts]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [getContacts.fulfilled]: (_, action) => action.payload,
});

const filterQuery = createReducer("", {
  [filterForCont]: (_, { payload }) => payload,
});
const isLoading = createReducer(false, {
  [getContacts.pending]: () => true,
  [getContacts.fulfilled]: () => false,
  [getContacts.rejected]: () => false,
});
const error = createReducer(null, {
  [getContacts.rejected]: (_, action) => action.payload,
  [getContacts.pending]: () => null,
});
export default combineReducers({
  items,
  filterQuery,
  isLoading,
  error,
});
