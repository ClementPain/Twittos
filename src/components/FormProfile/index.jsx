import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';

const FormProfile = ( {userId, setUserInformation} ) => {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");

  let newUsername = "";
  let newDescription = "";
  const currentUser = useSelector(store => store.userReducer.currentUser.username);
  const currentDescription = useSelector(store => store.userReducer.description);
  if(username) { newUsername = username } else { newUsername = currentUser };
  if(username) { newDescription = description } else { newDescription = currentDescription };

  const data = {
    username: newUsername,
    description: newDescription
  }

  const handleSubmit = (e) => {
    e.preventDefault();
      fetch(`https://my-pasteque-space.herokuapp.com/users/${userId}`, {
        method: 'put',
        headers: {
          'Authorization': `Bearer ${Cookies.get('authentificationToken')}`,
          'Content-Type': 'application/json'
        },
        "body": JSON.stringify(data)
      })
      .then((response) => response.json())
      .then((response) => {
        setUserInformation(response)
      })
  }

  return (
    <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label>Pseudo</label>
      <input
        type="text"
        className="form-control"
        id="pseudo"
        placeholder="Enter Pseudo"
        onChange={ e => setUsername(e.target.value) }          
      />    
    </div>
    <div className="form-group">
      <label>Description</label>
      <textarea
        className="form-control"
        id="profileDescription"
        rows="5"
        placeholder="Enter your description here"
        onChange={ e => setDescription(e.target.value) }  
      > 
      </textarea>
    </div>
    <input type="submit" value="Submit" />
    </form>
  )
}


export default FormProfile