import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { State } from './type/locationtype';
import * as api from './api';

const initialState: State = {
  locations: [],
  isLocation: 0,
  error: undefined,
};

export const loadLocations = createAsyncThunk('load/locations', () => api.initLocationFetch());

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    currentLoc: (state, action) => {
      state.isLocation = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadLocations.fulfilled, (state, action) => {
        state.locations = action.payload;
      })
      .addCase(loadLocations.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { currentLoc } = locationSlice.actions;

export default locationSlice.reducer;
