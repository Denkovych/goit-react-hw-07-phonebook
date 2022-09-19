import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://631c6eb94fa7d3264cadf978.mockapi.io/api/phonebook/',
  }),
  tagTypes: ['Contacts'],

  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `contacts/`,
      providesTags: ['Contacts'],
    }),

    getContactById: builder.query({
      query: id => `contacts/${id}`,
      providesTags: ['Contacts'],
    }),

    addContacts: builder.mutation({
      query: contact => ({
        url: `contacts/`,
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['Contacts'],
    }),

    removeContacts: builder.mutation({
      query: id => ({
        url: `contacts/${id}`,
        method: 'DELETE',
        body: id,
      }),
      invalidatesTags: ['Contacts'],
    }),

    updateContactbyId: builder.mutation({
      query: contact => ({
        url: `contacts/${contact.id}`,
        method: 'PUT',
        body: contact,
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactsMutation,
  useRemoveContactsMutation,
  useUpdateContactbyIdMutation,
  useGetContactByIdQuery,
} = contactsApi;