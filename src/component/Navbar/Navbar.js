import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border-b-4 border-green-700 text-center fixed w-full top-0 bg-black font-bold text-lg text-white">
      <ul>
        <li className="inline-block pt-4 pb-4 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
          <Link to="/" className="pl-6 pr-8 ">
            Home
          </Link>
        </li>
        {/* <li className="inline-block pt-4 pb-4 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
          <Link to="/post" className="pl-6 pr-8">
            Post
          </Link>
        </li> */}
        <li className="inline-block pt-4 pb-4 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
          <Link to="/post-list" className="pl-6 pr-8">
            Post
          </Link>
        </li>
        <li className="inline-block pt-4 pb-4 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
          <Link to="/about" className="pl-6 pr-8">
            About Me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
