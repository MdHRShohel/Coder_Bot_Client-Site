import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import SignIn from "./components/SignIn";
import Signup from './components/Signup';
import Main from './layout/Main';
import Blog from './Pages/Blog';
import Courses from './Pages/Courses';
import FAQ from './Pages/FAQ';
function App() {

  const router = createBrowserRouter([
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
          path: "/blog",
          element: <Blog></Blog>
        },
        {
          path: "/faq",
          element: <FAQ></FAQ>
        }
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
