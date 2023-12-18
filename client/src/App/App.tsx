import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import MainPage from './MainPage';
import RegaPage from '../features/auth/components/RegaPage';
import LoginPage from '../features/auth/components/LoginPage';
import ProfilePage from '../features/profile/components/ProfilePage';

function App(): JSX.Element {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/registration" element={<RegaPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}

export default App;
