import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store/Store';

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

export const getSearchValue = (state: RootState) => state.search.value;

export const { change } = searchSlice.actions;
