import { baseApi } from 'api/baseApi.ts';
import { Employee } from 'types/types.ts';

export const employeesApi = baseApi.injectEndpoints?.({
  endpoints: (build) => ({
    getEmployees: build.query<Employee[], void>({
      query: () => ({
        url: '/api/employees',
        method: 'GET',
      }),
    }),
    /*getEmployeeById: build.query<Employee, { id: number }>({
      query: (id) => ({ id }),
    }),
    createEmployee: build.mutation<Employee, { name: string; age: number }>({
      query: (name, age) => ({ name, age }),
      transformResponse: (response) => response,
    }),
    updateEmployee: build.mutation<Employee, { id: number; name: string; age: number }>({
      query: (id, name, age) => ({ id, name, age }),
      transformResponse: (response) => response,
    }),
    deleteEmployee: build.mutation<void, { id: number }>({
      query: (id) => ({ id }),
    }),*/
  }),
});
