import React from 'react';
import { Link } from 'react-router-dom';

export default function ModalEvent({
  setShowModal,
  event,
}: {
  setShowModal: (value: boolean) => void;
  event: any;
}): JSX.Element {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded flex">
        <div className="w-1/2 pr-4">
          <img src={event.img} alt={event.name} className="w-full rounded" />
        </div>
        <div className="flex flex-col w-1/2">
          <Link to={`/event/${event.id}`}>
            <h1 className="text-xl mb-2">{event.name}</h1>
          </Link>
          <p className="text-sm text-gray-700 mb-4">{`${event.description.slice(0, 100)}...`}</p>
          <button
            type="button"
            onClick={() => setShowModal(false)}
            className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
}
