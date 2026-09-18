import { createBrowserRouter, Navigate } from "react-router";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../layouts/HomeLayout";
import HomeLayout from "../layouts/HomeLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <HomeLayout />,
  },
]);
