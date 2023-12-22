import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store/store';
import type { Route } from '../type';
import { Link } from 'react-router-dom';
import { setRatingFetch } from '../../auth/api';
import RouteCard from './RouteCard';

// Импортируем действие (action) для установки рейтинга
// import { setRating } from "";

function RoutesPage(): JSX.Element {
  const dispatch = useDispatch();

  const { routes, ratings, loading, error } = useSelector((state: RootState) => state.routes);

  const isLocation = useSelector((store: RootState) => store.location.isLocation);

  const routesIslocation = routes.filter((route) => route.locationId === +isLocation);

  // Состояние для отслеживания выбранного рейтинга
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  // Функция для обработки изменения рейтинга
  const handleRatingChange = (routeId: number, rating: number): void => {
    // Обновляем локальное состояние
    setSelectedRating(rating);


    // Отправляем действие (action) для установки рейтинга
    dispatch(setRatingFetch(routeId, rating));
  };

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
          <RouteCard key={route.id} route={route} />
        ))}
      </div>
    </div>
  );
}

export default RoutesPage;
