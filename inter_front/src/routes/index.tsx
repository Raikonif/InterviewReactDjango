import React from "react";
import { useRoutes } from "react-router-dom";
import GenericRoutes from "./GenericRoutes.tsx";

function RoutesApp() {
  return useRoutes([GenericRoutes]);
}

export default RoutesApp;
