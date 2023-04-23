import { configureStore } from '@reduxjs/toolkit';
import { characterSlice } from 'state/reducers/CharacterSlice';
import { eventSlice } from 'state/reducers/EventsReducer';
import { searchSlice } from 'state/reducers/SearchReducer';
import { apiSlice } from 'state/reducers/apiSlice';

const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    events: eventSlice.reducer,
    character: characterSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export { store };

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
