import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Reservation from "../Pages/Reservation";
import About from "../Pages/About";
import Blog from "../Pages/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
        {
            path: '/',
            element: <Home/>
        },
        {
          path: '/reservation',
          element: <Reservation/>
        },
        {
          path: '/about',
          element: <About/>
        },
        {
          path: '/blog',
          element:<Blog/>
        }
    ]
  },
]);

export default router;