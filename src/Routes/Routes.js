import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import SignIn from "../components/SignIn";
import Signup from "../components/Signup";
import Main from "../layout/Main";
import Blog from "../Pages/Blog";
import CourseDetails from "../Pages/CourseDetails";
import Courses from "../Pages/Courses";
import FAQ from "../Pages/FAQ";

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
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
    ],
  },
]);
