import { Position } from './types.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store.ts';

type FiltersState = {
  position: Position;
  status: boolean;
};

const initialState: FiltersState = {
  position: Position.Empty,
  status: false,
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setPositionFilter: (state, action: PayloadAction<Position>) => {
      state.position = action.payload;
    },
    setStatusFilter: (state, action: PayloadAction<boolean>) => {
      state.status = action.payload;
    },
  },
});

export const selectFilterStatus = (state: RootState) => state.filters.status;
export const selectFilterPosition = (state: RootState) => state.filters.position;
export const { setPositionFilter, setStatusFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
