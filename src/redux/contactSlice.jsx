import {createReducer,createAction} from '@reduxjs/toolkit';
  import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
  
  
  export const setFilter = createAction('contacts/setFilter');
  
  export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  tagTypes: ['Contacts'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62f4edbc535c0c50e765afc2.mockapi.io/api/phonebook/',
  }),
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => `contacts`,
      providesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: newContact => ({
        url: `https://62f4edbc535c0c50e765afc2.mockapi.io/api/phonebook/contacts`,
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `https://62f4edbc535c0c50e765afc2.mockapi.io/api/phonebook/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});
  
  
  export const filterReducer = createReducer('', {
    [setFilter]: (_, action) => action.payload,
  });
  
  export const selectFilter = state => state.filter;
  console.log(selectFilter)
  export const {
    useGetContactsQuery,
    useDeleteContactMutation,
    useAddContactMutation,
  } = contactsApi;