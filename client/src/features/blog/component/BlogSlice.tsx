import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('blog/fetchPosts', async () => {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=travel&from=2023-11-21&language=ru&pageSize=20&apiKey=d40432c84cde4423bf6c94f3e4fcfafa`,
  );

  if (!response.ok) {
    return Error('Error');
  }
  const data = await response.json();
  console.log(data);

  return data.articles;
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
