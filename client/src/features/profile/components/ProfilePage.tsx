import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { type RootState } from '../../../store/store';

function ProfilePage(): JSX.Element {
  // const [user, setUser] = useState({})
  // useEffect(() => {

  //   fetch('/api/profile')
  //     .then((res) => res.json())
  //     .then((data) =>
  //     setUser(data)
     
  //    );
  // }  ,[]);

  return (
    <>
      <div>
        <h3>{user?.name}</h3>
      </div>
      <div
        className="album"
        style={{ display: 'flex', justifyContent: 'space-around', border: '1px solid black' }}
      >
        {user["PhotoAlbums.img"] && 
          <img src={`${user["PhotoAlbums.img"]}`} />
        }
      </div>
    </>
  );
}

export default ProfilePage;
