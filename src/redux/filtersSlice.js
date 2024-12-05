import { createSlice } from '@reduxjs/toolkit';

const initialFilter = '';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialFilter,
  reducers: {
    setFilterState(state, action) {
      state = action.payload;
    },
  },
});

export const { setFilterState } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
