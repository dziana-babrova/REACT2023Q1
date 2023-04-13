import { configureStore } from '@reduxjs/toolkit';
import { characterSlice } from 'reducers/CharactersReducer';
import { eventSlice } from 'reducers/EventsReducer';
import { searchSlice } from 'reducers/SearchReducer';

const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    events: eventSlice.reducer,
    characters: characterSlice.reducer,
  },
});

export { store };

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
