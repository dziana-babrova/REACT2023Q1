import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { CardProps } from 'components/cards/Card';
import { RootState } from 'store/Store';

export type CharactersGetRequestProps = {
  status: 'idle' | 'pending' | 'completed' | 'failed';
  error: string | null;
  cards: CardProps[];
};

const initialState: CharactersGetRequestProps = {
  cards: [],
  status: 'idle',
  error: null,
};

export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async (searchValue: string) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${searchValue}`);
    const data: { results: CardProps } = await response.json();
    return data.results;
  }
);

export const characterSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacters: (state, actions: PayloadAction<CardProps[]>) => {
      state.cards = [...actions.payload];
    },
  },
});

export const getCharactersState = (state: RootState) => state.characters.cards;

export const { setCharacters } = characterSlice.actions;
