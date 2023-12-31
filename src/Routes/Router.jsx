import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Home/Login/Login";
import Register from "../Pages/Home/Register/Register";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import PrivetRoute from "./PrivetRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/categories.json"),
      },
      {
        path: "/news/:id",
        element: (
          <PrivetRoute>
            <NewsDetails></NewsDetails>,
          </PrivetRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
