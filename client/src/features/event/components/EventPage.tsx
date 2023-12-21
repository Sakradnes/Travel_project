import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { type RootState } from '../../../store/store';
import { Event } from '../type/eventType';

export default function EventPage(): JSX.Element {
  const events = useSelector((store: RootState) => store.event.events);

  const { id } = useParams();

  let event: Event | undefined;
  if (id) {
    event = events.find((event) => event.id === +id);
  }

  return (
    <div>
      <div>
        <img src={event?.img} alt={event?.name} />
      </div>
    </div>
  );
}
