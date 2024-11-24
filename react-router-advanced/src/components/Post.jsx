import React from 'react';
import { useParams } from 'react-router-dom';

function Post() {
  const { id } = useParams();
  return (
    <div>
      <h2>Post {id}</h2>
      <p>This is a post with ID: {id}</p>
    </div>
  );
}

export default Post;
