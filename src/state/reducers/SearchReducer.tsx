import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'state/store/Store';

export const searchSlice = createSlice({
  name: 'searchValue',
  initialState: {
    value: '',
  },
  reducers: {
    change: (state, actions: PayloadAction<string>) => {
      state.value = actions.payload;
    },
  },
});

export const getSearchValue = (state: RootState) => {
  return state.search.value;
};

export const { change } = searchSlice.actions;
