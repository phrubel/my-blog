import React from 'react';
import postData from '../data/post-content';
import Posts from '../Posts/Posts';

const PostList = () => {
  return (
    <div className="mb-20 ">
      <h1 className="sm:text-4xl text-2xl font-bold mt-6 mb-6 text-blue-600">
        {/* Hello, This is all Post! */}
      </h1>
      <div className="container py-4 mx-auto ">
        <div className="flex flex-wrap -m-4">
          <Posts otherPosts={postData}></Posts>
        </div>
      </div>
    </div>
  );
};

export default PostList;
