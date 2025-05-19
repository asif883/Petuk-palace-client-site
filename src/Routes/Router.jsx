import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Reservation from "../Pages/Reservation";
import About from "../Pages/About";
import Blog from "../Pages/Blog";
import Menu from "../Pages/Menu";
import PrivateRoute from "./PrivateRoute";
import SignIn from "../Layout/SignIn";
import SignUp from "../Layout/SignUp";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/DashPages/Cart";
import Overview from "../Pages/DashPages/Overview";
import AllUser from "../Pages/DashPages/AllUser";
import MyOrders from "../Pages/DashPages/MyOrder";
import Profile from "../Pages/DashPages/Profile";
import DashMenu from "../Pages/DashPages/DashMenu";
import AddMenu from "../Pages/DashPages/AddMenu";
import PendingOrder from "../Pages/DashPages/PendingOrder";


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
    ]
  },
  {
    path: '/login',
    element: <SignIn/>
  },
  {
    path:'/signUp',
    element: <SignUp/>
  },
  {
    path: '/dashboard',
    element:<PrivateRoute><Dashboard/></PrivateRoute>,
    children: [
      {
        path: '/dashboard/my-cart',
        element: <Cart/>
      },
      {
        path: '/dashboard/overview',
        element: <Overview/>
      },
      {
        path: '/dashboard/users',
        element:<AllUser/>
      },
      {
        path: '/dashboard/my-order',
        element: <MyOrders/>
      },
      {
        path:'/dashboard/profile',
        element:<Profile/>
      },
      {
        path:'/dashboard/menu',
        element: <DashMenu/>
      },
      {
        path:'/dashboard/add-menu',
        element: <AddMenu/>
      },
      {
        path: '/dashboard/check-order',
        element: <PendingOrder/>
      }
    ]
  }
]);

export default router;