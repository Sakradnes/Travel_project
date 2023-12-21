import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Event, State } from './type/eventType';
import * as api from './api';

const initialState: State = {
  events: [],
  error: undefined,
};

export const loadEvents = createAsyncThunk('load/events', () => api.initEventFetch());
export const addEvents = createAsyncThunk('add/event', (obj: FormData) => api.addFetchEvent(obj));
export const changeEvents = createAsyncThunk('change/event', (obj: FormData) =>
  api.changeFetchevent(obj),
);
export const deleteEvent = createAsyncThunk('delete/event', (id: Event['id']) =>
  api.deleteFetchEvent(id),
);

const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadEvents.fulfilled, (state, action) => {
        state.events = action.payload;
      })
      .addCase(loadEvents.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addEvents.fulfilled, (state, action) => {
        state.events.push(action.payload);
      })
      .addCase(addEvents.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(changeEvents.fulfilled, (state, action) => {
        state.events = state.events.map((event) =>
          event.id === action.payload.id ? action.payload : event,
        );
      })
      .addCase(changeEvents.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteEvent.fulfilled, (state, action) => {
        state.events = state.events.filter((event) => event.id !== action.payload);
      })
      .addCase(deleteEvent.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default eventSlice.reducer;
