import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Reservation from "../Pages/Reservation";
import About from "../Pages/About";
import Blog from "../Pages/Blog";
import Menu from "../Pages/Menu";
import PrivateRoute from "./PrivateRoute";
import Cart from "../Component/DashboardComponent/Cart";
import Loading from "../Loading/Loading";
import SignIn from "../Layout/SignIn";
import SignUp from "../Layout/SignUp";

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
        },
        {
          path: '/cart',
          element: <PrivateRoute><Cart/></PrivateRoute>
        },
    ]
  },
  {
    path: '/login',
    element: <SignIn/>
  },
  {
    path:'/signUp',
    element: <SignUp/>
  }
]);

export default router;