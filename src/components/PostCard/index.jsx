import React, { useState } from 'react';
import Cookies from 'js-cookie';

const PostCard = ({ username, content, date, likes, postId, setPostsArray, postsArray, post }) => {
  const likePost = (e) => {
    let dataLikes = {
      like: likes + parseInt(e.target.value)
    };

    e.preventDefault();
    fetch(`https://my-pasteque-space.herokuapp.com/posts/${postId}`, {
      method: "put",
      headers: {
        'Authorization': `Bearer ${Cookies.get('authentificationToken')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataLikes)
    })
    .then(response => response.json())
    .then( () => {
    })
  };

  return (
  <div className="card border-primary mb-3" key={content}>
    <div className="card-header"> { username }</div>
    <div className="card-body">
      <h4 className="card-title">{ content }</h4>
      <div className="row">
        <div className="col-md-6">
          <p className="card-text">{ date }</p>
        </div>
        <div className="col-md-6 justify-content-end">
          <p className="card-text">Likes : { likes }</p>
          <button onClick={likePost} value='1' className="btn btn-success">Like</button>
          <button onClick={likePost} value='-1' className="btn btn-danger">Unlike</button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default PostCard;
