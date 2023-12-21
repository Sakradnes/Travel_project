/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Login, Rega, State } from './type/authTypes';
import * as api from './api';

const initialState: State = {
  user: undefined,
  isLoggedIn: false,
  error: undefined,
};

export const registration = createAsyncThunk('auth/registration', (obj: Rega) =>
  api.registrationFetch(obj),
);

export const login = createAsyncThunk('auth/login', (obj: Login) => api.loginFetch(obj));

export const check = createAsyncThunk('auth/check', () => api.userCheck());

export const logout = createAsyncThunk('auth/logout', () => api.logOut());

export const addPhotoAlbum = createAsyncThunk('profile/addPhoto', (obj: FormData) =>
  api.addFetchPhoto(obj),
);

export const deletePhotoAlbum = createAsyncThunk('profile/deletePhoto', (photoId: number) =>
  api.deleteFetchPhoto(photoId),
);

export const editUserProfile = createAsyncThunk('profile/editUser', (obj: FormData) =>
  api.editUserFetch(obj),
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registration.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(registration.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(check.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(check.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = undefined;
        state.isLoggedIn = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addPhotoAlbum.fulfilled, (state, action) => {
        if (state.user && 'PhotoAlbums' in state.user) {
          state.user.PhotoAlbums = [...state.user.PhotoAlbums, ...action.payload];
        }

        state.error = undefined;
      })
      .addCase(addPhotoAlbum.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deletePhotoAlbum.fulfilled, (state, action) => {
        if (state.user && 'PhotoAlbums' in state.user) {
          state.user.PhotoAlbums = state.user.PhotoAlbums.filter(
            (photo) => photo.id !== +action.payload,
          );
        }
      })
      .addCase(deletePhotoAlbum.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(editUserProfile.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = undefined;
      })
      .addCase(editUserProfile.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
