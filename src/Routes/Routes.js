import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Main from "../layout/Main";
import Blog from "../Pages/Blog";
import CheckOut from "../Pages/CheckOut";
import CourseDetails from "../Pages/CourseDetails";
import Courses from "../Pages/Courses";
import FAQ from "../Pages/FAQ";
import SignIn from "../Pages/SignIn";
import Signup from "../Pages/Signup";
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
          fetch(`https://coder-bot-server.vercel.app/courses/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
        loader: () => fetch(`https://coder-bot-server.vercel.app/blog`),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://coder-bot-server.vercel.app/courses/${params.id}`),
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>
      }
    ],
  },
]);
