import React, { useRef } from 'react';
import { useAppDispatch } from '../../../store/store';
import type { User } from '../../auth/type/authTypes';
import { editUserProfile } from '../../auth/authSlice';

function EditUserForm({
  user,
  closeModalEdit,
}: {
  user: User | undefined;
  closeModalEdit: () => void;
}): JSX.Element {
  const dispatch = useAppDispatch();
  const nameInput = useRef<HTMLInputElement>(null);
  const urlInput = useRef<HTMLInputElement>(null);

  const editUser = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const name = nameInput.current?.value;
    const avatar = urlInput.current?.files![0];

    if (!name) {
      alert('Пожалуйста, введите имя пользователя.');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('id', String(user?.id));

    if (avatar) {
      formData.append('avatar', avatar);
    }

    // Добавьте действия Redux или API-вызов для обновления данных пользователя
    dispatch(editUserProfile(formData));

    closeModalEdit();
  };

  return (
    <form onSubmit={editUser}>
      <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '20px', color: 'white' }}>
        Изменить имя пользователя
      </p>
      <input type="text" placeholder="Имя" defaultValue={user?.name} ref={nameInput} />
      <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '20px', color: 'white' }}>
        Изменить аватар
      </p>
      <input type="file" placeholder="Аватар" ref={urlInput} />
      <button style={{ color: 'white' }} type="submit">
        Изменить
      </button>
    </form>
  );
}

export default EditUserForm;
