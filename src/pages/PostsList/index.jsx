import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
 
import Moment from 'moment';

import PostCard from '../../components/PostCard';

const PostsList = () => {
  const [postsArray, setPostsArray] = useState([]);  

  useEffect( () => {
    fetch("https://my-pasteque-space.herokuapp.com/posts")
    .then((response) => response.json())
    .then((response) => {
      response?.map( post => {
        if ( post.user?.username && post.text ) { setPostsArray(previousArray => [post, ...previousArray] ) };
      })
    })
  },[]);
  
  return (
    <main>
      <div className="row mb-5">
        <div className="col-md-8 text-center">
          <h1>Voici la liste des Posts</h1>
        </div>
        <div className="col-md-4 text-center">
          <Link to="/createpost" className="btn btn-success">Create a post</Link>
        </div>
      </div> 
      <div className="container">
        <div className="row">
          { postsArray.map( (post) => (
            <div className="col-md-4">
              <PostCard
                username = { post.user.username }
                content = { post.text }
                date = { Moment(Date(post.created_at)).format('DD-MM-YYYY') }
                likes = { post.like }
                postId = { post.id }
              />
            </div>
            ))
          }
        </div>
      </div>
    </main>
  )
  
}

export default PostsList;
