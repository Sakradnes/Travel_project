import React, { useState } from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import { useAppDispatch, type RootState } from '../../../store/store';
import AddPhoto from './AddPhoto';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { deletePhotoAlbum } from '../../auth/authSlice';
import btnDel from '../../../../public/icons8-отмена.svg';
import EditUserForm from './editUserForm';

function ProfilePage(): JSX.Element {
  const user = useSelector((state: RootState) => state.auth.user);
  const [viewModal, setViewModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const openModal = (): void => {
    setViewModal(true);
  };

  const openEditModal = (): void => {
    setEditModal(true);
  }

  const closeModalEdit = (): void => {
    setEditModal(false);
  }

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
    slidesToShow: 1,
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
      width: '30%',
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
        <img style={{ width: '200px', borderRadius: '50%', overflow: 'hidden' }} src={user?.avatar} alt={user?.name} />
        <h3>Имя пользователя: {user?.name}</h3>
        <button onClick={openEditModal} type="button">Редактировать</button>
      </div>
      <div style={{ width: '300px', marginLeft: '20px' }}>
        <Slider {...sliderSettings}>
          {user?.PhotoAlbums?.map((photo) => (
            <div
              key={photo.id}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <img style={{ width: '200px' }} src={photo.img} alt={photo.name} />
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
      </div>
      <button type="button" style={{ marginTop: '30px' }} onClick={openModal}>
        Добавить
      </button>

      <Modal
        isOpen={viewModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <AddPhoto closeModal={closeModal} />
      </Modal>

      <Modal isOpen={editModal} onRequestClose={closeModalEdit} style={customStyles} contentLabel="Example Modal">
        <EditUserForm closeModalEdit={closeModalEdit} user={user} />
      </Modal>
    </>
  );
}

export default ProfilePage;
