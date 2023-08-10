import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, setFilter } from './actions';
import { contactsFromLocalStorage, parsedContacts } from 'servis/localstorage';

const contactsInitialState = parsedContacts('contacts', []);

export const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
    contactsFromLocalStorage([...state, action.payload]);
    return [...state, action.payload];
  },
  [deleteContact]: (state, action) => {
    const newContact = state.filter(contact => contact.id !== action.payload);
    contactsFromLocalStorage(newContact);
    return newContact;
  },
});

const filterInitialState = '';

export const filterReducer = createReducer(filterInitialState, {
  [setFilter]: (state, action) => action.payload,
});
