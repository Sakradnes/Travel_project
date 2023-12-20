import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import authSlice from '../features/auth/authSlice';

import locationSlice from '../features/location/locationSlice';
import eventSlice from '../features/event/eventSlice';
import BlogSlice from '../features/blog/BlogSlice';
import RouteSlice from '../features/routes/components/RouteSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    routes: RouteSlice,
    location: locationSlice,
    event: eventSlice,
    blog: BlogSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
