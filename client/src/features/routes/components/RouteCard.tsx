import React, { useMemo } from 'react';
import type { Route } from '../type';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import Map from './Map';
import StarRating from './Rating';

function RouteCard({ route }: { route: Route }): JSX.Element {
  console.log(route);

  const middleRating = (): number => {
    const sum = route.Ratings.reduce((acc, rating) => acc + rating.rating, 0);
    return Math.round(sum / route.Ratings.length);
  };

  return (
    <div key={route.id}>
      <img
        src={route.img}
        alt="..."
        className="rounded-full mx-auto mb-2"
        style={{ width: '300px', height: '300px', objectFit: 'cover' }}
      />

      <Link to={`/routes/${route.id}`}>
        <h2 className="text-xl font-bold mb-2">{route.name}</h2>
      </Link>
      <p>{route.description}</p>
      <StarRating rating={middleRating()} />
    </div>
  );
}

export default RouteCard;
