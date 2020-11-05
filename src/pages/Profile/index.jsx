import React, { useState, useEffect } from 'react';
import FormProfile from '../../components/FormProfile'
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';

const Profile = () => {
  const [userInformation, setUserInformation] = useState([]);
  
  const currentUser = useSelector(store => store.userReducer.currentUser);
  console.log(currentUser)
  useEffect( () => {

    fetch(`https://my-pasteque-space.herokuapp.com/users/${userInformation.id}`, {
      method: 'get',
      headers: {
      'Authorization': `Bearer '${Cookies.get('authentificationToken')}'`,
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
    <div className="row m-3">
      <div className="col-md-6 justify-content-start" >
        <h1>Hello { userInformation.username }</h1>
        <p>E-mail : { userInformation.email }</p>
        <p>Description : { userInformation.description }</p>
      </div>
      <div className="col-md-6 justify-content-center">
        { currentUser.id === userInformation.id && (
        <div>
          <h3>Update your profile</h3>
          <FormProfile userId={userInformation.id}/>
        </div>
        )
        }
      </div>
    </div>
  );
};

export default Profile;
