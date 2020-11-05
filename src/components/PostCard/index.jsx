import React from 'react';

const PostCard = ({ username, content, date }) => {
  return (
  <div className="card border-primary mb-3">
    <div className="card-header"> { username }</div>
    <div className="card-body">
      <h4 className="card-title">{ content }</h4>
      <p className="card-text">{ date }</p>
    </div>
  </div>
  );
};

export default PostCard;
