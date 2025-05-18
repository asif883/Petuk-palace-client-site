import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Reservation from "../Pages/Reservation";
import About from "../Pages/About";
import Blog from "../Pages/Blog";
import Menu from "../Pages/Menu";

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
        },
        {
          path:'/menu',
          element: <Menu/>
        }
    ]
  },
]);

export default router;