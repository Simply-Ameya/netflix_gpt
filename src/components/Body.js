import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

const Body = () => {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/browser", element: <Browse /> },
  ]);

  return (
    <RouterProvider router={appRouter}>
      <Outlet />
    </RouterProvider>
  );
};

export default Body;
