import React, { useContext } from "react";
import logo from "../assets/logo.ico";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Avatar } from "flowbite-react";
import { FaUserAlt } from "react-icons/fa";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";

const Header = () => {
    const [navbar, setNavbar] = useState(false);

    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut().then(() => {
            console.log("User Logged Out");
        });
    };

  return (
    <nav className="w-full bg-teal-400 shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <nav>
              <Link className="flex gap-3" to="/">
                <img src={logo} alt="logo" className="w-10 h-10" />
                <h2 className="text-2xl font-bold text-white">CODER BOT</h2>
              </Link>
            </nav>

            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-white hover:text-indigo-200">
                <Link to="/">Home</Link>
              </li>
              <li className="text-white hover:text-indigo-200">
                <Link to="/courses">Courses</Link>
              </li>
              <li className="text-white hover:text-indigo-200">
                <Link to="/faq">FAQ</Link>
              </li>
              <li className="text-white hover:text-indigo-200">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="text-white text-xl  hover:text-indigo-200">
                <label
                  htmlFor="default-toggle"
                  className="mt-2 inline-flex relative items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value=""
                    id="default-toggle"
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-teal-300 dark:peer-focus:ring-teal-600 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-500"></div>
                </label>
              </li>
            </ul>

            <div className="mt-3 space-y-2 lg:hidden md:inline-block">
              <div className="gap-2">
                <Avatar hover={""} rounded={true} />
              </div>
              <Link
                to="/signin"
                className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
              >
                Sign in
              </Link>
              <Link
                to="/signup"
                className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden space-x-3 md:flex">
          {user?.uid ? (
            <h2
              onClick={handleLogOut}
              className="px-4 py-2 text-white bg-gray-700 rounded-md shadow hover:bg-orange-800"
            >
              Sign Out
            </h2>
          ) : (
            <>
              <Link
                to="/signin"
                className="px-4 py-2 text-white bg-gray-500 rounded-md shadow hover:bg-gray-800"
              >
                Sign in
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 text-gray-700 bg-white rounded-md shadow hover:bg-gray-100"
              >
                Sign up
              </Link>
            </>
          )}
          <div className="gap-2">
            {user?.uid && (
              <div>
                {user?.photoURL ? (
                  <img
                    className="w-10 h-10 text-white rounded-md"
                    alt="user icon"
                    title={user?.displayName}
                    src={user.photoURL}
                  />
                ) : (
                  <FaUserAlt
                    title={user?.displayName}
                    className="w-10 h-9 text-white rounded-md"
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;