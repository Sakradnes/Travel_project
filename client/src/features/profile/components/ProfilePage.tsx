import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { type RootState } from '../../../store/store';
import { PhotoAlbums } from '../../auth/type/authTypes';
import AddPhoto from './AddPhoto';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ProfilePage(): JSX.Element {
  const user = useSelector((state: RootState) => state.auth.user);
  const [showAddPhotoForm, setShowAddPhotoForm] = useState(false);
  const handleAddPhoto = () => {
    setShowAddPhotoForm(true); // устанавливаем состояние в true, чтобы показать форму
  };
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
        <img style={{ width: '200px' }} src={user?.avatar} alt={user?.name} />
        <h3>Name: {user?.name}</h3>
      </div>
      <div
        style={{
          backgroundColor: 'gray',
          width: '500px',
          border: '1px solid black',
          padding: '20px',
          borderRadius: '10px',
          marginLeft: '250px',
          marginBottom: '20px',
        }}
      >
        <Slider {...sliderSettings}>
          {user?.PhotoAlbums?.map((photo) => (
            <div key={photo.id}>
              <img
                style={{
                  width: '200px',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  marginBottom: '10px',
                }}
                src={photo.img}
                alt={photo.name}
                className="photo"
              />
              <p>{photo.name}</p>
            </div>
          ))}
        </Slider>
        <button style={{ marginTop: '30px' }} onClick={handleAddPhoto}>Добавить</button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>

        {showAddPhotoForm && <AddPhoto />}
      </div>
    </>
  );
}

export default ProfilePage;
