import { createSlice } from '@reduxjs/toolkit';

const initialFilter = '';

const filterSlice = createSlice({
  name: 'filters',
  initialState: initialFilter,
  reducers: {
    setFilterState(state, action) {
      return action.payload;
    },
  },
});

export const { setFilterState } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
