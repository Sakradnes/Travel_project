import React from 'react';
import { Event } from '../features/event/type/eventType';
import { useAppDispatch } from '../store/store';
import { deleteEvent } from '../features/event/eventSlice';

export default function ModalDelete({
  event,
  setViewForm,
  setShowModal,
}: {
  event: Event;
  setViewForm: (status: 'ADD' | 'Change' | 'Delete' | undefined) => void;
  setShowModal: (status: boolean) => void;
}): JSX.Element {
  const dispatch = useAppDispatch();

  const delEvent = (id: Event['id']): void => {
    dispatch(deleteEvent(id));
    setShowModal(false);
    setViewForm(undefined);
  };

  return (
    <div className="container border border-sky-500 max-h-80 w-80">
      <div className="flex flex-col">
        <p>Удалить данное мероприятие:{`${event.name}`}</p>
        <button type="button" onClick={() => delEvent(event.id)}>
          Да
        </button>
        <button type="button" onClick={() => setViewForm(undefined)}>
          Нет
        </button>
      </div>
    </div>
  );
}
