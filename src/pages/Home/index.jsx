import React from 'react';
import { FormattedMessage } from 'react-intl' ;

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement} from '../../redux/counter/counterActions';
// import { fetchUserRequest, fetchUserSuccess, fetchUserFailure } from './../redux/user';

import PostCard from '../../components/PostCard';

const Home = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counterReducer);
  console.log(counter);

  return (
    <main>
      <FormattedMessage id='home.header' />
      <div className="posts">
        <PostCard title="hello" content="no way ! :D" />
      </div>
      <p>Counter {counter}</p>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(5))}>-</button>
      {/* <button onClick={() => clickFetch()} variant="success">Sign up</button> */}
    </main>
  )
}

export default Home;
