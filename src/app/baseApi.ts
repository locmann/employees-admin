import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQuery.ts';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery,
  tagTypes: ['Employee'],
  endpoints: () => ({}),
});
