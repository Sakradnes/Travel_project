import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import authSlice from '../features/auth/authSlice';
import travelSlice from '../features/travel/travelSlice';
import BlogSlice from '../features/blog/BlogSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    location: travelSlice,
    blog: BlogSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
