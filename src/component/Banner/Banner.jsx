import React from 'react';
import './Banner.css';
import bannerImage from '../../assets/old-brick.webp';

const Banner = () => {
  return (
    <section className="bg-[url('https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')] bg-cover bg-no-repeat h-[80vh] w-full px-4 lg:px-24  mt-[-50px] flex items-center">
      <div className="flex items-center h-full">
        <div className="text-white">
          <h2 className="text-4xl font-semibold">Why You Read My Post!?</h2>
          <div className="p-5">
            <p className="mt-5 font-bold px-5 leading-normal text-base sm:text-[50px] ">
              I explain and teach tech­nol­o­gy, solve tech prob­lems and help
              you make Error less decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
