import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Orders from "../Pages/Order/Orders";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Secret from "../Pages/Home/Shared/Secret";
import PrivateRoutes from "./PrivateRoutes";
import DashBoard from "../Layout/DashBoard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItmes from "./AddItmes/AddItmes";
import MangeItems from "../Pages/Dashboard/MangeItems/MangeItems";
import AdminRoutes from "./AdminRoutes";
import UpdateItems from "../Pages/Dashboard/UpdateItem/UpdateItems";
import Payment from "../Pages/Dashboard/Paymet/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
// import AdminRoutes from "./AdminRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/menu',
        element: <Menu></Menu>
      },
      {
        path: '/order/:category',
        element: <Orders></Orders>
      },
      {
        path: '/login',
        element: <Login></Login>
      }, {
        path: '/signup',
        element: <Signup></Signup>
      },
      {
        path: "/secret",
        element: <PrivateRoutes><Secret></Secret></PrivateRoutes>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: 'cart',
        element: <Cart></Cart>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path:'paymentHistory',
        element:<PaymentHistory></PaymentHistory>
      },
      {
        path:'userHome',
        element: <UserHome></UserHome>
      },
      // admin Routes 
      {
        path:'adminHome',
        element: <AdminRoutes><AdminHome></AdminHome></AdminRoutes>
      },
      {
        path: 'users',
        element: <AdminRoutes> <AllUsers></AllUsers></AdminRoutes>
      },
      {
        path: 'addItems',
        element:<AdminRoutes><AddItmes></AddItmes></AdminRoutes>
      },
      {
        path: 'mangeItems',
        element: <AdminRoutes><MangeItems></MangeItems></AdminRoutes>
      },
      {
        path: 'updateItem/:_id',
        element: <UpdateItems></UpdateItems>,
        loader: ({params}) => fetch(`https://mostofa-restaurant-server.vercel.app/menu/${params._id}`)

      }
    ]
  }
]);