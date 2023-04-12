import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'searchValue',
  initialState: {
    value: '',
  },
  reducers: {
    change: (state, actions) => {
      state.value = actions.payload;
    },
  },
});

export const getSearchValue = (state: { search: { value: string } }) => state.search.value;

export const { change } = searchSlice.actions;
