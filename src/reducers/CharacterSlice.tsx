import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { CardProps } from 'components/cards/Card';
import { getCharacter } from 'services/ApiService';
import { RootState } from 'store/Store';

type StatusType = 'idle' | 'pending' | 'completed' | 'failed';

export type CharacterGetRequestProps = {
  status: StatusType;
  error: string | undefined;
  card: CardProps | undefined;
};

const initialState: CharacterGetRequestProps = {
  card: undefined,
  status: 'idle',
  error: undefined,
};

export const fetchCharacter = createAsyncThunk('character/fetchCharacter', getCharacter);

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    resetStatus: (state, actions: PayloadAction<StatusType>) => {
      state.status = actions.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCharacter.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchCharacter.fulfilled, (state, action) => {
        state.status = 'completed';
        state.card = action.payload;
      })
      .addCase(fetchCharacter.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const getCharacterState = (state: RootState) => state.character.card;

export const { resetStatus } = characterSlice.actions;
