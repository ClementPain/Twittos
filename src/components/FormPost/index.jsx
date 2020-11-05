import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';

const FormPost = () => {
  const [content, setContent] = useState("");
  const currentUser = useSelector(store => store.userReducer.currentUser);
  const history = useHistory();

  const data = {
    text: content,
    user: currentUser.id
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://my-pasteque-space.herokuapp.com/posts", {
      method: "post",
      headers: {
        'Authorization': `Bearer ${Cookies.get('authentificationToken')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then( () => {
      history.push('/postslist');
    })
  };

  return (
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label>Create your post !</label>
      <textarea
        className="form-control"
        id="postContent"
        rows="5"
        placeholder="Enter what you want to say"
        onChange={ e => setContent(e.target.value) }  
      >
      </textarea>
    </div>
    <input type="submit" value="Submit" />
  </form>
  )
}

export default FormPost;
