import {createReducer,createAction} from '@reduxjs/toolkit';
  import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
  
  
  export const setFilter = createAction('contacts/setFilter');
  
  export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  
  baseQuery: fetchBaseQuery({
    baseUrl: `https://62f4edbc535c0c50e765afc2.mockapi.io/api/phonebook/`,
    
  }),
  tagTypes: ['Contacts'],

  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `contacts`,
      providesTags: ['Contacts'],
    }),
    getContactById: builder.query({
      query: id => `contacts/${id}`,
      providesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: newContact => ({
        url: `contacts`,
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `contacts/${id}`,
        method: 'DELETE',
        body: id,
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