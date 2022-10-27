import React from 'react';

const ErrorPage = () => {
    return (
      <div>
        <div className=" min-h-screen text-center">
          <h2 className="mt-20 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
            Oops... Error: 404 Page not found!
            <span className="sm:block">
              {" "}
              You have entered in a wrong Route.{" "}
            </span>
          </h2>
        </div>
      </div>
    );
};

export default ErrorPage;