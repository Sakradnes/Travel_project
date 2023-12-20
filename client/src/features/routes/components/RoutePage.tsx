import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store/store';
import type { Route } from '../type';

function RoutesPage(): JSX.Element {
  const { routes, loading, error } = useSelector((state: RootState) => state.routes);

  if (loading) {
    return <p>Загрузка маршрутов</p>;
  }

  if (error) {
    return <p>Ошибка: {error}</p>;
  }

  return (
    <div>
      <h1>Маршруты</h1>
      <div>
        {routes.map((route: Route) => (
          <div key={route.id}>
            <img
              style={{
                width: '300px',
                height: '300px',
                objectFit: 'cover',
                borderRadius: '10px',
                marginBottom: '10px',
              }}
              src={route.img}
              alt="..."
              className="image"
            />
            <h2>{route.name}</h2>
            <p>{route.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoutesPage;
