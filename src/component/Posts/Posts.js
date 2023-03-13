import React from 'react';
import { Link } from 'react-router-dom';

const Posts = ({ otherPosts }) => {
  return (
    <div>
      {otherPosts?.map((post, index) => (
        <div key={index} className="p-4 md:w-1/2">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <Link to={`/post/${post.name}`}>
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center "
                src={post.thumbnail}
                alt="postImage"
              />
            </Link>
            <div className="p-6">
              <Link to={`/post/${post.name}`}>
                <h3 className="title-font text-xl font-serif font-semibold text-gray-900 mb-3">
                  {post.title}
                </h3>
              </Link>
              {/* Substring use for some word show in post */}
              <p className="leading-relaxed mb-3 font-serif ">
                {post.postData[0].substring(0, 120)}.....
              </p>
              <div className="flex  item-center flx-wrap font-serif">
                <Link
                  className="text-indigo-500 inline-flex item-center md:mb-2 lg:mb-0"
                  to={`/post/${post.name}`}
                >
                  {' '}
                  Read More...
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
