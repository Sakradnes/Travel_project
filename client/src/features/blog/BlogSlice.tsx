import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('blog/fetchPosts', async () => {
  const response = await fetch('');
  if (!response.ok) {
    return Error('Failed to fetch data');
  }

  const data = await response.json();
  return data;
});

const initialState = { posts: [], loading: false, error: null };

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default blogSlice.reducer;
export { fetchPosts };
