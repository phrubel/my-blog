// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="border-b-4 border-green-700 text-center fixed w-full top-0 bg-black font-bold text-lg text-white">
//       <ul>
//         <li className="inline-block pt-4 pb-4 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
//           <Link to="/" className="pl-6 pr-8 ">
//             Home
//           </Link>
//         </li>

//         <li className="inline-block pt-4 pb-4 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
//           <Link to="/post-list" className="pl-6 pr-8">
//             Post
//           </Link>
//         </li>
//         <li className="inline-block pt-4 pb-4 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
//           <Link to="/about" className="pl-6 pr-8">
//             About Me
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import DarkToggle from './DarkToggle';
import navStyle from './navbar.module.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [hide, setHide] = useState(false);
  const [color, setColor] = useState(false);

  if (typeof window !== `undefined`) {
    let prevScrollPosition = window.pageYOffset;
    window.addEventListener('scroll', () => {
      const curScrollPosition = window.pageYOffset;
      const difference = prevScrollPosition - curScrollPosition;
      if (curScrollPosition > 100) {
        setColor(true);
      } else {
        setColor(false);
      }
      if (difference < 0) {
        setHide(true);
      } else {
        setHide(false);
      }
      prevScrollPosition = curScrollPosition;
    });
  }

  const scrollToTop = (param) => {
    setOpen(param);
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`fixed max-w-screen-xl w-full max-md:bg-blue  lg  duration-500  bg-green-300 ${
        hide ? 'lg:-translate-y-20' : 'lg:translate-y-0'
      } ${color && 'lg:backdrop-blur-sm'} z-20`}
    >
      <div className="md:flex w-full items-center justify-between   md:px-10 px-7">
        <div className="flex justify-between items-center z-10">
          <div
            onClick={() => scrollToTop(false)}
            className="font-bold text-2xl cursor-pointer text-orange z-10"
          >
            <Link to={'/'}>
              {/* <img className='w-48 h-10' src={logo} alt="" /> */}
              <h3 className="text-base font-bold">Parvez Hasan Rubel</h3>
            </Link>
          </div>
          <div>
            {!open ? (
              <div
                onClick={() => setOpen(true)}
                className="text-3xl text-black cursor-pointer md:hidden flex justify-center items-center"
              >
                <AiOutlineMenu />
              </div>
            ) : (
              <div
                onClick={() => setOpen(false)}
                className="text-3xl text-black cursor-pointer md:hidden flex justify-center items-center"
              >
                <MdClose />
              </div>
            )}
          </div>
        </div>
        <ul
          className={`md:flex items-center md:items-center d:pb-0 lg:gap-5 pb-5 md:static z-10  w-full  md:w-auto md:pl-0  duration-700 ease-in left-0 ${
            !open ? 'hidden' : 'top-20'
          } `}
        >
          <li
            onClick={() => scrollToTop(false)}
            className={`${navStyle.link} md:ml-8 md:my-0 my-5 text-base lg:text-md md: text-white z-10 font-bold hover:-translate-y-1 duration-200`}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            onClick={() => scrollToTop(false)}
            className={`${navStyle.link} md:ml-8 md:my-0 my-5 text-base lg:text-md md: text-black z-10 font-bold hover:-translate-y-1 duration-200`}
          >
            <Link to="/post-list">All Post</Link>
          </li>

          <li
            onClick={() => scrollToTop(false)}
            className={`${navStyle.link} md:ml-8 md:my-0 my-5 text-base lg:text-md md: text-black z-10 font-GothamBook hover:-translate-y-1 duration-200`}
          >
            <Link to="/about">About</Link>
          </li>
          <li
            onClick={() => scrollToTop(false)}
            className={`${navStyle.link} md:ml-8 md:my-0 my-5 text-base lg:text-md md: text-black z-10 font-GothamBook hover:-translate-y-1 duration-200`}
          >
            <Link to="/contact">Contact</Link>
          </li>
          <li className="lg:ml-15 md:ml-5 z-10 text-black">
            <DarkToggle />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
