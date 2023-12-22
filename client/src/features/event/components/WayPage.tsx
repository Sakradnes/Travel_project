import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
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

  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="bg-white rounded p-4 max-w-screen-sm">
        <div>
          <img src={wayCur?.path} alt={wayCur?.name} className="w-full h-auto rounded" />
        </div>
        <div className="mt-4">
          <h1 className="text-xl font-semibold">{wayCur?.name}</h1>
        </div>
        <div className="mt-2">
          <p>{wayCur?.description}</p>
        </div>
        <button
          type="button"
          onClick={() => setModal(false)}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Закрыть
        </button>
      </div>
    </div>
  );
}
