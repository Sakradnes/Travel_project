import React, { useState } from 'react';
import { useAppDispatch } from '../../../store/store';
import { addPhotoAlbum } from '../../auth/authSlice';


function AddPhoto(): JSX.Element {
  const [name, setName] = useState('');
  const [img, setImg] = useState('');

  const dispatch = useAppDispatch();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    dispatch(addPhotoAlbum({ name, img }));
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', border: '1px solid black' }}>
      <p>Name</p>
      <input type="text" name="name" placeholder="name" onChange={(e) => setName(e.target.value)} />
      <p>Img</p>
      <input type="img" name="img" placeholder="img" onChange={(e) => setImg(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddPhoto;
