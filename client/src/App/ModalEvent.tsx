import React from 'react';

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
          <h1>{event.name}</h1>
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
