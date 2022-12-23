import { createBrowserRouter } from "react-router-dom";
import { RouteObject } from "react-router-dom";
import React, { Children } from "react";
import App from "../App";
import Hooks from "../pages/home/Hooks";
import UseState from "../pages/useState/UseState";

const routes: RouteObject[] = [
  {
    path: "/",
    element: React.createElement(App),
    children: [
      {
        path: "/",
        element: React.createElement(Hooks),
      },
      {
        path: "/hooks",
        element: React.createElement(Hooks),
      },
      {
        path: "/usestate",
        element: React.createElement(UseState),
      },
    ],
  },
];

const router = createBrowserRouter(routes);
export default router;
