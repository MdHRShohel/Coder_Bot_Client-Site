import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";

const CheckOut = () => {
    const course = useLoaderData();
    const {user} = useContext(AuthContext);
    //console.log(course);
    const navigate = useNavigate();

    const CheckOutPayment = (e) => {
      e.preventDefault();
      toast.success("Payment Successful");
      navigate("/");
    }

  return (
    <div className="md:mt-5 mb-4 w-full max-w-sm p-6 md:border border-teal-400 mx-auto bg-white rounded-md md:shadow-2xl dark:bg-gray-800">
      <h1 className="text-2xl font-semibold text-center text-gray-700 dark:text-white">
        Check Out of {course.name}
        <br />
      </h1>
      <form onSubmit={CheckOutPayment} className="mt-6">
        <div>
          <label
            htmlFor="username"
            className="block text-sm text-gray-800 dark:text-gray-200"
          >
            Name
          </label>
          <input
            defaultValue={user.displayName}
            name="name"
            type="text"
            readOnly
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-800 dark:text-gray-200">
            Email Address
          </label>
          <input
            name="email"
            type="text"
            required
            placeholder="e.g. md.hrshohel@gmail.com"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div>
          <label
            htmlFor="username"
            className="block text-sm text-gray-800 dark:text-gray-200"
          >
            Billing Address
          </label>
          <input
            name="address"
            type="text"
            required
            placeholder="House No, Street, City, State, Zip"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div>
          <label
            htmlFor="username"
            className="block text-sm text-gray-800 dark:text-gray-200"
          >
            Phone Number
          </label>
          <input
            name="phone"
            type="number"
            required
            placeholder="+8801XXXXXXXXX"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div className="mt-4">
          <div>
            <label className="block text-sm text-gray-800 dark:text-gray-200">
              Card Holder Name
            </label>
            <input
              placeholder="Shahriar Ahmed"
              name="name"
              type="text"
              required
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm text-gray-800 dark:text-gray-200"
              required
            >
              Card Details
            </label>
          </div>
          <input
            name="card"
            type="number"
            required
            placeholder="XXXX XXXX XXXX XXXX"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
          <input
            name="card"
            type="text"
            required
            placeholder="MM/YY"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
          <input
            name="card"
            type="text"
            required
            placeholder="CVC"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="flex items-center mb-4 mt-4">
          <input
            defaultChecked
            type="checkbox"
            value=""
            className="w-4  h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="checkbox-1"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree to the{" "}
            <span className="text-blue-600 hover:underline dark:text-blue-500">
              terms and conditions.
            </span>
          </label>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="w-full px-4 py-2 
            font-semibold tracking-wide text-white transition-colors duration-300 transform bg-teal-700 rounded-md hover:bg-teal-500 hover:text-slate-800 focus:outline-none focus:bg-teal-800"
          >
            Check Out
          </button>
        </div>
      </form>      

    </div>
  );
};

export default CheckOut;
