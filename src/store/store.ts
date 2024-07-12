import { configureStore } from '@reduxjs/toolkit';
import { employeeSlice } from 'store/employees/employeesSlice.ts';
import { baseApi } from 'api/baseApi.ts';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    employees: employeeSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
