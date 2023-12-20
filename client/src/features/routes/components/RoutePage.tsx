import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

function RoutesPage(): JSX.Element {
  const { routes, loading, error } = useSelector((state: RootState) => state.routes);

  if (loading) {
    return <p>Загрузка маршрутов...</p>;
  }

  if (error) {
    return <p>Ошибка: {error}</p>;
  }

  return (
    <div>
      <h1>Маршруты</h1>
      <ul>
        {routes.map((route) => (
          <li key={route.id}>
            <h2>{route.name}</h2>
            <p>{route.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RoutesPage;
