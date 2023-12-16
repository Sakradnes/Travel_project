import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function Layout(): JSX.Element {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
