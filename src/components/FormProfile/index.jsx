import React, { useState } from 'react';
import Cookies from 'js-cookie';


const FormProfile = ( {userId} ) => {

  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");

  const data = {
  "username": username,
  "description": description
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
        console.log(response)
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