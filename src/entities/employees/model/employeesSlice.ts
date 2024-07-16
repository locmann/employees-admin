import { Employee } from 'entities/employees/model/types.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store.ts';

type EmployeeState = {
  employeesData: Employee[];
};

const initialState: EmployeeState = {
  employeesData: [],
};

export const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    loadEmployees: (state, action: PayloadAction<Employee[]>) => {
      state.employeesData = action.payload;
    },
  },
});

export const selectEmployee = (state: RootState) => state.employees.employeesData;
export const { loadEmployees } = employeeSlice.actions;

export default employeeSlice.reducer;
