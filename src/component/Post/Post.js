import React from 'react';
import { useParams } from 'react-router-dom';
import article from '../data/post-content';
import Posts from '../Posts/Posts';

const Post = () => {
  const { name } = useParams();

  const post = article.find((post) => post.name === name);
  const relatedPosts = article.filter((post) => post.name == !name);

  // If not found any post name
  if (!post)
    return (
      <p>
        Sorry bro..! <br />
        Your search data keep sleeping, not wake up yet...!!
      </p>
    );
  return (
    <div className="mb-20 ">
      <img src={post.thumbnail} alt="" />
      <h3 className="sm:text-4xl text-2xl font-bold mt-6 mb-6 text-blue-600">
        {post.title}
      </h3>
      <p className="mx-auto leading-relaxed text-base mb-4">
        Author: <span className="font-semibold">{post.author}</span>
      </p>
      {post.postData.map((paragraph, index, thumbnail) => (
        <p className="mx-auto leading-relaxed text-base mb-4" key={index}>
          {paragraph}
        </p>
      ))}
      <h1 className="sm:text-2x text-xl font-bold mt-4 mb-4 text-gray-900">
        {' '}
        Related Post
      </h1>
      <div className="flex flex-wrap -m-4">
        <Posts posts={relatedPosts}></Posts>
        {/* <p>Hello</p> */}
      </div>
    </div>
  );
};

export default Post;
