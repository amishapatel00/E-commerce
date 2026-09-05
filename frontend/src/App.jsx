/* eslint-disable no-unused-vars */
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Productdetails from "./pages/Productdetails";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/Login", element: <Login /> },
  { path: "/Signup", element: <Signup /> },
  { path: "/Product/:id", element: <Productdetails /> },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
