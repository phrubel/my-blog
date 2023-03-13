import React from 'react';
import PostList from '../PostList/PostList';

const Home = () => {
  return (
    <>
      <div className="mb-20 font-serif">
        <h1 className="sm:text-4xl text-2xl font-bold mt-6 mb-6 text-blue-600">
          Hello, Welcome to my Blog.!
        </h1>

        <PostList />
      </div>
    </>
  );
};

export default Home;
