import React, { useState } from 'react';
import { Event } from '../features/event/type/eventType';

export default function ModalChange({ event }: { event: Event }): JSX.Element {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState<File | null>(null);

  return (
    <div className="container border border-sky-500 max-h-80 w-80">
      <div className="flex flex-col">
        <form className="flex flex-col" onSubmit={eventAdd}>
          <p>Название:</p>
          <input
            name="name"
            type="text"
            className=" border-2 border-slate-700"
            onChange={(e) => setName(e.target.value)}
          />
          <p>Выберете дату в календаре:</p>
          <input name="date" type="text" className="border-slate-700" value={dateEvent} />
          <p>Описание:</p>
          <textarea
            name="description"
            className="border-slate-700"
            onChange={(e) => setDescription(e.target.value)}
          />
          <p>Выбирете картинку:</p>
          <input name="img" type="file" className="border-slate-700" onChange={handleFileChange} />
          <button
            type="submit"
            className="border border-slate-300 hover:border-slate-400"
            style={{ marginTop: '10px' }}
          >
            Добавить
          </button>
        </form>
      </div>
    </div>
  );
}
