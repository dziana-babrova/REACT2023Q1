import { configureStore } from '@reduxjs/toolkit';
import { characterSlice } from 'reducers/CharacterSlice';
import { charactersSlice } from 'reducers/CharactersReducer';
import { eventSlice } from 'reducers/EventsReducer';
import { searchSlice } from 'reducers/SearchReducer';

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
