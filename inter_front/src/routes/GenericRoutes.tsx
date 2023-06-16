import GeneralLayout from "../layouts/GeneralLayout.tsx";
import React from "react";
import Home from "~/pages/home";
import Problem1 from "~/pages/problem1";
import Problem2 from "~/pages/problem2";

const GenericRoutes = {
  path: "",
  element: <GeneralLayout />,
  children: [
    {
      path: "",
      element: <Home />,
    },
    {
      path: "problem1",
      element: <Problem1 />,
    },
    {
      path: "problem2",
      element: <Problem2 />,
    },
  ],
};

export default GenericRoutes;
