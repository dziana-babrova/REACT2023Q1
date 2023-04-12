import { configureStore } from '@reduxjs/toolkit';
import { searchSlice } from 'reducers/SearchReducer';

const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
  },
});

export { store };
