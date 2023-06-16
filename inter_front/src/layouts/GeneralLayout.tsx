import React, { ReactElement } from "react";
import { NavigateFunction, Outlet, useNavigate } from "react-router-dom";
import Menu from "~/components/Menu.tsx";

function GeneralLayout(): ReactElement {
  const navigate: NavigateFunction = useNavigate();
  return (
    <div className="flex h-screen bg-slate-600">
      <div className="flex w-40 flex-col items-center rounded-r-lg bg-green-500">
        <button
          className="h-20 w-full rounded duration-300 hover:bg-green-400 active:bg-green-300"
          onClick={() => navigate("/")}
        >
          <h1 className="text-white ">HOME</h1>
        </button>
        <Menu />
      </div>
      <Outlet />
    </div>
  );
}

export default GeneralLayout;
