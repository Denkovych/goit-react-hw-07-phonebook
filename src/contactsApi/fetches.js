import axios from 'axios';

export const fetchContacts = () => {
  return axios.get(
    'https://631c6eb94fa7d3264cadf978.mockapi.io/api/phonebook/contacts'
  );
};

export const addContact = newContact => {
  return axios.post(
    'https://631c6eb94fa7d3264cadf978.mockapi.io/api/phonebook/contacts',
    newContact
  );
};

export const deleteContact = id => {
  return axios.delete(
    `https://631c6eb94fa7d3264cadf978.mockapi.io/api/phonebook/contacts/${id}`
  );
};