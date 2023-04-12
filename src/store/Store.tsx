import { configureStore } from '@reduxjs/toolkit';
import { eventSlice } from 'reducers/NewEventFormReducer';
import { searchSlice } from 'reducers/SearchReducer';

const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    events: eventSlice.reducer,
  },
});

export { store };
