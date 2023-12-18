import React from 'react';

export default function ModalEvent({
  setShowModal,
  event,
}: {
  setShowModal: () => void;
  event: any;
}): JSX.Element {
  return (
    <div>
      <div>
        <div>
          <img src={event.img} alt={event.name} />
        </div>
        <div>
          <h1>{event.name}</h1>
        </div>
        <p>{event.description}</p>
      </div>
      <div>
        <button type="button" onClick={() => setShowModal(false)}>закрыть</button>
      </div>
    </div>
  );
}
