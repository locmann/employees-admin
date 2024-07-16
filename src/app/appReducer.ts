import { combineReducers } from '@reduxjs/toolkit';
import { baseApi } from './baseApi.ts';
import employeesReducer from 'entities/employees/model/employeesSlice.ts';
import filtersReducer from 'entities/filters/model/filtersSlice.ts';

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  employees: employeesReducer,
  filters: filtersReducer,
});
