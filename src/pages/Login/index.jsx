import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  { fetchUserRequest, fetchUserSuccess, fetchUserFailure } from '../../redux/user/userActions';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router-dom';

const Login = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [redirection, setRedirection]= useState(false)
  const dispatch = useDispatch();


  const data = {
    identifier: identifier,
    password: password
  }

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    
    dispatch(fetchUserRequest());

    fetch("https://my-pasteque-space.herokuapp.com/auth/local", {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json"
      },
      "body": JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      if (response.statusCode === "400") {
        dispatch(fetchUserFailure(response.message));
      } else {
        dispatch(fetchUserSuccess(response.user.username));
        Cookies.set('authentificationToken', response.jwt);
        setRedirection(true)
      }
    })
  }

  return (
  <>
  {redirection && <Redirect to='/'/>}
  <form onSubmit={handleSubmitLogin}>
    <fieldset>
      <h1>LOGIN</h1>
      <label>
        Identifier:
        <input
          type="text"
          value={identifier}
          onChange={e => setIdentifier(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="text"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </fieldset>
  </form>
  </>
  )
}

export default Login;
