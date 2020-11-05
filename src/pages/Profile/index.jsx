import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const currentUser = useSelector(state => state.userReducer.currentUser);

  return (
    <main>
      <h1>Hello { currentUser }</h1>
      
    </main>
  );
};

export default Profile;
