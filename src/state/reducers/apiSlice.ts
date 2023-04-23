import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CardProps } from 'components/cards/Card';

export const apiSlice = createApi({
  reducerPath: 'api',

  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),

  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: (searchValue) => ({
        url: `/character`,
        params: { name: searchValue },
        method: 'GET',
      }),
      transformResponse: (response: { results: CardProps[] }) => response.results,
    }),
    getCharacter: builder.query({
      query: (id) => ({ url: `/character/${id}` }),
    }),
  }),
});

export const { useGetCharactersQuery, useGetCharacterQuery } = apiSlice;
