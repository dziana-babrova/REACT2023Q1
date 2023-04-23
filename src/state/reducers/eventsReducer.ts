import { createSlice } from '@reduxjs/toolkit';
import { Card } from 'components/form/Form';
import { RootState } from 'state/store/store';

const initialState: Card[] = [];

export const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    createEvent: (state, actions) => {
      state.push(actions.payload);
    },
  },
});

export const getEvents = (state: RootState) => state.events;

export const { createEvent } = eventSlice.actions;
