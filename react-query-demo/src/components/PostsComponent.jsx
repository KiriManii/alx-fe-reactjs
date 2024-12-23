import React from 'react';
import { useQuery } from 'react-query';

// Function to fetch posts data from the API
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  // Using the useQuery hook to fetch posts with added staleTime and keepPreviousData options
  const { data, isLoading, isError, error, refetch } = useQuery('posts', fetchPosts, {
    cacheTime: 1000 * 60 * 5,  // Cache data for 5 minutes
    refetchOnWindowFocus: false,  // Do not refetch when window is focused
    staleTime: 1000 * 60 * 2,  // Mark data as fresh for 2 minutes
    keepPreviousData: true,  // Keep previous data while fetching new data
  });

  // Show loading state
  if (isLoading) return <div>Loading...</div>;

  // Show error if there is an error
  if (isError) return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      <h2>Posts</h2>
      {/* Button to manually refetch posts */}
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {/* Display posts */}
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
