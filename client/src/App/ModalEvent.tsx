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
    <div className="containerCalendar">
      <div>
        <div>
          <img src={event.img} alt={event.name} />
        </div>
        <div>
          <Link to={`/event/${event.id}`}>
            <h1>{event.name}</h1>
          </Link>
        </div>
        <p className="textCalendar">{`${event.description.slice(0, 100)}...`}</p>
      </div>
      <div>
        <button type="button" onClick={() => setShowModal(false)}>
          закрыть
        </button>
      </div>
    </div>
  );
}
