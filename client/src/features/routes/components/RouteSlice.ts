import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { State } from '../type';

export const fetchRoutes = createAsyncThunk('routes/fetchRoutes', async () => {
  const response = await fetch('/api/routes');
  if (!response.ok) {
    throw new Error('Ошибка при загрузке маршрутов');
  }

  const data = await response.json();
  console.log(data);

  return data;
});

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
      });
  },
});

export default routeSlice.reducer;
