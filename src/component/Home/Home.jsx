import React from 'react';
import Banner from '../Banner/Banner';
import PostList from '../PostList/PostList';

const Home = () => {
  return (
    <>
      <div className="mb-20 font-serif bg-slate-200 dark:bg-slate-700">
        {/* <h1 className="sm:text-4xl text-2xl font-bold mt-6 mb-6 text-blue-600">
          Hello, Welcome to my Blog.!
        </h1>
      </div>  */}
        <Banner />
        <div className="px-5 sm:px-0">
          <h1 className=" text-4xl sm:text-[50px] mt-16  text-center  font-bold  mb-6 text-blue-600">
            Popular Post.!
          </h1>
          <PostList />
        </div>
      </div>
    </>
  );
};

export default Home;
