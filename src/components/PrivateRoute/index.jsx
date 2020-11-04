import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {

  const currentUser = useSelector(state => state.userReducer.currentUser);
  console.log(currentUser)

  const isLoggedIn = () => (currentUser) ? true : false ;

  return (
    <Route {...rest} render={props => (
    isLoggedIn() ?
      <Component {...props} /> :
      <Redirect to='/login' />
    )}/>
  )
}

export default PrivateRoute