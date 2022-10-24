import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Signin from "./components/Signin";
import Signup from './components/Signup';
import Main from './layout/Main';
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
          element: <Signin></Signin>,
        },
        {
          path: "/signup",
          element: <Signup></Signup>,
        },
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
