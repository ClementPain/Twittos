import React, { useState, useEffect } from 'react';


const PostsList = () => {
  
  const [postsArray, setPostsArray] = useState([]);
  
  useEffect( () => {
    fetch("https://my-pasteque-space.herokuapp.com/posts")
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
      response.map( (post) => {
      setPostsArray(previousArray => [...previousArray, post] )
      })  
      console.log(postsArray)
    })
  },[])


  return (
    <main>
    <h1>Voici la liste des Posts</h1>
    { postsArray.map( (post) => (
      <p>
        {post.text}
      </p>   
      ))
    }
    </main>
  )
  
}

export default PostsList