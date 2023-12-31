import { createBrowserRouter } from "react-router-dom";
import Root from "../../layout/Root/Root";
import Home from "../../Pages/Home/Home";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import AllServices from "../../Pages/AllServices/AllServices";
import AddServices from "../../Pages/AddServices/AddServices";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ServiceDetails from "../../components/ServiceDetails/ServiceDetails";
import MyServices from "../../Pages/MyServices/MyServices";
import ServiceUpdate from "../../Pages/ServiceUpdate/ServiceUpdate";
import MySchedule from "../../Pages/MySchedule/MySchedule";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/services",
        element: <AllServices></AllServices>,
      },
      {
        path: "/addServices",
        element: (
          <PrivateRoute>
            <AddServices></AddServices>
          </PrivateRoute>
        ),
      },
      {
        path: "/services/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/myServices",
        element: (
          <PrivateRoute>
            <MyServices></MyServices>
          </PrivateRoute>
        ),
      },
      {
        path: "/serviceUpdate/:id",
        element: (
          <PrivateRoute>
            <ServiceUpdate></ServiceUpdate>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://bug-shield-server.vercel.app/services/${params.id}`),
      },
      {
        path: "/mySchedules",
        element: (
          <PrivateRoute>
            <MySchedule></MySchedule>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
