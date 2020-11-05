import React, { useState, useEffect } from 'react';

import PostCard from '../../components/PostCard';

const PostsList = () => {
  
  const [postsArray, setPostsArray] = useState([]);
  
  useEffect( () => {
    fetch("https://my-pasteque-space.herokuapp.com/posts")
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
      response?.map( (post) => {
      setPostsArray(previousArray => [...previousArray, post] )
      })
    })
  },[]);

  return (
    <main>      
      <h1>Voici la liste des Posts</h1>
      <div className="container">
        <div className="row">
          { postsArray.map( (post) => (
            <div className="col-md-4">
              <PostCard
                username = { post.user.username }
                content = { post.text }
                date = { post.created_at }
              />
            </div>
            ))
          }
        </div>
      </div>
    </main>
  )
  
}

export default PostsList