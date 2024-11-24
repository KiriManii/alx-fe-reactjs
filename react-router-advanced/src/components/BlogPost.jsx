import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams(); // Access the dynamic id from the URL
  
  return (
    <div>
      <h1>Blog Post {id}</h1>
      {/* You can fetch the post details using this id */}
      <p>Details for post {id} will be displayed here...</p>
    </div>
  );
};

export default BlogPost;
