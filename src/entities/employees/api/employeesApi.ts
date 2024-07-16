import { baseApi } from 'app/baseApi.ts';
import { Employee } from 'entities/employees/model/types.ts';

export const employeesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getEmployees: build.query<Employee[], void>({
      query: () => ({
        url: '/api/employees',
        method: 'GET',
      }),
      providesTags: ['Employee'],
    }),

    updateEmployee: build.mutation<void, Employee>({
      query: (employee) => ({
        url: `/api/employees/${employee.id}`,
        method: 'PUT',
        body: employee,
      }),
      invalidatesTags: ['Employee'],
    }),
    createEmployee: build.mutation<void, Employee>({
      query: (employee) => ({
        url: '/api/employees',
        method: 'POST',
        body: employee,
      }),
      invalidatesTags: ['Employee'],
    }),
    deleteEmployee: build.mutation<void, Employee>({
      query: (employee) => ({
        url: `/api/employees/${employee.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Employee'],
    }),
  }),
});

export const {
  useGetEmployeesQuery,
  useUpdateEmployeeMutation,
  useDeleteEmployeeMutation,
  useCreateEmployeeMutation,
} = employeesApi;
