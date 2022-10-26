import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
const SignIn = () => {
  
  const { ProviderLogin, signInWithMailPass } = useContext(AuthContext);
  const [error, setError] = useState("");
  
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = e.target.email.value;
    const password = e.target.password.value;
    //console.log(email, password);
    signInWithMailPass(email, password)
      .then((result) => {
        console.log(result.user);
        setError("");
        form.reset();
        navigate('/');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    ProviderLogin(googleProvider)
      .then((result) => {
        console.log(result.user);
        setError("");
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGithubSignIn = () => {
    ProviderLogin(githubProvider)
      .then((result) => {
        console.log(result.user);
        setError("");
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

    return (
      <div className="md:mt-5 w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-md md:shadow-2xl dark:bg-gray-800 md:border border-cyan-400">
        <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">
          Welcome Back!
        </h1>

        <form onSubmit={handleSubmit} className="mt-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm text-gray-800 dark:text-gray-200"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              required
            />
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm text-gray-800 dark:text-gray-200"
              >
                Password
              </label>
              <Link className="text-xs text-gray-600 dark:text-gray-400 hover:underline">
                Forget Password?
              </Link>
            </div>

            <input
              type="password"
              name="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              required
            />
          </div>

          <div className="mt-6">
            <p
              className="mb-2 
          text-orange-500 text-center text-sm font-semibold
          dark:border-gray-400"
            >
              {error}
            </p>
            <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Login
            </button>
          </div>
        </form>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

          <h2 className="text-xs text-center text-gray-500 uppercase dark:text-gray-400">
            or login with Social Media
          </h2>

          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
        </div>

        <div className="flex items-center mt-6 -mx-2">
          <button
            onClick={handleGoogleSignIn}
            type="button"
            className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
          >
            <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
              <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
            </svg>

            <span className="hidden mx-2 sm:inline">Sign in with Google</span>
          </button>

          <button
            onClick={handleGithubSignIn}
            className="p-2 mx-2 text-sm font-medium text-gray-500 transition-colors duration-300 transform bg-gray-300 rounded-md hover:bg-gray-200"
          >
            <Link className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <FaGithub />
            </Link>
          </button>
        </div>

        <p className="mt-8 text-xs font-light text-center text-gray-400">
          {" "}
          Don't have an account?{" "}
          <Link
            to={"/signup"}
            className="font-medium text-gray-700 dark:text-gray-200 hover:underline"
          >
            Create One
          </Link>
        </p>
      </div>
    );
};

export default SignIn;