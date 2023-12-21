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
    <div className="routes">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {routes.map((route: Route) => (
          <div key={route.id} className="bg-white rounded-md p-4">
            <img
              src={route.img}
              alt="..."
              className="rounded-full mx-auto mb-2"
              style={{ width: '300px', height: '300px', objectFit: 'cover' }}
            />
            <h2 className="text-xl font-bold mb-2">{route.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoutesPage;
