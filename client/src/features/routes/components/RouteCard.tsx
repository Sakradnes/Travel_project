import React, { useMemo } from 'react';
import type { Route } from '../type';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import Map from './Map';

function RouteCard(): JSX.Element {
  const routes = useSelector((store: RootState) => store.routes.routes);

  const { id } = useParams();

  const route = useMemo((): Route | undefined => {
    return routes.find((t) => t.id === Number(id));
  }, [id, routes]);

  return (
    <div>
      <div>
        <h1>{route?.name}</h1>
      </div>
      <p>{route?.description}</p>
      <div>
        <Map route={route} />
      </div>
    </div>
  );
}

export default RouteCard;
