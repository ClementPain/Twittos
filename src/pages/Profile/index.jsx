import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const currentUser = useSelector(state => state.userReducer.currentUser);

  return (
    <h1>Hello { currentUser }</h1>
  );
};

export default Profile;
