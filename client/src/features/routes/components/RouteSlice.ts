import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { State } from '../type';
import * as api from '../../auth/api';

export const fetchRoutes = createAsyncThunk('routes/fetchRoutes', async () => {
  const response = await fetch('/api/routes');
  if (!response.ok) {
    throw new Error('Ошибка при загрузке маршрутов');
  }

  const data = await response.json();

  return data;
});

export const fetchRatings = createAsyncThunk(
  'routes/fetchRatings',
  async ({ routeId, rating }: { routeId: number; rating: number }) => {
    api.setRatingFetch(routeId, rating);
  },
);

const initialState: State = { routes: [], loading: false, error: undefined };

const routeSlice = createSlice({
  name: 'routes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRoutes.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(fetchRoutes.fulfilled, (state, action) => {
        state.routes = action.payload;
        state.loading = false;
      })
      .addCase(fetchRoutes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchRatings.fulfilled, (state, action) => {
        state.routes = action.payload;
        console.log(action.payload);
      })
      .addCase(fetchRatings.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default routeSlice.reducer;
