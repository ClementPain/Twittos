import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import FormProfile from '../../components/FormProfile'
import Cookies from 'js-cookie';

const Profile = () => {
  const currentUser = useSelector(state => state.userReducer.currentUser);

  const [userInformation, setUserInformation] = useState([]);
  
  useEffect( () => {
    fetch("https://my-pasteque-space.herokuapp.com/users/me", {
      method: 'get',
      headers: {
        'Authorization': `Bearer ${Cookies.get('authentificationToken')}`,
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
      setUserInformation(response)
    })
  },[]);

  return (
    <>
    <div className="container row justify-content-center">
      <div className="col-8" >
      <h1>Hello { userInformation.username }</h1>
      <p>E-mail : { userInformation.email }</p>
      <FormProfile />
      </div>
    </div>
    </>
  );
};

export default Profile;
