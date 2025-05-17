import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Reservation from "../Pages/Reservation";

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
        }
    ]
  },
]);

export default router;