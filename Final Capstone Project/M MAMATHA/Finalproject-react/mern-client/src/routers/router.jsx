 import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";

import Singlebook from "../shop/Singlebook";
import Dashboard from "../dashboard/Dashboard";
import Dash from "../dashboard/Dash";
import Uploadbooks from "../dashboard/Uploadbooks";
import Managebooks from "../dashboard/Managebooks";
import Editbooks from "../dashboard/Editbooks";
import Signup from "../components/Signup";
import Login from "../components/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Logout from "../components/Logout";
import Cart from "../components/Cart";
  


const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: '/',
            element:<Home/>
        },
        {
            path:'/shop',
            element:<Shop/>
        },
        {
            path:'/about',
            element:<About/>
        },
        {
            path:'/cart',
            element:<Cart/>
        },{
          path:'/book/:id',
          element:<Singlebook/>,
          loader :({params}) => fetch(`http://localhost:5000/book/${params.id}`)
        }
      ]
    },
    {
      path: "/admin/dashboard",
      element:<Dashboard />,
      children:[
        {
          path: "/admin/dashboard",
          element: <PrivateRoute ><Dash /></PrivateRoute>

        },
        {
          path: "/admin/dashboard/upload",
          element:<Uploadbooks />
        },
        {
          path: "/admin/dashboard/manage",
          element:<Managebooks />
        },
        {
          path: "/admin/dashboard/edit-book/:id",
          element:<Editbooks />,
          loader : ({params}) => fetch(`http://localhost:5000/book/${params.id}`)

        }

      ]
      
    },
    {
      path:"/Sign-up",
      element: <Signup />
    } ,
    {
      path:"/Login",
      element: <Login />
    } ,
    {
      path:"/logout",
      element: <Logout/>
    } 
  ]);
  export default router; 


 