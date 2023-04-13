import { createSlice } from '@reduxjs/toolkit';
import { Card } from 'components/form/Form';

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

export const getEvents = (state: { events: Card[] }) => state.events;

export const { createEvent } = eventSlice.actions;
