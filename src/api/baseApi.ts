import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from 'api/baseQuery.ts';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery,
  endpoints: () => ({}),
});
