import { createSlice } from '@reduxjs/toolkit';
import { CardProps } from 'components/cards/Card';

const initialState: CardProps[] = [];

export const characterSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacters: (state, actions) => {
      state = [...actions.payload];
    },
  },
});

export const getCharacters = (state: { characters: CardProps[] }) => state.characters;

export const { setCharacters } = characterSlice.actions;
