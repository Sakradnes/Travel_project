import React from 'react';

export default function ModalAdd(): JSX.Element {
  return (
    <div className="container border border-sky-500 max-h-80 w-80">
      <div className="flex flex-col">
        <form className="flex flex-col">
          <p>Название:</p>
          <input name="name" type="text" className=" border-2 border-slate-700" />
          <p>Выберете дату в календаре:</p>
          <input name="date" type="text" className="border-slate-700" />
          <p>Описание:</p>
          <textarea name="description" className="border-slate-700" />
          <p>Выбирете картинку:</p>
          <input name="img" type="file" className="border-slate-700" />
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
