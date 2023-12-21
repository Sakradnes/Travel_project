import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import MainPage from './MainPage';
import RegaPage from '../features/auth/components/RegaPage';
import LoginPage from '../features/auth/components/LoginPage';

import { useAppDispatch } from '../store/store';
import { check } from '../features/auth/authSlice';

import ProfilePage from '../features/profile/components/ProfilePage';
import BlogPage from '../features/blog/BlogPage';

import { fetchPosts } from '../features/blog/BlogSlice';
import { fetchRoutes } from '../features/routes/components/RouteSlice';
import RoutesPage from '../features/routes/components/RoutePage';
import EventPage from '../features/event/components/EventPage';
import { loadEvents } from '../features/event/eventSlice';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(check());
    dispatch(fetchPosts());
    dispatch(fetchRoutes());
    dispatch(loadEvents());
  }, [dispatch]);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/registration" element={<RegaPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/event/:id" element={<EventPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/routes" element={<RoutesPage />} />
      </Route>
    </Routes>
  );
}

export default App;
