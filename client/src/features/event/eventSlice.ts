import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { State } from './type/eventType';
import * as api from './api';

const initialState: State = {
  events: [],
  error: undefined,
};

export const loadEvents = createAsyncThunk('load/events', () => api.initEventFetch());

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
      });
  },
});

export default eventSlice.reducer;
