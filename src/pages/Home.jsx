import React from 'react';
import { FormattedMessage } from 'react-intl' ;

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement} from '../redux/counter/counterActions';
// import { fetchUserRequest, fetchUserSuccess, fetchUserFailure } from './../redux/user';

import Post from '../components/Post';

const Home = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counterReducer);
  console.log(counter);

  // const fetchState = useSelector(state => state);

  // const data = {
  //   username: "jean",
  //   email: "jean@pierre.paul",
  //   password: "12345678",
  // }

  // const fetchUser = () => {
  //   return (dispatch) => {
  //     dispatch(fetchUserRequest());
  //     fetch('http://Userapi.org/v2/everything?q=reactjs&sortBy=publishedAt&apiKey=...', {
  //       method: 'post',
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(data),
  //   })
  //       .then((response) => response.json())
  //       .then((response) => {
  //         if (response.status === 'error') {
  //           dispatch(fetchUserFailure(response.message));
  //         } else {
  //           dispatch(fetchUserSuccess(response.articles));
  //         }
  //       });
  //   };
  // };
  // const clickFetch = () => {
  //   dispatch(fetchUser());
  // };

  return (
    <main>
      <FormattedMessage id='home.header' />
      <div className="posts">
        <Post title="hello" content="no way ! :D" />
      </div>
      <p>Counter {counter}</p>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(5))}>-</button>
      {/* <button onClick={() => clickFetch()} variant="success">Sign up</button> */}
    </main>
  )
}

export default Home;
