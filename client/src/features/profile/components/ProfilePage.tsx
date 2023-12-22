import React, { useState } from 'react';
import Modal from 'react-modal';
import Slider from 'react-slick';
import { useSelector } from 'react-redux';
import { useAppDispatch, type RootState } from '../../../store/store';
import AddPhoto from './AddPhoto';
import { deletePhotoAlbum } from '../../auth/authSlice';
import btnDel from '../../../../public/icons8-отмена.svg';
import EditUserForm from './editUserForm';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ProfilePage(): JSX.Element {
  const user = useSelector((state: RootState) => state.auth.user);
  const [viewModal, setViewModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const openModal = (): void => {
    setViewModal(true);
  };

  const openEditModal = (): void => {
    setEditModal(true);
  };

  const closeModalEdit = (): void => {
    setEditModal(false);
  };

  const closeModal = (): void => {
    setViewModal(false);
  };

  const dispatch = useAppDispatch();

  const handleRemovePhoto = (photoId: number): void => {
    dispatch(deletePhotoAlbum(photoId));
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const customStyles: Modal.Styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(30 27 27 / 77%)',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#242424',
      width: '80%',
    },
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          marginTop: '20px',
          width: '300px',
          border: '1px solid black',
          padding: '20px',
          borderRadius: '10px',
          marginLeft: '20px',
          marginBottom: '20px',
        }}
      >
        <img
          style={{ width: '200px', borderRadius: '50%', overflow: 'hidden' }}
          src={user?.avatar}
          alt={user?.name}
        />
        <h3>Имя пользователя: {user?.name}</h3>
        <h3>Email: {user?.email}</h3>
        <button onClick={openEditModal} type="button">
          Редактировать
        </button>
      </div>
      <div
        className="albom1"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: '280px',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          height: '80px', // Вы можете настроить высоту в соответствии с вашими потребностями
        }}
      >
        <p>Альбом</p>
      </div>
      <div
        className="slider-container"
        style={{
          width: '80%',
          marginLeft: '20px',
          border: '2px solid black',
          borderRadius: '10px',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
        }}
      >
        <Slider {...sliderSettings}>
          {user?.PhotoAlbums?.map((photo) => (
            <div
              key={photo.id}
              className="imgPage flex flex-col items-center justify-center w-300" // Добавлен класс w-300 для установки ширины 300px
            >
              <img
                style={{ width: '200px', marginBottom: '10px' }}
                src={photo.img}
                alt={photo.name}
              />
              <p>{photo.name}</p>

              <img
                style={{ width: '20px' }}
                src={btnDel}
                alt=""
                onClick={() => handleRemovePhoto(photo.id)}
              />
            </div>
          ))}
        </Slider>
        <button
  type="button"
  style={{
    marginTop: '30px',
    padding: '10px 20px', // Увеличиваем отступы для более выразительного вида
    fontSize: '16px', // Увеличиваем размер шрифта
    backgroundColor: 'black', // Цвет фона кнопки
    color: 'white', // Цвет текста кнопки
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Добавляем тень
  }}
  onClick={openModal}
>
  Добавить
</button>
      </div>

      <Modal
        isOpen={viewModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <AddPhoto closeModal={closeModal} />
      </Modal>

      <Modal
        isOpen={editModal}
        onRequestClose={closeModalEdit}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <EditUserForm closeModalEdit={closeModalEdit} user={user} />
      </Modal>
    </>
  );
}

export default ProfilePage;
