import React from 'react';
import { RootState } from '../../../store/store';
import { useSelector } from 'react-redux';

const ProfilePage = (): JSX.Element => {
  const user = useSelector((store: RootState) => store.auth.user);

  return (
    <div>
      <h3>{user?.name}</h3>
    </div>
  );
};

export default ProfilePage;
