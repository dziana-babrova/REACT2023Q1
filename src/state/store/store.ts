import { configureStore } from '@reduxjs/toolkit';
import { characterSlice } from 'state/reducers/characterReducer';
import { charactersSlice } from 'state/reducers/charactersReducer';
import { eventSlice } from 'state/reducers/eventsReducer';
import { searchSlice } from 'state/reducers/searchReducer';

const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    events: eventSlice.reducer,
    characters: charactersSlice.reducer,
    character: characterSlice.reducer,
  },
});

export { store };

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
