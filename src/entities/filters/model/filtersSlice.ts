import { Position, SortMode } from './types.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store.ts';

type FiltersState = {
  position: Position;
  status: boolean;
  nameSort: SortMode;
  dateSort: SortMode;
};

const initialState: FiltersState = {
  position: Position.Empty,
  status: false,
  nameSort: SortMode.None,
  dateSort: SortMode.None,
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
    setNameSortMode: (state, action: PayloadAction<SortMode>) => {
      state.nameSort = action.payload;
    },
    setDateSortMode: (state, action: PayloadAction<SortMode>) => {
      state.dateSort = action.payload;
    },
  },
});

export const selectFilterStatus = (state: RootState) => state.filters.status;
export const selectFilterPosition = (state: RootState) => state.filters.position;
export const selectNameSortMode = (state: RootState) => state.filters.nameSort;
export const selectDateSortMode = (state: RootState) => state.filters.dateSort;
export const { setPositionFilter, setStatusFilter, setNameSortMode, setDateSortMode } =
  filtersSlice.actions;

export default filtersSlice.reducer;
