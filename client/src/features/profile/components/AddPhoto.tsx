/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

import React, { useRef } from 'react';
import { useAppDispatch } from '../../../store/store';
import { addPhotoAlbum } from '../../auth/authSlice';

function AddPhoto({ closeModal }: { closeModal: () => void }): JSX.Element {
  const nameInput = useRef<HTMLInputElement>(null);
  const urlInput = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();

  const animalAdd = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const name = nameInput.current?.value;
    const url = urlInput.current?.files;

    const formData = new FormData();

    for (const key in url) {
      formData.append('url', url[key]);
    }
    formData.append('name', name);

    dispatch(addPhotoAlbum(formData));
    closeModal();
  };

  return (
    <form
      onSubmit={animalAdd}
      style={{ display: 'flex', flexDirection: 'column', border: '1px solid black' }}
    >
      <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '20px', color:"white" }}>Название фото:</p>
      <input type="text" name="name" placeholder="Название фото" ref={nameInput} />
      <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '20px', color:"white" }}>Фото:</p>
      <input type="file" name="url" placeholder="img" multiple ref={urlInput} />
      <button style={{color:"white"}} type="submit">Добавить</button>
    </form>
  );
}

export default AddPhoto;
