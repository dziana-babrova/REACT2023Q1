import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'searchValue',
  initialState: {
    value: '',
  },
  reducers: {
    change: (state) => {
      state.value = '';
    },
  },
});

export const { change } =