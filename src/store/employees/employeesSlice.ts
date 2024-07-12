import { Employee } from 'types/types.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface EmployeeState {
  employees: Employee[];
}

const initialState: EmployeeState = {
  employees: [],
};

export const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    loadEmployees: (state, action: PayloadAction<Employee[]>) => {
      state.employees = action.payload;
    },
  },
});

export const { loadEmployees } = employeeSlice.actions;
