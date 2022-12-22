import { createBrowserRouter } from "react-router-dom";
import UseState from "../components/UseState/UseState";
import { RouteObject } from "react-router-dom";
import React, { Children } from "react";
import App from "../App";
import Hooks from "../pages/home/Hooks";

const routes: RouteObject[] = [
  {
    path: "/",
    element: React.createElement(App),
    children: [
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
