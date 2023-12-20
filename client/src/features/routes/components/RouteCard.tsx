import React from 'react';
import { Link } from 'react-router-dom';
import type { Route } from '../type';

function RouteCard({ routes }: { routes: Route }): JSX.Element {
  return (
    <div>
      <Link to={`/routes/${routes.id}`}>{routes.name}</Link>
      <h1>{routes.description}</h1>
    </div>
  );
}

export default RouteCard;
