import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  // future routes: { path: '/shop', element: <Shop /> }, { path: '/product/:id', element: <Product /> }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
