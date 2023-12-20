import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store/store';
import { addEvents } from '../features/event/eventSlice';

export default function ModalAdd({ dateEvent }: { dateEvent: any }): JSX.Element {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState<File | null>(null);

  const dispatch = useAppDispatch();

  const isLocation = useSelector((store: RootState) => store.location.isLocation);
  console.log(isLocation);
  

  const eventAdd = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('date', dateEvent);
    formData.append('description', description);
    formData.append('locationId', isLocation.toString());
    if (url) {
      formData.append('img', url);
      dispatch(addEvents(formData));
    }
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files && event.target.files.length > 0) {
      setUrl(event.target.files[0]);
    }
  };

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
