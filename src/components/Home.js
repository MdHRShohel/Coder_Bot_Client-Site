import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <div>
        <div className="relative w-full h-full flex flex-col justify-center items-center bg-gray-50 overflow-hidden">
          <div className="pt-10 sm:pt-20 lg:pt-40 w-full flex flex-col lg:flex-row">
            {/* :HERO MAIN */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-gray-600">
              {" "}
              {/* Container */}
              {/* ::Hero Inner */}
              <div className="p-5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                {/* Hero Title */}
                <h1 className="py-10 text-3xl sm:text-5xl font-bold tracking-wide leading-tight">
                  Develop Coding skills.
                  <br /> And transform your goals into gains.
                  <br />Happy Coding!
                </h1>
               
                {/* Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row items-center">
                  <Link to={"/courses"}>
                    <button className="m-1.5 py-2.5 px-5 rounded-md bg-teal-300 text-white font-semibold uppercase hover:bg-teal-400">
                      Lets Go to Courses
                    </button>
                  </Link>
                  <Link to={"/blog"}>
                    <button className="m-1.5 py-2.5 px-5 rounded-md border-2 border-gray-300 text-gray-400 font-semibold uppercase hover:text-teal-400 hover:border-teal-400">
                      See Our Blogs
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* :HERO ILLUSTRATION */}
            <div className="relative w-full lg:w-1/2 flex flex-col justify-center items-center overflow-hidden">
              <img
                src="https://fancytailwind.com/static/8b86283c874a1f43a78c79fe871525ff/d552e/illustration1.webp"
                alt=""
                className="w-2/3 lg:w-full"
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Home;