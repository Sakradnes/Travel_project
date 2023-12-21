import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store/store';
import type { Route } from '../type';
import { Link } from 'react-router-dom';

function RoutesPage(): JSX.Element {
  const { routes, loading, error } = useSelector((state: RootState) => state.routes);

  const isLocation = useSelector((store: RootState) => store.location.isLocation);

  const routesIslocation = routes.filter((route) => route.locationId === +isLocation);

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
        {routesIslocation.map((route: Route) => (
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
            <Link to={`/routes/${route.id}`}>
              <h2>{route.name}</h2>
            </Link>
            <p>{route.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoutesPage;
