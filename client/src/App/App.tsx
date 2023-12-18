import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import MainPage from './MainPage';
import RegaPage from '../features/auth/components/RegaPage';
import LoginPage from '../features/auth/components/LoginPage';
import { useAppDispatch } from '../store/store';
import { check } from '../features/auth/authSlice';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(check());
  }, []);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/registration" element={<RegaPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
