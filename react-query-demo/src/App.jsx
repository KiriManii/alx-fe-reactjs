import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './components/PostsComponent';

// Create a new instance of QueryClient
const queryClient = new QueryClient();

function App() {
  return (
    // Wrap your entire app with QueryClientProvider to use React Query
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>React Query Demo</h1>
        {/* Your posts component will go here */}
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;
