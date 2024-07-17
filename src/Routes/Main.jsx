import {createBrowserRouter} from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard/>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        }
      ]
    },
  ]);
  export default router