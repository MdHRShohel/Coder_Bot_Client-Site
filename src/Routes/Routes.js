import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import SignIn from "../Pages/SignIn";
import Signup from "../Pages/Signup";
import Main from "../layout/Main";
import Blog from "../Pages/Blog";
import CourseDetails from "../Pages/CourseDetails";
import Courses from "../Pages/Courses";
import FAQ from "../Pages/FAQ";
import CheckOut from "../Pages/CheckOut";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/courses/:id",
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/courses/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
        loader: () =>
          fetch(`http://localhost:5000/blog`),
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
        ),
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
    ],
  },
]);
