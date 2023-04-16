import { configureStore } from '@reduxjs/toolkit';
import { characterSlice } from 'state/reducers/CharacterSlice';
import { charactersSlice } from 'state/reducers/CharactersReducer';
import { eventSlice } from 'state/reducers/EventsReducer';
import { searchSlice } from 'state/reducers/SearchReducer';

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
