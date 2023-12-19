import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import authSlice from '../features/auth/authSlice';

import locationSlice from '../features/location/locationSlice';
import eventSlice from '../features/event/eventSlice';
import BlogSlice from '../features/blog/BlogSlice';


const store = configureStore({
  reducer: {
    auth: authSlice,

    location: locationSlice,
    event: eventSlice,
    blog: BlogSlice

  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
