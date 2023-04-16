import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store/Store';

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
  console.log(state.search.value);
  return state.search.value;
};

export const { change } = searchSlice.actions;
