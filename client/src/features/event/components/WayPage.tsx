import React from 'react';
import { useSelector } from 'react-redux';
import store, { type RootState } from '../../../store/store';
import { Route } from '../../routes/type';

export default function WayPage({
  way,
  setModal,
}: {
  way: number;
  setModal: (status: boolean) => void;
}): JSX.Element {
  const routes = useSelector((store: RootState) => store.routes.routes);
  const { locations, isLocation } = useSelector((store: RootState) => store.location);

  let currentLocation: Route | undefined;
  if (locations) {
    currentLocation = routes.find((route) => route.locationId === isLocation);
  }

  const wayCur = currentLocation?.Ways.find((ways) => ways.id === +way);
  console.log(wayCur);

  return (
    <div>
      <div>
        <img src={wayCur?.path} alt={wayCur?.name} />
      </div>
      <div>
        <h1>{wayCur?.name}</h1>
      </div>
      <div>
        <p>{wayCur?.description}</p>
      </div>
      <button type="button" onClick={() => setModal(false)}>
        Закрыть
      </button>
    </div>
  );
}
