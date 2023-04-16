import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CardProps } from 'components/cards/Card';
import { getCharacters } from 'services/ApiService';
import { RootState } from 'state/store/Store';

export type CharactersGetRequestProps = {
  status: 'idle' | 'pending' | 'completed' | 'failed';
  error: string | undefined;
  cards: CardProps[];
};

const initialState: CharactersGetRequestProps = {
  cards: [],
  status: 'idle',
  error: undefined,
};

export const fetchCharacters = createAsyncThunk('characters/fetchCharacters', getCharacters);

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.status = 'completed';
        state.cards = action.payload;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const getCharactersState = (state: RootState) => state.characters.cards;
