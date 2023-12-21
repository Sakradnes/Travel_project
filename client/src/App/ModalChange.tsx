import React, { useState } from 'react';
import type { Event } from '../features/event/type/eventType';
import { changeEvents } from '../features/event/eventSlice';
import { useAppDispatch } from '../store/store';

export default function ModalChange({
  event,
  setEvent,
  dateEvent,
  setViewForm,
}: {
  event: Event;
  dateEvent: any;
  setEvent: (event: Event) => void;
  setViewForm: (status: 'ADD' | 'Change' | 'Delete' | undefined) => void;
}): JSX.Element {
  const [name, setName] = useState(event.name);
  const [description, setDescription] = useState(event.description);
  const [date, setDate] = useState(event.date);
  const [url, setUrl] = useState<File | null>(null);
  const dispatch = useAppDispatch();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files && e.target.files.length > 0) {
      setUrl(e.target.files[0]);
    }
  };

  const eventChange = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData();
    if (url === null && name && date && description) {
      formData.append('name', name);
      formData.append('date', dateEvent);
      formData.append('description', description);
      formData.append('id', event.id.toString());
      dispatch(changeEvents(formData));
      setEvent({
        locationId: event.locationId,
        id: event.id,
        name,
        date,
        description,
        img: event.img,
      });
      setViewForm(undefined);
    } else if (url && name && date && description) {
      formData.append('img', url);
      formData.append('name', name);
      formData.append('date', dateEvent);
      formData.append('description', description);
      formData.append('id', event.id.toString());
      setEvent({
        locationId: event.locationId,
        id: event.id,
        name,
        date,
        description,
        img: `/img/${url.name}`,
      });
      dispatch(changeEvents(formData));
      setViewForm(undefined);
    }
  };

  return (
    <div className="container border border-sky-500 max-h-80 w-80">
      <div className="flex flex-col">
        <form className="flex flex-col" onSubmit={eventChange}>
          <p>Название:</p>
          <input
            name="name"
            type="text"
            className=" border-2 border-slate-700"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p>Выберете дату в календаре:</p>
          <input
            name="date"
            type="text"
            className="border-slate-700"
            placeholder={date}
            value={dateEvent}
            onChange={(e) => setDate(e.target.value)}
          />
          <p>Описание:</p>
          <textarea
            name="description"
            className="border-slate-700"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <p>Выбирете картинку:</p>
          <input name="img" type="file" className="border-slate-700" onChange={handleFileChange} />
          <button
            type="submit"
            className="border border-slate-300 hover:border-slate-400"
            style={{ marginTop: '10px' }}
          >
            Изменить
          </button>
        </form>
      </div>
    </div>
  );
}
