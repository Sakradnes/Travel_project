import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Login, Rega, State } from './type/authTypes';
import * as api from './api';

const initialState: State = {
  user: undefined,
  error: undefined,
};

export const registration = createAsyncThunk('auth/registration', (obj: Rega) =>
  api.registrationFetch(obj),
);

export const login = createAsyncThunk('auth/login', (obj: Login) => api.loginFetch(obj));

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registration.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(registration.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
