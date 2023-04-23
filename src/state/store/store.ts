import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit';
import { characterSlice } from 'state/reducers/characterReducer';
import { charactersSlice } from 'state/reducers/charactersReducer';
import { eventSlice } from 'state/reducers/eventsReducer';
import { searchSlice } from 'state/reducers/searchReducer';

const rootReducer = combineReducers({
  search: searchSlice.reducer,
  events: eventSlice.reducer,
  characters: charactersSlice.reducer,
  character: characterSlice.reducer,
});

const setupStore = (preloadedState: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export { setupStore };

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
