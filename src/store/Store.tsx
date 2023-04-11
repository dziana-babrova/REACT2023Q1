import { configureStore } from '@reduxjs/toolkit';
import { searchSlice } from 'components/reducers/SearchReducer';

const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
  },
});
