import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CardProps } from 'components/cards/Card';
import { getCharacter } from 'services/ApiService';
import { RootState } from 'state/store/store';

export type CharacterGetRequestProps = {
  isLoading: boolean;
  error: string | undefined;
  card: CardProps | undefined;
};

const initialState: CharacterGetRequestProps = {
  card: undefined,
  isLoading: false,
  error: undefined,
};

export const fetchCharacter = createAsyncThunk('character/fetchCharacter', getCharacter);

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    resetCard: (state) => {
      state.card = undefined;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCharacter.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCharacter.fulfilled, (state, action) => {
        state.isLoading = false;
        state.card = action.payload;
      })
      .addCase(fetchCharacter.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const getCharacterState = (state: RootState) => state.character.card;

export const { resetCard } = characterSlice.actions;
